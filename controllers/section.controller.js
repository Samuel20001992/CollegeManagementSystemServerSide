import express from 'express';
import mongoose from 'mongoose';

import SectionModel from '../models/section.model.js';

const router = express.Router();

export const getSections = async (req, res) => { 
    try {
        const sectionModels = await SectionModel.find();
                
       return res.status(200).json(sectionModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getSection = async (req, res) => { 
    const { id } = req.params;

    try {
        const section = await SectionModel.findById(id);
        
       return res.status(200).json(section);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createSection = async (req, res) => {
    const sectionModels = await SectionModel.find();
    const section_id = sectionModels.length + 1;
    const {
    section_name,
    department,
    learning_modality,
    attendance_year,
    curriculum_name,
    number_of_students
    } = req.body;
 
    const newSectionModel = new SectionModel({
        section_id,
    section_name,
    department,
    learning_modality,
        attendance_year,
    curriculum_name,
    number_of_students})
     
    try {
        await newSectionModel.save();

       return res.status(201).json(newSectionModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateSection = async (req, res) => {
    const { id } = req.params;
    const {
        section_id,
   section_name,
    department,
    learning_modality,
        attendance_year,
    curriculum_name,
    number_of_students } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No section with id: ${id}`);

    const updatedSection = {
        section_id,
    section_name,
    department,
    learning_modality,
    attendance_year,
        number_of_students,
    curriculum_name, _id: id
};

    await SectionModel.findByIdAndUpdate(id, updatedSection, { new: true });

    return res.json(updatedSection);
}

export const deleteSection = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No section with id: ${id}`);

    await SectionModel.findByIdAndRemove(id);

    return res.json({ message: "Section deleted successfully." });
}


export const getOneSection = async (req, res) => { 
    const { section_id } = req.params;

   try{
    const section  = await SectionModel.find(
                {
                  "section_id": section_id
                });     
    
        
       return res.status(200).json(section);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;