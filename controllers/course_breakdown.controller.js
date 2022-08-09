import express from 'express';
import mongoose from 'mongoose';

import Course_BreakdownModel from '../models/course_Breakdown.model.js';

const router = express.Router();

export const getCourse_Breakdowns = async (req, res) => { 
    try {
        const course_BreakdownModels = await Course_BreakdownModel.find();
                
       return res.status(200).json(course_BreakdownModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getCourse_Breakdown = async (req, res) => { 
    const { id } = req.params;

    try {
        const course_Breakdown = await Course_BreakdownModel.findById(id);
        
       return res.status(200).json(course_Breakdown);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createCourse_Breakdown = async (req, res) => {
    
     const course_BreakdownModels = await Course_BreakdownModel.find();
    const course_breakdown_id = course_BreakdownModels.length + 1;
    const {
    section,
    attendance_year ,
    semester,
    course_code ,
    date, 
    department_id ,}    = req.body;
 
    const newCourse_BreakdownModel = new Course_BreakdownModel({
        course_breakdown_id,
    section,
    attendance_year ,
    semester,
    course_code ,
    date, 
    department_id})
     
    try {
        await newCourse_BreakdownModel.save();

       return res.status(201).json(newCourse_BreakdownModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateCourse_Breakdown = async (req, res) => {
    const { id } = req.params;
    const {
        course_breakdown_id,
    section,
    attendance_year ,
    semester,
    course_code ,
    date, 
    department_id } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Breakdown with id: ${id}`);

    const updatedCourse_Breakdown = {
        course_breakdown_id,
    section,
    attendance_year ,
    semester,
    course_code ,
    date, 
    department_id,
    _id: id
    };

    await Course_BreakdownModel.findByIdAndUpdate(id, updatedCourse_Breakdown, { new: true });

    return res.json(updatedCourse_Breakdown);
}

export const deleteCourse_Breakdown = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Breakdown with id: ${id}`);

    await Course_BreakdownModel.findByIdAndRemove(id);

    return res.json({ message: "Course_Breakdown deleted successfully." });
}

export const getOneCourseBreakdown = async (req, res) => { 
    const { course_breakdown_id } = req.params;
    
   try{
    const Course_Breakdown  = await Course_BreakdownModel.find(
                {
                  "course_breakdown_id": course_breakdown_id
                });     
    
        
       return res.status(200).json(Course_Breakdown);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export default router;