const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function setupDatabase() {
  let connection;

  try {
    console.log('🔄 Setting up database...');

    // Create connection without database first
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
    });

    // Create database if it doesn't exist
    await connection.query('CREATE DATABASE IF NOT EXISTS portfolio_db');
    console.log('✅ Database created');

    // Switch to the database
    await connection.query('USE portfolio_db');

    // Read and execute schema
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Remove single-line comments and split into statements
    const cleanedSchema = schema
      .split('\n')
      .map(line => line.trim())
      .filter(line => !line.startsWith('--'))
      .join('\n');

    const statements = cleanedSchema
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);

    // Execute each statement (skip CREATE DATABASE and USE — already done above)
    for (const statement of statements) {
      const upper = statement.toUpperCase();
      if (upper.startsWith('CREATE DATABASE') || upper.startsWith('USE ')) {
        continue;
      }
      await connection.query(statement);
    }

    console.log('✅ Database schema created successfully');
    console.log('✅ Sample data inserted');
    console.log('🎉 Database setup completed!');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run setup if called directly
if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase;