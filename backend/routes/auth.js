const express = require('express');
const argon2 = require('argon2');
const pool = require('../db/pool');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body ?? {};

    // Ensure all fields are strings
    if (
        typeof username !== 'string' ||
        typeof email !== 'string' ||
        typeof password !== 'string'
    ) {
        return res.status(400).json({
            message: 'Username, email, and password must be strings.'
        });
    }

    // Validate username
    if (username.length < 3 || username.length > 50) {
        return res.status(400).json({
            message: 'Username must be between 3 and 50 characters.'
        });
    }

    // Validate email
    if (
        email.length > 255 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
        return res.status(400).json({
            message: 'Invalid email address.'
        });
    }

    // Validate password
    if (password.length < 12 || Buffer.byteLength(password, 'utf8') > 1024) {
        return res.status(400).json({
            message: 'Password must be at least 12 characters and no more than 1024 bytes.'
        });
    }

	try {
        const passwordHash = await argon2.hash(password, {
            type: argon2.argon2id
        });

		const result = await pool.query(
			`INSERT INTO users (username, email, password_hash)
			VALUES ($1, $2, $3)
			RETURNING id, username, email, created_at`,
			[username, email, passwordHash]
		);

		return res.status(201).json({
			message: 'Account created successfully.',
			user: result.rows[0]
		});
    } catch (error) {
		if (error.code === '23505') {
			return res.status(409).json({
				message: 'Username or email is already registered.'
			});
		}

		console.error('Registration failed:', error);

		return res.status(500).json({
			message: 'Registration failed.'
		});
	}
});

module.exports = router;