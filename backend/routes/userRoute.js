import express from 'express';
import { getProfile, loginUser, registerUser, updateProfile } from '../controllers/userController.js'; // Adjust the path accordingly
import authUser from '../middlewares/authUser.js';
import upload from '../middlewares/multer.js'; 

const userRouter = express.Router();

// Register user route
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/get-profile', authUser,getProfile);
userRouter.post('/update-profile', upload.single('image'),authUser,updateProfile);

export default userRouter;