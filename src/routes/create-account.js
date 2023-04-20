const express = require('express');
const router = express.Router();

const fs = require('fs');

router.post('/', (req, res) => {
    fs.writeFileSync('src/db/provisory-db.txt', `"${req.body.username}":{"username":"${req.body.username}","password":"${req.body.password}"},`, { flag: 'a+' }, (err) => {
        if (err) {
            console.log(err);
        }
    });

    res.redirect('/');
    res.end();
});

module.exports = router;
