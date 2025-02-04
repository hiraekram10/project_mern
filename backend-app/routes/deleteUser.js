import express from 'express';
import User from '../Schema/UserSchema.js';
import { enums } from '../costant/enum.js';

const deleteUser = express.Router();

// Get All Users
deleteUser.delete('/:id', async (req, res) => {
    try {
        // const users = await User.find(); 
        const{id} =req.params
       await User.findByIdAndDelete(id); 

       

        res.status(200).json({
            message: "user deleted",
          
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: enums.Error_connection });
    }
});

export default deleteUser;
