import express from 'express'
import User from '../Schema/UserSchema.js';
import { enums } from '../costant/enum.js';
import bcrypt from 'bcrypt'


const userLoginRoutes= express.Router()

userLoginRoutes.post('/', async (req, res) => {
    try {
        const {  email, password, } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const isMatch =  bcrypt.compareSync(password, user.password); 
            if(isMatch){
                 res.status(200).json({ status:200,user});
            }else{
                res.status(401).json({ status:401, message:"incorrect password"});
            }
        }else{
            return res.status(400).json({ status:404,message: 'User not Found' });
        }
    
   
    } catch (error) {
        res.status(500).json({ error: error || "wrror in login" });
    }
});

export default userLoginRoutes

