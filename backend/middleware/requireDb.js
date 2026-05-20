const { ensureConnected } = require('../utils/db');

async function requireDb(req, res, next) {
  const connected = await ensureConnected(25000);
  if (!connected) {
    return res.status(503).json({
      error: 'Database is starting. Please try again in a few seconds.',
      retry: true,
    });
  }
  return next();
}

module.exports = requireDb;
