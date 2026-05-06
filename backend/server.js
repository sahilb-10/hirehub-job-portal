const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
