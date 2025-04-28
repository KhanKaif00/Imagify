import express from 'express';
import {registerUser, loginUser,userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';


const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits',userAuth, userCredits); // Assuming you have a middleware to check the token and set req.user

export default userRouter;

