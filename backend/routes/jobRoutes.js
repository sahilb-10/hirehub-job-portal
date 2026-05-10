const express = require("express");
const router = express.Router();

const { createJob, getJobs, getJobById, updateJob } = require("../controllers/jobController");
router.post("/", createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);

module.exports = router;