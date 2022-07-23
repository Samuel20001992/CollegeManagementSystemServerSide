import express from 'express';
import mongoose from 'mongoose';

import ImageModel from './image.model.js';
import multer from 'multer';


const router = express.Router();



export const getImages = async (req, res) => { 
    try {
        const imageModels = await ImageModel.find();
                
       return res.status(200).json(imageModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getImage = async (req, res) => { 
    const { id } = req.params;

    try {
        const image = await ImageModel.findById(id);
        
       return res.status(200).json(image);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createImage =  async (req, res) => {
    const photo = req.file.originalname;
    const {
        name,
        birthdate
    } = req.body;
 
    console.log(photo + ' fafaaf');

    const newImageModel = new ImageModel({
    name,
        birthdate,
        photo
    })
    
    console.log(newImageModel + ' fafaaf');
     
    try {
        await newImageModel.save();
  
       return res.status(201).json(newImageModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateImage = async (req, res) => {
    const { id } = req.params;
    const {
    name,
        birthdate,
        photo } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No image with id: ${id}`);

    const updatedImage = {
        name,
        birthdate,
        photo, _id: id };

    await ImageModel.findByIdAndUpdate(id, updatedImage, { new: true });

    return res.json(updatedImage);
}

export const deleteImage = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No image with id: ${id}`);

    await ImageModel.findByIdAndRemove(id);

    return res.json({ message: "Image deleted successfully." });
}



export default router;