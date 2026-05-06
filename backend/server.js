const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("API is running...");
});

const PORT = 5000;


