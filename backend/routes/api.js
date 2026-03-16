const express = require('express');
const { body, validationResult } = require('express-validator');

// Create router
const router = express.Router();

// Get database connection from server
let db = null;
let dbConnected = false;

// Function to set database connection (called from server)
function setDatabaseConnection(database, connected) {
  db = database;
  dbConnected = connected;
}

// Validation middleware
const validateContact = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('subject').trim().isLength({ min: 5, max: 200 }).withMessage('Subject must be 5-200 characters'),
  body('message').trim().isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters')
];

// Contact form submission
router.post('/contact', validateContact, async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Check if database is connected
    if (!dbConnected || !db) {
      console.log(`📧 Contact message received (no DB): ${name} (${email})`);
      return res.status(200).json({
        success: true,
        message: 'Message received! (Database not configured yet)',
        note: 'Database not connected - message logged to console only'
      });
    }

    // Insert into database
    const [result] = await db.query(
      'INSERT INTO contact_messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, NOW())',
      [name, email, subject, message]
    );

    console.log(`📧 New contact message from ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      id: result.insertId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

// Get all projects
router.get('/projects', async (req, res) => {
  try {
    const { category, featured } = req.query;

    // Check if database is connected
    if (!dbConnected || !db) {
      return res.json({
        success: true,
        data: [],
        count: 0,
        note: 'Database not connected - returning empty projects list'
      });
    }

    let sql = 'SELECT * FROM projects WHERE is_active = 1';
    const params = [];

    if (category && category !== 'all') {
      sql += ' AND category = ?';
      params.push(category);
    }

    if (featured === 'true') {
      sql += ' AND is_featured = 1';
    }

    sql += ' ORDER BY created_at DESC';

    const [rows] = await db.query(sql, params);

    res.json({
      success: true,
      data: rows,
      count: rows.length
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects'
    });
  }
});

// Get project by ID
router.get('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if database is connected
    if (!dbConnected || !db) {
      return res.status(404).json({
        success: false,
        message: 'Project not found - database not connected'
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM projects WHERE id = ? AND is_active = 1',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project'
    });
  }
});

// Get skills
router.get('/skills', async (req, res) => {
  try {
    // Check if database is connected
    if (!dbConnected || !db) {
      return res.json({
        success: true,
        data: [],
        note: 'Database not connected - returning empty skills list'
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM skills WHERE is_active = 1 ORDER BY category, proficiency DESC'
    );

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills'
    });
  }
});

// Get visitor analytics
router.get('/analytics/visitors', async (req, res) => {
  try {
    // Check if database is connected
    if (!dbConnected || !db) {
      return res.json({
        success: true,
        data: [],
        note: 'Database not connected - returning empty analytics'
      });
    }

    const [rows] = await db.query(`
      SELECT
        DATE(created_at) as date,
        COUNT(*) as visitors
      FROM visitor_logs
      WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `);

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch analytics'
    });
  }
});

// Track visitor
router.post('/analytics/track', async (req, res) => {
  try {
    const { page, referrer, userAgent } = req.body;
    const ip = req.ip || req.connection.remoteAddress;

    // Check if database is connected
    if (!dbConnected || !db) {
      console.log(`📊 Visitor tracked (no DB): ${ip} - ${page}`);
      return res.json({ success: true, note: 'Database not connected - tracking logged to console only' });
    }

    await db.query(
      'INSERT INTO visitor_logs (ip_address, page, referrer, user_agent, created_at) VALUES (?, ?, ?, ?, NOW())',
      [ip, page || '/', referrer || '', userAgent || '']
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Track visitor error:', error);
    // Don't return error to avoid breaking frontend
    res.json({ success: false });
  }
});

module.exports = { router, setDatabaseConnection };