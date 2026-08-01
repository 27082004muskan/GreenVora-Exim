const dns = require('dns');
const mongoose = require('mongoose');

let connectPromise = null;

/** Node's c-ares resolver can get querySrv ECONNREFUSED on some ISP DNS; Atlas SRV still works via public DNS. */
function configureMongoDns() {
  const uri = process.env.MONGO_URI;
  if (!uri?.startsWith('mongodb+srv://')) {
    return;
  }

  const servers = process.env.MONGO_DNS_SERVERS
    ? process.env.MONGO_DNS_SERVERS.split(',').map((s) => s.trim()).filter(Boolean)
    : ['8.8.8.8', '8.8.4.4', '1.1.1.1'];

  dns.setServers(servers);
}

const connectOptions = {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
  minPoolSize: 1,
};

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set');
  }

  configureMongoDns();

  if (!connectPromise) {
    connectPromise = mongoose
      .connect(process.env.MONGO_URI, connectOptions)
      .then((conn) => {
        console.log('MongoDB connected');
        return conn;
      })
      .catch((err) => {
        connectPromise = null;
        throw err;
      });
  }

  return connectPromise;
}

/** Wait until Mongo is ready (used on cold start / reconnect). */
async function ensureConnected(timeoutMs = 20000) {
  if (mongoose.connection.readyState === 1) {
    return true;
  }

  try {
    await Promise.race([
      connectDB(),
      new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Database connection timeout')), timeoutMs);
      }),
    ]);
  } catch (err) {
    console.error('ensureConnected:', err.message);
    return false;
  }

  return mongoose.connection.readyState === 1;
}

module.exports = { connectDB, ensureConnected };
