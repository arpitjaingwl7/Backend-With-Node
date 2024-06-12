import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async()=>{

try {
    
const connectionInstance= await mongoose.connect(process.env.MONGODB_URL+DB_NAME)
console.log(`\n /mongoDB connected!! DB host: ${connectionInstance }`)

} catch (error) {
    console.log(error, "DB connection failed")
    process.exit(1)
}
}

export default connectDB;