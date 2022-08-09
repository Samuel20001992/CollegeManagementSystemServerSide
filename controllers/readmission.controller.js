import express from 'express';
import mongoose from 'mongoose';

import ReadmissionModel from '../models/readmission.model.js';

const router = express.Router();

export const getReadmissions = async (req, res) => { 
    try {
        const readmissionModels = await ReadmissionModel.find();
                
       return res.status(200).json(readmissionModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getReadmission = async (req, res) => { 
    const { id } = req.params;

    try {
        const readmission = await ReadmissionModel.findById(id);
        
       return res.status(200).json(readmission);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createReadmission = async (req, res) => {
    
    const readmissionModels = await ReadmissionModel.find();
    const readmission_id = readmissionModels.length + 1;


    const {student_id, date, reason,withdrawal_date,phone, letter, remark} = req.body;
 
    const newReadmissionModel = new ReadmissionModel({ readmission_id, student_id, date, reason,withdrawal_date,phone, letter, remark})
     
    try {
        await newReadmissionModel.save();

       return res.status(201).json(newReadmissionModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateReadmission = async (req, res) => {
    const { id } = req.params;
    const {readmission_id, student_id, date,reason, withdrawal_date, phone, letter, remark } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No readmission with id: ${id}`);

    const updatedReadmission = {readmission_id,student_id, date, reason,withdrawal_date,phone, letter, remark, _id: id };

    await ReadmissionModel.findByIdAndUpdate(id, updatedReadmission, { new: true });

    return res.json(updatedReadmission);
}

export const deleteReadmission = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No readmission with id: ${id}`);

    await ReadmissionModel.findByIdAndRemove(id);

    return res.json({ message: "Readmission deleted successfully." });
}

export const getOneReadmission = async (req, res) => { 
    const { readmission_id } = req.params;

   try{
    const readmission  = await ReadmissionModel.find(
                {
                  "readmission_id": readmission_id
                });     
    
        
       return res.status(200).json(readmission);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;