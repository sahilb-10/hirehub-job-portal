const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/user", userRoutes);

connectDB();

app.get("/", (req,res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
