const express = require("express");
const path = require("path");

const router = express.Router();


router
    .get("/", (req, res) => {
        console.log("정보 페이지");
        res.sendFile(path.join(__dirname, "../src/info.html"));
    })
    .post("/", (req, res) => {
        return;
    })
    .put("/", (req, res) => {
        return;
    })
    .delete("/", (req, res) => {
        return;
    });

module.exports = router;