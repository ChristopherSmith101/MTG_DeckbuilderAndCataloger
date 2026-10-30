require('node:process').loadEnvFile();

const express = require('express');

// Import routes
const healthRouter = require('./routes/health');
const authRouter = require('./routes/auth');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});