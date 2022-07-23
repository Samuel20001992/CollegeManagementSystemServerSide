import express from 'express';
import mongoose from 'mongoose';

import SlipModel from '../models/slip.model.js';

const router = express.Router();

export const getSlips = async (req, res) => { 
    try {
        const slipModels = await SlipModel.find();
                
       return res.status(200).json(slipModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getSlip = async (req, res) => { 
    const { id } = req.params;

    try {
        const slip = await SlipModel.findById(id);
        
       return res.status(200).json(slip);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getOneSlip = async (req, res) => { 
    const { attendance_year, semester,student_id } = req.params;
    console.log(attendance_year, semester, student_id);
    try {
        const slip = await SlipModel.find(
      {
        "attendance_year": attendance_year,
        "semester": semester ,
        "student_id": student_id ,
      }
    );
        
       return res.status(200).json(slip);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createSlip = async (req, res) => {
    const slipModels = await SlipModel.find();
    const slip_id = slipModels.length + 1;

    const {
    stream,
    attendance_year,
    admission_classification,
    program,
    semester,
    academic_year,
    student_first_name,
    student_middle_name,
    student_last_name,
    student_id,
    course_title,
    course_code,
    credit_hour,
        lecture_hour,
        tutorial_hour,
        lab_hour,
        category,
        option,
    remark} = req.body;
 
    const newSlipModel = new SlipModel({
    slip_id,
        stream,
    attendance_year,
    admission_classification,
    program,
    semester,
    academic_year,
    student_first_name,
    student_middle_name,
    student_last_name,
    student_id,
    course_title,
    course_code,
    credit_hour,
        lecture_hour,
        tutorial_hour,
        lab_hour,
        category,
        option,
    remark})
     
    try {
        await newSlipModel.save();

       return res.status(201).json(newSlipModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateSlip = async (req, res) => {
    const { id } = req.params;
    const {
        slip_id,
        stream,
    attendance_year,
    admission_classification,
    program,
    semester,
    academic_year,
    student_first_name,
    student_middle_name,
    student_last_name,
    student_id,
    course_title,
    course_code,
    credit_hour,
        lecture_hour,
        tutorial_hour,
        lab_hour,
        category,
        option,
    remark } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slip with id: ${id}`);

    const updatedSlip = {
    slip_id,
        stream,
    attendance_year,
    admission_classification,
    program,
    semester,
    academic_year,
    student_first_name,
    student_middle_name,
    student_last_name,
    student_id,
    course_title,
    course_code,
    credit_hour,
        lecture_hour,
        tutorial_hour,
        lab_hour,
        category,
        option,
    remark,
        _id: id
    };

    await SlipModel.findByIdAndUpdate(id, updatedSlip, { new: true });

    return res.json(updatedSlip);
}

export const deleteSlip = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No slip with id: ${id}`);

    await SlipModel.findByIdAndRemove(id);

    return res.json({ message: "Slip deleted successfully." });
}



export default router;