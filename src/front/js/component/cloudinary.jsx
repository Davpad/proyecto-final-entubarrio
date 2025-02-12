import React from "react";
import { useState } from "react";

export const Cloudinary = () => {

    const [loading, setLoading] = useState(false) 

    const uploadImage = async (e)=>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', preset_name)

        setLoading(true)
    }

    return(
        <div>
            <h1>Upload image</h1>
            <input type="file" 
            name="file" 
            placeholder="Sube una imagen" 
            onChange={(e)=>uploadImage(e)}/>
            {loading ? (
                <h3>Loading...</h3>
            ):(
            <img src={image} alt="imagen subida"/>
            )}
        </div>
    );
}