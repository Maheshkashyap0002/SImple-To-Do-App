// const userModel = require('../model/user.model')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')



// const isProduction = process.env.NODE_ENV === "production";

// const cookieOptions = {
//   httpOnly: true,
//   sameSite: isProduction ? "none" : "lax",
//   secure: isProduction,
//   maxAge: 7 * 24 * 60 * 60 * 1000
// };

// async function registerUser(req, res) {

//   const { username, email, password} = req.body;

//   const isUserAlreadyExist = await userModel.findOne({ 
//     $or: [
//        {username},
//        {email}
//     ]
//   })
  
//   if(isUserAlreadyExist){
//     return res.status(409).json({ message: "User already exits" })
//   }

//   const hash = await bcrypt.hash(password, 10)
//   const user = await userModel.create({
//       username,
//       email,
//       password: hash,
//   })
//     const token = jwt.sign({
//       id: user._id,
//     }, process.env.JWT_SECRET)
  
//     res.cookie('token', token, cookieOptions)

//     res.status(201).json({
//       message: "User registered successfully",
//       user:{
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       }
//     })
// }

// async function loginUser(req, res) {

//   const {username , email, password} = req.body;

//   const user = await userModel.findOne({
//     $or: [
//       {username},
//       {email}
//     ]
//   })

//   if(!user){
//     return res.status(404).json({ message: "User not found" })
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password)

//   if(!isPasswordValid){
//     return res.status(401).json({ message: "Invalid password" })
//   }


//   const token = jwt.sign({
//       id: user._id,
//     }, process.env.JWT_SECRET)
  
//     res.cookie('token', token, cookieOptions )

//     res.status(201).json({
//       message: "User Logged in successfully",
//       user:{
//         id: user._id,
//         username: user.username,
//         email: user.email,
//       }
//     })

// }

// async function logoutUser(req, res) {
//   res.clearCookie("token", {
//     httpOnly: true,
//     sameSite: isProduction ? "none" : "lax",
//     secure: isProduction
//   });

//   res.status(200).json({
//     message: "User logged out successfully"
//   });
// }

// module.exports = { registerUser , loginUser , logoutUser }
