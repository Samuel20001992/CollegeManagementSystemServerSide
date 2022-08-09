import express from 'express';
import mongoose from 'mongoose';

import ClearanceModel from '../models/clearance.model.js';

const router = express.Router();

export const getClearances = async (req, res) => { 
    try {
        const clearanceModels = await ClearanceModel.find();
                
       return res.status(200).json(clearanceModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getClearance = async (req, res) => { 
    const { id } = req.params;

    try {
        const clearance = await ClearanceModel.findById(id);
        
       return res.status(200).json(clearance);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}



export const createClearance = async (req, res) => {
    const clearanceModels = await ClearanceModel.find();
    const clearance_id = clearanceModels.length + 1;

    const {
        student_id,
        reason,
        date,
    } = req.body;
 
    
    const  store = "Not Approved";
    const finance = "Not Approved";
    const department = "Not Approved";
    const library =  "Not Approved";
    const registerar = "Not Approved";

    const newClearanceModel = new ClearanceModel({
    student_id,
    clearance_id,
        reason,
        store,
        finance,
        department,
        library,
        registerar,
        date,})
     
    try {
        await newClearanceModel.save();

       return res.status(201).json(newClearanceModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateClearance = async (req, res) => {
    const { id } = req.params;
    const {
        clearance_id,
        student_id,
        reason,
        store,
        finance,
        department,
        library,
        registerar,
        date} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No clearance with id: ${id}`);

    const updatedClearance = {
        clearance_id,
    student_id,
        reason,
        store,
        finance,
        department,
        library,
        registerar,
        date,
        _id: id
    };

    await ClearanceModel.findByIdAndUpdate(id, updatedClearance, { new: true });

    return res.json(updatedClearance);
}

export const deleteClearance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No clearance with id: ${id}`);

    await ClearanceModel.findByIdAndRemove(id);

    return res.json({ message: "Clearance deleted successfully." });
}

export const getOneClearance = async (req, res) => { 
    const { clearance_id } = req.params;
   try{
    const clearance  = await ClearanceModel.find(
                {
                  "clearance_id": clearance_id
                });     
    
        
       return res.status(200).json(clearance);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;