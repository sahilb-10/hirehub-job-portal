const Job = require("../models/Jobs");

const createJob = async (req, res) => {
    try {
        const job = await Job.create(req.body);
        res.status(201).json(job);
    }catch(error){

    }
};