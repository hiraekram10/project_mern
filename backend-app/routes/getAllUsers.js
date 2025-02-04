import express from 'express';
import User from '../Schema/UserSchema.js';
import { enums } from '../costant/enum.js';

const getAllUsers = express.Router();

// Get All Users
getAllUsers.get('/', async (req, res) => {
    try {
        const users = await User.find(); 
        // const users = await User.find({name:"hira"}); 

        // if (users.length === 0) {
        //     return res.status(404).json({ message: enums.No_Users_Found });
        // }

        res.status(200).json({
            // message: "users",
            users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: enums.Error_connection });
    }
});

export default getAllUsers;
