const user = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) =>{
    try{
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    }catch(error){

    }
};