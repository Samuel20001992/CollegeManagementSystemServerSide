import express from 'express';
import mongoose from 'mongoose';

import Semester_GradeModel from '../models/semester_grade.model.js';

const router = express.Router();

export const getSemester_Grades = async (req, res) => { 
    try {
        const semester_gradeModels = await Semester_GradeModel.find();
                
       return res.status(200).json(semester_gradeModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getSemester_Grade = async (req, res) => { 
    const { id } = req.params;

    try {
        const semester_grade = await Semester_GradeModel.findById(id);
        
       return res.status(200).json(semester_grade);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createSemester_Grade = async (req, res) => {
    
    const semester_gradeModels = await Semester_GradeModel.find();
    const semester_grade_id = semester_gradeModels.length + 1;


    const {
        student_id,
        attendance_year, semester,
        previous_GPA,
    previous_total_credit,
    previous_total_point,
    current_total_credit,
    current_total_point,
        GPA,
        CGPA, MGPA,
     } = req.body;
 
    const newSemester_GradeModel = new Semester_GradeModel({
        semester_grade_id,
        student_id,
        attendance_year, semester,
        previous_GPA,
    previous_total_credit,
    previous_total_point,
    current_total_credit,
    current_total_point,
        GPA,
        CGPA, MGPA
    })
     
    try {
        await newSemester_GradeModel.save();

       return res.status(201).json(newSemester_GradeModel );
    } catch (error) {
        console.log(error);
       return  res.status(409).json({ message: error.message });
    }
}

export const updateSemester_Grade = async (req, res) => {
    const { id } = req.params;
    const { semester_grade_id,
        student_id,
        attendance_year, semester,
         previous_GPA,
    previous_total_credit,
    previous_total_point,
    current_total_credit,
    current_total_point,
        GPA,
        CGPA, MGPA} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No semester_grade with id: ${id}`);

    const updatedSemester_Grade = {
        semester_grade_id,
        student_id,
        attendance_year, semester,
        previous_GPA,
    previous_total_credit,
    previous_total_point,
    current_total_credit,
    current_total_point,
        GPA,
        CGPA, MGPA, _id: id
    };

    await Semester_GradeModel.findByIdAndUpdate(id, updatedSemester_Grade, { new: true });

    return res.json(updatedSemester_Grade);
}

export const deleteSemester_Grade = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No semester_grade with id: ${id}`);

    await Semester_GradeModel.findByIdAndRemove(id);

    return res.json({ message: "Semester_Grade deleted successfully." });
}



export default router;