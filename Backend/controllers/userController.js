const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const exists = await userModel.findOne({email});

        if(exists) {
            return res.json({Success: false, message: "User already exists."})
        }

        if(!validator.isEmail(email)){
            return res.json({Success: false, message: "Please enter a valid email."})
        }

        if(password < 8){
            return res.json({Success: false, message: "Please enter a strong password."})
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt); 

        const newUser = new userModel({
            name,
            email, 
            password: hashPassword
        })

        const user = await newUser.save()
         
        const createToken = (id) => {
            return jwt.sign({id}, process.env.JWT_SECRET)
        }

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

module.exports = {registerUser}