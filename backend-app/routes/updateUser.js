import express from 'express';
import User from '../Schema/UserSchema.js';
import { enums } from '../costant/enum.js';

const updateUser = express.Router();

// Get All Users
updateUser.put('/:id', async (req, res) => {
    try {
        
        const{id} =req.params;
        // const user = await User.findById(id);

        
    const user=  await User.findByIdAndUpdate(id,req.body, { new: true })

       

        res.status(200).json({
            message: "user profile updated successfully",
            updateduser:user
          
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: enums.Error_connection });
    }
});

export default updateUser;
