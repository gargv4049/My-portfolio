const express = require('express');

// Create router
const router = express.Router();

let db = null;
let dbConnected = false;

// Function to set database connection (called from server)
function setDatabaseConnection(database, connected) {
  db = database;
  dbConnected = connected;
}

// Get all contact messages (admin)
router.get('/contacts', async (req, res) => {
  try {
    if (!dbConnected || !db) {
      return res.status(503).json({
        success: false,
        message: 'Database not connected',
        note: 'Please configure database to access admin features'
      });
    }

    const [rows] = await db.query(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    );

    res.json({
      success: true,
      data: rows,
      count: rows.length
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

// Mark contact as read
router.put('/contacts/:id/read', async (req, res) => {
  try {
    if (!dbConnected || !db) {
      return res.status(503).json({
        success: false,
        message: 'Database not connected'
      });
    }

    const { id } = req.params;
    const { isRead } = req.body;

    await db.query(
      'UPDATE contact_messages SET is_read = ? WHERE id = ?',
      [isRead, id]
    );

    res.json({
      success: true,
      message: 'Contact updated successfully'
    });
  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact'
    });
  }
});

// Delete contact message
router.delete('/contacts/:id', async (req, res) => {
  try {
    if (!dbConnected || !db) {
      return res.status(503).json({
        success: false,
        message: 'Database not connected'
      });
    }

    const { id } = req.params;

    await db.query('DELETE FROM contact_messages WHERE id = ?', [id]);

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete contact'
    });
  }
});

// Get dashboard statistics
router.get('/stats', async (req, res) => {
  try {
    if (!dbConnected || !db) {
      return res.status(503).json({
        success: false,
        message: 'Database not connected',
        data: {
          today_messages: 0,
          unread_messages: 0,
          total_projects: 0,
          today_visitors: 0
        }
      });
    }

    const [stats] = await db.query('SELECT * FROM dashboard_stats');

    res.json({
      success: true,
      data: stats[0] || {
        today_messages: 0,
        unread_messages: 0,
        total_projects: 0,
        today_visitors: 0
      }
    });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard stats'
    });
  }
});

module.exports = { router, setDatabaseConnection };
