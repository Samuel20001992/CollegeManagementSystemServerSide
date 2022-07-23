import express from 'express';
import mongoose from 'mongoose';

import Course_RegistrationModel from '../models/course_Registration.model.js';

const router = express.Router();

export const getCourse_Registrations = async (req, res) => { 
    try {
        const course_RegistrationModels = await Course_RegistrationModel.find();
                
       return res.status(200).json(course_RegistrationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getCourse_Registration = async (req, res) => { 
    const { id } = req.params;

    try {
        const course_Registration = await Course_RegistrationModel.findById(id);
        
       return res.status(200).json(course_Registration);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createCourse_Registration = async (req, res) => {
    const course_RegistrationModels = await Course_RegistrationModel.find();
    const course_registration_id = course_RegistrationModels.length + 1;

    const {
    course_code,
    carriculum_id,
    course_title,
    credit_hour,
    lecture_hour,
    practical_hour,
    tutorial_hour,
    prerequisite,
    course_category,
    course_category_option,
    course_owner,
    status,
    date,}    = req.body;
 
    const newCourse_RegistrationModel = new Course_RegistrationModel({
        course_registration_id,
    course_code,
    carriculum_id,
    course_title,
    credit_hour,
    lecture_hour,
    practical_hour,
    tutorial_hour,
    prerequisite,
    course_category,
    course_category_option,
    course_owner,
    status,
    date,})
     
    try {
        await newCourse_RegistrationModel.save();

       return res.status(201).json(newCourse_RegistrationModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateCourse_Registration = async (req, res) => {
    const { id } = req.params;
    const {
        course_registration_id,
    course_code,
    carriculum_id,
    course_title,
    credit_hour,
    lecture_hour,
    practical_hour,
    tutorial_hour,
    prerequisite,
    course_category,
    course_category_option,
    course_owner,
    status,
    date, } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Registration with id: ${id}`);

    const updatedCourse_Registration = {
        course_registration_id,
    course_code,
    carriculum_id,
    course_title,
    credit_hour,
    lecture_hour,
    practical_hour,
    tutorial_hour,
    prerequisite,
    course_category,
    course_category_option,
    course_owner,
    status,
    date,
    registered_by,
    _id: id
    };

    await Course_RegistrationModel.findByIdAndUpdate(id, updatedCourse_Registration, { new: true });

    return res.json(updatedCourse_Registration);
}

export const deleteCourse_Registration = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course_Registration with id: ${id}`);

    await Course_RegistrationModel.findByIdAndRemove(id);

    return res.json({ message: "Course_Registration deleted successfully." });
}



export default router;