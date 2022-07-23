import express from 'express';
import mongoose from 'mongoose';

import Course_DesignModel from '../models/course_design.model.js';

const router = express.Router();

export const getCourse_Designs = async (req, res) => { 
    try {
        const course_designModels = await Course_DesignModel.find();
                
       return res.status(200).json(course_designModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getCourse_Design = async (req, res) => { 
    const { id } = req.params;

    try {
        const course_design = await Course_DesignModel.findById(id);
        
       return res.status(200).json(course_design);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createCourse_Design = async (req, res) => {
    const course_designModels = await Course_DesignModel.find();
    const course_design_id = course_designModels.length + 1;
    const {
        instructor_id,
        first_assessment_name,
        first_assessment_out_of,
        second_assessment_name,
        second_assessment_out_of,
        third_assessment_name,
        third_assessment_out_of,
        fourth_assessment_name,
        fourth_assessment_out_of,
        fifth_assessment_name,
        fifth_assessment_out_of,
        final_assessment_name,
        final_assessment_out_of,
        date,
        instructor_course_id
    } = req.body;
 
    const newCourse_DesignModel = new Course_DesignModel({
    instructor_id,
        first_assessment_name,
        first_assessment_out_of,
        second_assessment_name,
        second_assessment_out_of,
        third_assessment_name,
        third_assessment_out_of,
        fourth_assessment_name,
        fourth_assessment_out_of,
        fifth_assessment_name,
        fifth_assessment_out_of,
        final_assessment_name,
        final_assessment_out_of,
        date,
        instructor_course_id})
     
    try {
        await newCourse_DesignModel.save();

       return res.status(201).json(newCourse_DesignModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateCourse_Design = async (req, res) => {
    const { id } = req.params;
    const {
    instructor_id,
        first_assessment_name,
        first_assessment_out_of,
        second_assessment_name,
        second_assessment_out_of,
        third_assessment_name,
        third_assessment_out_of,
        fourth_assessment_name,
        fourth_assessment_out_of,
        fifth_assessment_name,
        fifth_assessment_out_of,
        final_assessment_name,
        final_assessment_out_of,
        date,
        instructor_course_id } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_design with id: ${id}`);

    const updatedCourse_Design = {
        instructor_id,
        first_assessment_name,
        first_assessment_out_of,
        second_assessment_name,
        second_assessment_out_of,
        third_assessment_name,
        third_assessment_out_of,
        fourth_assessment_name,
        fourth_assessment_out_of,
        fifth_assessment_name,
        fifth_assessment_out_of,
        final_assessment_name,
        final_assessment_out_of,
        date,
        instructor_course_id, _id: id };

    await Course_DesignModel.findByIdAndUpdate(id, updatedCourse_Design, { new: true });

    return res.json(updatedCourse_Design);
}

export const deleteCourse_Design = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_design with id: ${id}`);

    await Course_DesignModel.findByIdAndRemove(id);

    return res.json({ message: "Course_Design deleted successfully." });
}



export default router;