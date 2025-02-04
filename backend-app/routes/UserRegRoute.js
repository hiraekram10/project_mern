import express from 'express'
import User from '../Schema/UserSchema.js';
import { enums } from '../costant/enum.js';
import bcrypt from 'bcrypt'


const userRegRoutes = express.Router()

userRegRoutes.post('/', async (req, res) => {
    try {
        const { name, email, password, phoneNo } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }
        //   const hashedPassword = await bcrypt.hash(password, 10);
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({ name, email,password:hashedPassword, phoneNo });
        await user.save();
        res.status(201).json({ message: enums.Succes_Mssg });
    } catch (error) {
        res.status(500).json(error);
    }
});

export default userRegRoutes

