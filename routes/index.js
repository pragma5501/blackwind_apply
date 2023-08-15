const express = require('express');
const path = require('path');

const router = express.Router();

router
    .get('/', (req, res) => {
        console.log("index page");
        res.sendFile(path.join(__dirname, "../src/index.html"));
    });

module.exports = router;

