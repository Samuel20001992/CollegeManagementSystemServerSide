import express from 'express';
import mongoose from 'mongoose';

import Instructor_CourseModel from '../models/instructor_Course.model.js';

const router = express.Router();

export const getInstructor_Courses = async (req, res) => { 
    try {
        const instructor_CourseModels = await Instructor_CourseModel.find();
                
       return res.status(200).json(instructor_CourseModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getInstructor_Course = async (req, res) => { 
    const { id } = req.params;

    try {
        const instructor_Course = await Instructor_CourseModel.findById(id);
        
       return res.status(200).json(instructor_Course);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createInstructor_Course = async (req, res) => {
    
    const instructor_CourseModels = await Instructor_CourseModel.find();
    const instructor_course_id = instructor_CourseModels.length + 1;

    const {
    instructor_id,
    program,
    faculty,
    department,
    admission_classification,
    academic_year,
        semester,
        section,
        course_title,
        course_code,
        date,
        course_completed,
        status,
    
    assigned_by}    = req.body;
 
    const newInstructor_CourseModel = new Instructor_CourseModel({
    instructor_course_id,
    instructor_id,
    program,
    faculty,
    department,
    admission_classification,
    academic_year,
        semester,
        section,
        course_title,
        course_code,
        date,
        course_completed,
        status,
    
    assigned_by})
     
    try {
        await newInstructor_CourseModel.save();

       return res.status(201).json(newInstructor_CourseModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateInstructor_Course = async (req, res) => {
    const { id } = req.params;
    const {
    instructor_id,
    program,
    faculty,
    department,
    admission_classification,
    academic_year,
        semester,
        section,
        course_title,
        course_code,
        date,
        course_completed,
        status,
    
    assigned_by} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No instructor_Course with id: ${id}`);

    const updatedInstructor_Course = {
    instructor_id,
    program,
    faculty,
    department,
    admission_classification,
    academic_year,
        semester,
        section,
        course_title,
        course_code,
        date,
        course_completed,
        status,
    
    assigned_by,
    _id: id
    };

    await Instructor_CourseModel.findByIdAndUpdate(id, updatedInstructor_Course, { new: true });

    return res.json(updatedInstructor_Course);
}

export const deleteInstructor_Course = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No instructor_Course with id: ${id}`);

    await Instructor_CourseModel.findByIdAndRemove(id);

    return res.json({ message: "Instructor_Course deleted successfully." });
}



export default router;