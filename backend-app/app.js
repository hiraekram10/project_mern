import express from 'express'
import mongoose from 'mongoose';
import User from './Schema/UserSchema.js';
import userRegRoutes from './routes/UserRegRoute.js';
import dotenv from 'dotenv'
import userLoginRoutes from './routes/login.js';
import getAllUsers from './routes/getAllUsers.js';
import deleteUser from './routes/deleteUser.js';
import updateUser from './routes/updateUser.js';
import cors from 'cors'

const app = express()
dotenv.config();
const port = process.env.PORT || 5000
 const mongoUrl= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_Password}@cluster0.hc1sq.mongodb.net/padelusers?retryWrites=true&w=majority&appName=Cluster0`

 app.use(express.json());
 app.use(cors())

 mongoose.connect(mongoUrl).then(()=>{
    console.log("database connected");
    
 }).catch((error)=>{
  console.log("error in database connection",error);
  
 })
app.get('/',(req,res)=>{
  res.send("Welcome.js")
})

// app.post('/register', async (req, res) => {
//     try {
//       const { name , email, password,phoneNo} = req.body;
//       const existingUser = await User.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ error: 'User already exists' });
//       }
//     //   const hashedPassword = await bcrypt.hash(password, 10);
//       const user = new User({ name, email, password,phoneNo});
//       await user.save();
//       res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Error registering user' });
//     }
//   });
app.use('/register',userRegRoutes)
app.use('/login',userLoginRoutes)
app.use('/users',getAllUsers)
app.use('/users/delete',deleteUser)
app.use('/users/update',updateUser)

app.listen(port,()=>{
    console.log("server started...",port);
    
})
