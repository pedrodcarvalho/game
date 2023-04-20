const express = require('express');
const router = express.Router();

const fs = require('fs');

router.post('/', (req, res) => {
    req.session.username = req.body.username;
    req.session.password = req.body.password;

    fs.readFile('src/db/provisory-db.txt', (err, data) => {
        data = `{${data.toString().slice(0, -1)}}`;
        const db = JSON.parse(data);

        for (const user in db) {
            if (db[user].username === req.session.username && db[user].password === req.session.password) {
                res.redirect('/home');
                return res.end();
            }
            else {
                res.redirect('/');
                return res.end();
            }
        }
    });
});

module.exports = router;
