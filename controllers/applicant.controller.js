import express from 'express';
import mongoose from 'mongoose';

import ApplicantModel from '../models/applicant.model.js';

const router = express.Router();

export const getApplicants = async (req, res) => { 
    try {
        const applicantModels = await ApplicantModel.find();
                
       return res.status(200).json(applicantModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getApplicant = async (req, res) => { 
    const { id } = req.params;

    try {
        const applicant = await ApplicantModel.findById(id);
        
       return res.status(200).json(applicant);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createApplicant = async (req, res) => {
    const applicantModels = await ApplicantModel.find();
    const applicant_id = applicantModels.length + 1;
    
     console.log('id ' + applicant_id);

    const photo = req.file.originalname[0];
    const grade10_national_exam = req.file.originalname[1];
    // console.log('photo ' + photo);
    const { first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, section, attendance_year,
        fs_number,account_number, bank, status}    = req.body;
 
    const newApplicantModel = new ApplicantModel({ applicant_id,first_name, middle_name, last_name,
        gender, phone, email,facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number,account_number, bank, grade10_national_exam, status})
    // console.log('kk ' + grade10_national_exam);
   
    try {
        await newApplicantModel.save();

       return res.status(201).json(newApplicantModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}


export const updateApplicant = async (req, res) => {
    const { id } = req.params;
    const photo = req.file.originalname; 
    const {applicant_id,first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, section, attendance_year,
    fs_number,account_number, bank, status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No applicant with id: ${id}`);

    const updatedApplicant = {applicant_id,first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number,account_number, bank,status, _id: id };

    await ApplicantModel.findByIdAndUpdate(id, updatedApplicant, { new: true });

    return res.json(updatedApplicant);
}

export const deleteApplicant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No applicant with id: ${id}`);

    await ApplicantModel.findByIdAndRemove(id);

    return res.json({ message: "Applicant deleted successfully." });
}



export default router;