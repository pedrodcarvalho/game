const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.session.username);
    res.render('home.ejs', { username: req.session.username }, (err, html) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(html);
        }

        return res.end();
    });
});

module.exports = router;
