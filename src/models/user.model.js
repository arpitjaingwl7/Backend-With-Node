import mongoose, { Schema, model } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },

  avatar: {
    type: String, //cloudinary url
    required: true,
  },

  coverImage: {
    type: String, //cloudinary url
  },

  watchHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],

  password:{
    type:String,
    required:[true, "password is required"]
  },

  refreshToken:{
    type:String

  }
},{timestamps:true})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
return await bcrypt.compare(password,this.password)
}




export const User = model("User", userSchema)
