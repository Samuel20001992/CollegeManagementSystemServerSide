import express from 'express';
import mongoose from 'mongoose';

import StudentModel from '../models/student.model.js';

const router = express.Router();

export const getStudents = async (req, res) => { 
    try {
        const studentModels = await StudentModel.find();
                
       return res.status(200).json(studentModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStudent = async (req, res) => { 
    const { id } = req.params;

    try {
        const student = await StudentModel.findById(id);
        
       return res.status(200).json(student);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const studentModels = await StudentModel.find();
    const student_id = studentModels.length + 1;
    const {  first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
    fs_number, withdrawal,account_number, bank} = req.body;
 
    const newStudentModel = new StudentModel({  student_id, first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
    fs_number, withdrawal,account_number, bank})
     
    try {
        await newStudentModel.save();

       return res.status(201).json(newStudentModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { student_id, first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
    fs_number, withdrawal,account_number, bank } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    const updatedStudent = {student_id,first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
    fs_number, withdrawal,account_number, bank, _id: id };

    await StudentModel.findByIdAndUpdate(id, updatedStudent, { new: true });

    return res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    await StudentModel.findByIdAndRemove(id);

    return res.json({ message: "Student deleted successfully." });
}



export default router;