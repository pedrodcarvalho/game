const express = require('express');
const app = express();

const path = require('path');

require('dotenv').config();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
