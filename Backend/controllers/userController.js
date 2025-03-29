const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

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
         
        

        const token = createToken(user._id)

        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

    if(!user){
        res.json({success: false, message: "user does not exist."})
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch) {
        const token = createToken(user._id)
        return res.json({success: true, token})
    } else{
        return res.json({success: false, message: "invalid credentials"})
    }

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
} 

const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Invalid credentials."})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

module.exports = {registerUser, loginUser, adminLogin}