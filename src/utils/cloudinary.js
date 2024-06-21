import {v2 as cloudinary} from "cloudinary";

import fs from fs


// config
cloudinary.config({ 
    cloud_name: 'drvte6vah', 
    api_key: '149152169691185', 
    api_secret: 'xMtc8fP9vHvti0zG5kFDQQ_g0kA' // Click 'View Credentials' below to copy your API secret
});


const uploadOnCloudinary= async(localFilePath)=>{

    try {


        if(!localFilePath) return null


        // upload file on cloudinary

      const response= await cloudinary.uploader.upload(localFilePat,{
        resource_type:"auto"
      })

    //   file has been uploaded successfully

    return response
        
    } catch (error) {
        fs.unLinkSync(localFilePath)
        // remove the locally saved temp files as the upload operation got faailed
        return null;
    }
}

export default uploadOnCloudinary
