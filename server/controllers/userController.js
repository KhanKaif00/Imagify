import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.json({ success: true, token, user: { name: user.name } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
        res.json({ success: true, token, user: { name: user.name } });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

export const userCredits = async (req, res) => {
    
    try{
        const userId = req.user.id; // Assuming you have middleware to set req.user

     const user = await userModel.findById(userId)
      
     res.json({success:true, user: {name: user.name, credits: user.creditBalance}})

    


    } catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }

}
