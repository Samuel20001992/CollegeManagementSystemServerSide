import express from 'express';
import mongoose from 'mongoose';

import ApplicationModel from '../models/application.model.js';

const router = express.Router();

export const getApplications = async (req, res) => { 
    try {
        const applicationModels = await ApplicationModel.find();
                
       return res.status(200).json(applicationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getApplication = async (req, res) => { 
    const { id } = req.params;

    try {
        const application = await ApplicationModel.findById(id);
        
       return res.status(200).json(application);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getOneApplication = async (req, res) => { 
    const { attendance_year, semester,student_id } = req.params;
    console.log(attendance_year, semester, student_id);
    try {
        const application = await ApplicationModel.find(
      {
        "attendance_year": attendance_year,
        "semester": semester ,
        "student_id": student_id ,
      }
    );
        
       return res.status(200).json(application);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createApplication = async (req, res) => {
    const applicationModels = await ApplicationModel.find();
    const application_id = applicationModels.length + 1;

    const {
        student_id,
        item,
        course_code,
        reson
    } = req.body;
 
    const newApplicationModel = new ApplicationModel({
    application_id,
    student_id,
        item,
        course_code,
        reson})
     
    try {
        await newApplicationModel.save();

       return res.status(201).json(newApplicationModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateApplication = async (req, res) => {
    const { id } = req.params;
    const {
        application_id,
        student_id,
        item,
        course_code,
        reson} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No application with id: ${id}`);

    const updatedApplication = {
    application_id,
    student_id,
        item,
        course_code,
        reson,
        _id: id
    };

    await ApplicationModel.findByIdAndUpdate(id, updatedApplication, { new: true });

    return res.json(updatedApplication);
}

export const deleteApplication = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No application with id: ${id}`);

    await ApplicationModel.findByIdAndRemove(id);

    return res.json({ message: "Application deleted successfully." });
}



export default router;