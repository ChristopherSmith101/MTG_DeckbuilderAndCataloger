require('node:process').loadEnvFile();

const express = require('express');

// Import routes
const healthRouter = require('./routes/health');

const app = express();

const PORT = 3000;

app.use('/api/health', healthRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});