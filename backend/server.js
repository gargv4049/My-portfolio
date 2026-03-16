const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const mysql = require('mysql2/promise');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Database connection pool
let db;
let dbConnected = false;

async function initializeDatabase() {
  try {
    db = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'portfolio_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    console.log('✅ Database connection pool created');

    // Test the connection
    const connection = await db.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    dbConnected = true;

    // Set database connection for routes
    setDatabaseConnection(db, dbConnected);
    setAdminDbConnection(db, dbConnected);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('⚠️  Server will run without database functionality');
    console.log('💡 To enable database features:');
    console.log('   1. Set up MySQL server');
    console.log('   2. Configure .env with correct DB credentials');
    console.log('   3. Run: node database/setup.js');
    dbConnected = false;

    // Set database connection for routes (null, false)
    setDatabaseConnection(null, false);
    setAdminDbConnection(null, false);
  }
}

// Routes
const { router: apiRoutes, setDatabaseConnection } = require('./routes/api');
const { router: adminRouter, setDatabaseConnection: setAdminDbConnection } = require('./routes/admin');

app.use('/api', apiRoutes);
app.use('/api/admin', adminRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Portfolio Backend API running on port ${PORT}`);
  console.log(`📡 API URL: http://localhost:${PORT}/api`);
  await initializeDatabase();
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down gracefully...');
  if (db) {
    await db.end();
    console.log('✅ Database connection closed');
  }
  process.exit(0);
});

module.exports = app;