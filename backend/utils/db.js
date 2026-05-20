const mongoose = require('mongoose');

let connectPromise = null;

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
