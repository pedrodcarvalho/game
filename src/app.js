const express = require('express');
const app = express();

const path = require('path');

require('dotenv').config();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';

const bodyParser = require('body-parser');

const session = require('express-session');

const account = require('./routes/create-account.js');
const logIn = require('./routes/log-in.js');
const home = require('./routes/home.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, '/assets')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/create-account', account);
app.use('/log-in', logIn);

app.use('/home', home);

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
