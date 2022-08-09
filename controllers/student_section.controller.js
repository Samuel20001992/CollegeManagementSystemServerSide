import express from 'express';
import mongoose from 'mongoose';

import Student_SectionModel from '../models/student_section.model.js';

const router = express.Router();

export const getStudent_Sections = async (req, res) => { 
    try {
        const student_sectionModels = await Student_SectionModel.find();
                
       return res.status(200).json(student_sectionModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStudent_Section = async (req, res) => { 
    const { id } = req.params;

    try {
        const student_section = await Student_SectionModel.findById(id);
        
       return res.status(200).json(student_section);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createStudent_Section = async (req, res) => {
    const student_sectionModels = await Student_SectionModel.find();
    const student_section_id = student_sectionModels.length + 1;
    const {
    first_name,
    middle_name,
    last_name,
    student_id,
    section_name, program,
    department,
    learning_modality,
    attendance_year,
    status,
    semester,
    academic_year
    } = req.body;
 
    const newStudent_SectionModel = new Student_SectionModel({
        student_section_id,
        first_name,
        middle_name,
        last_name,
        student_id,
        section_name, program,
        department,
        learning_modality,
        attendance_year,
        status,
        semester,
        academic_year})
     
    try {
        await newStudent_SectionModel.save();

       return res.status(201).json(newStudent_SectionModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateStudent_Section = async (req, res) => {
    const { id } = req.params;
    const {
        student_section_id,
        first_name,
        middle_name,
        last_name,
        student_id,
        section_name, program,
        department,
        learning_modality,
        attendance_year,
        status,
        semester,
        academic_year } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student_section with id: ${id}`);

    const updatedStudent_Section = {
        student_section_id,
        first_name,
        middle_name,
        last_name,
        student_id,
        section_name, 
        program,
        department,
        learning_modality,
        attendance_year,
        semester,
        academic_year,
        status,
         _id: id
};

    await Student_SectionModel.findByIdAndUpdate(id, updatedStudent_Section, { new: true });

    return res.json(updatedStudent_Section);
}

export const deleteStudent_Section = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student_section with id: ${id}`);

    await Student_SectionModel.findByIdAndRemove(id);

    return res.json({ message: "Student_Section deleted successfully." });
}


export const getOneStudent_Section = async (req, res) => { 
    const { section_name } = req.params;

   try{
    const student_section  = await Student_SectionModel.find(
                {
                  "section_name": section_name
                });     
    
        
       return res.status(200).json(student_section);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;