import express from 'express';
import mongoose from 'mongoose';

import Course_OfferingModel from '../models/course_Offering.model.js';

const router = express.Router();

export const getCourse_Offerings = async (req, res) => { 
    try {
        const course_OfferingModels = await Course_OfferingModel.find();
                
       return res.status(200).json(course_OfferingModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getCourse_Offering = async (req, res) => { 
    const { id } = req.params;

    try {
        const course_Offering = await Course_OfferingModel.findById(id);
        
       return res.status(200).json(course_Offering);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createCourse_Offering = async (req, res) => {
    
    const course_OfferingModels = await Course_OfferingModel.find();
    const course_offering_id = course_OfferingModels.length + 1;

    const {
    name,
    section,
    academic_year,
    attendance_year,
    semester,
    course_breakdown_id,
    date,
    registered_by}    = req.body;
 
    const newCourse_OfferingModel = new Course_OfferingModel({
    course_offering_id,
        name,
    section,
    academic_year,
    attendance_year,
    semester,
    course_breakdown_id,
    date,
    registered_by})
     
    try {
        await newCourse_OfferingModel.save();

       return res.status(201).json(newCourse_OfferingModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateCourse_Offering = async (req, res) => {
    const { id } = req.params;
    const {
        course_offering_id,
        name,
    section,
    academic_year,
    attendance_year,
    semester,
    course_breakdown_id,
    date,
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Offering with id: ${id}`);

    const updatedCourse_Offering = {
    course_offering_id,
        name,
        section,
    academic_year,
    attendance_year,
    semester,
    course_breakdown_id,
    date,
    registered_by,
    _id: id
    };

    await Course_OfferingModel.findByIdAndUpdate(id, updatedCourse_Offering, { new: true });

    return res.json(updatedCourse_Offering);
}

export const deleteCourse_Offering = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Offering with id: ${id}`);

    await Course_OfferingModel.findByIdAndRemove(id);

    return res.json({ message: "Course_Offering deleted successfully." });
}



export default router;