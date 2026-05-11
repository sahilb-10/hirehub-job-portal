const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) =>{
    try{
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: "User Registered Succesfully",
        });
    }catch(error){
        res.status(500).json({
            message: error.message,
        });
    }
};

const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await user.findOne({email});
        if (!user) {
            return res.status(404).json({
                message: "User not Found",
            });
        }
    }catch(error){

    }
};

module.exports = {
    registerUser,
};