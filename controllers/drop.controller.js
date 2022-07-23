import express from 'express';
import mongoose from 'mongoose';

import DropModel from '../models/drop.model.js';

const router = express.Router();

export const getDrops = async (req, res) => { 
    try {
        const dropModels = await DropModel.find();
                
       return res.status(200).json(dropModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getDrop = async (req, res) => { 
    const { id } = req.params;

    try {
        const drop = await DropModel.findById(id);
        
       return res.status(200).json(drop);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createDrop = async (req, res) => {
    const dropModels = await DropModel.find();
    const drop_id = dropModels.length + 1;
    const {
    student_id,
    course_code,
    accademic_year,
    semester,
    date,
    advisor,
    registered_by
    } = req.body;
 
    const newDropModel = new DropModel({
        drop_id,
    student_id,
    course_code,
    accademic_year,
    semester,
    date,
    advisor,
    registered_by})
     
    try {
        await newDropModel.save();

       return res.status(201).json(newDropModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateDrop = async (req, res) => {
    const { id } = req.params;
    const {
        drop_id,
    student_id,
    course_code,
    accademic_year,
    semester,
    date,
    advisor,
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No drop with id: ${id}`);

    const updatedDrop = {
        drop_id,
    student_id,
    course_code,
    accademic_year,
    semester,
    date,
    advisor,
    registered_by, _id: id };

    await DropModel.findByIdAndUpdate(id, updatedDrop, { new: true });

    return res.json(updatedDrop);
}

export const deleteDrop = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No drop with id: ${id}`);

    await DropModel.findByIdAndRemove(id);

    return res.json({ message: "Drop deleted successfully." });
}



export default router;