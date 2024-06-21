
import { User } from "../models/user.model";
import asyncHandler from "../utils/asyncHandler";
import uploadOnCloudinary from "../utils/cloudinary";


const registerUser=asyncHandler(async(req,res)=>{

// get user details from frontend
// validation -not empty
// chcek if user already  not registered :username, email
// check for images and   avatar
// upload them to cloudinary
// create user object -create entry in db
// remove password and refresh token field from response
// check for user creation
// return res

const {fullName, email, username, password}=req.body

const avatarLocalPath=req.files?.avatar[0]?.path

if(!avatarLocalPath){
    console.log("file is required")
}

   const avatar= await uploadOnCloudinary(avatarLocalPath); 

   const user= await User.create({

    fullName,
    avatar:avatar?.url||"",
    email,
    password,


   })

// res.status(200).json({
//     messege:"ok"
// })
})



export {registerUser}