import express from 'express';
import mongoose from 'mongoose';

import AddModel from '../models/add.model.js';

const router = express.Router();

export const getAdds = async (req, res) => { 
    try {
        const addModels = await AddModel.find();
                
       return res.status(200).json(addModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getAdd = async (req, res) => { 
    const { id } = req.params;

    try {
        const add = await AddModel.findById(id);
        
       return res.status(200).json(add);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createAdd = async (req, res) => {
    const addModels = await AddModel.find();
    const add_id = addModels.length + 1;
    const {
    student_id, 
    section,
    course_offering_id, 
    course_code,
    accademic_year, 
    semester, 
    date,
    advisor, 
    registered_by
    } = req.body;
 
    const newAddModel = new AddModel({
    add_id,
    student_id, 
    section,
    course_offering_id, 
    course_code,
    accademic_year, 
    semester, 
    date,
    advisor, 
    registered_by})
     
    try {
        await newAddModel.save();

       return res.status(201).json(newAddModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateAdd = async (req, res) => {
    const { id } = req.params;
    const {
    add_id,
    student_id, 
    section,
    course_offering_id, 
    course_code,
    accademic_year, 
    semester, 
    date,
    advisor, 
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No add with id: ${id}`);

    const updatedAdd = {
    add_id,
    student_id, 
    section,
    course_offering_id, 
    course_code,
    accademic_year, 
    semester, 
    date,
    advisor, 
    registered_by, _id: id };

    await AddModel.findByIdAndUpdate(id, updatedAdd, { new: true });

    return res.json(updatedAdd);
}

export const deleteAdd = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No add with id: ${id}`);

    await AddModel.findByIdAndRemove(id);

    return res.json({ message: "Add deleted successfully." });
}

export const getOneAdd = async (req, res) => { 
    const { add_id } = req.params;
    
   try{
    const add  = await AddModel.find(
                {
                  "add_id": add_id
                });     
    
        
       return res.status(200).json(add);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;