import React from "react";
import { useState } from "react";

export const Cloudinary = () => {

    const [ image, setImage ] = useState('');
    const [ loading, setLoading ] = useState(false) 

    const uploadImage = async (e)=>{
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', preset_name)

        setLoading(true)

        try{
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });

            const file = await response.json()
            setImage(file.secure_url);
            setLoading(false);
            //await actions.sendPhoto(file.secure_url)
        } catch (error) {
            console.error('Error uploading image:', error);
            setLoading(false);
        }
        
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