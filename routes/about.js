const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("Time: ", Date.now())
    next()
});

router.get('/', (req, res) => {
    res.send('<div><h1>About Page!</h1><h2>This page is all about me</h2></div>')
});

router.get('/me', (req, res) =>{
    res.send([
        {
            "id":"me",
            "name":"Neha",
            "message":"Hello"
        }, {
            "id":"not-me",
            "name":"Someoneelse",
            "message":"Bye"
        }

    ])
});

module.exports = router;