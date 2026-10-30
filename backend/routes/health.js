const express = require('express');
const pool = require('../db/pool');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'ok' });
});

router.get('/database', async (req, res) => {
    try {
        const result = await pool.query('SELECT current_database()');

        res.json({
            status: 'ok',
            database: result.rows[0].current_database
        });
    } catch (error) {
        console.error('Database connection failed:', error);

        res.status(503).json({
            status: 'error',
            message: 'Database unavailable'
        });
    }
});

module.exports = router;