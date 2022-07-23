import express from 'express';
import mongoose from 'mongoose';

import CurriculumModel from '../models/curriculum.model.js';

const router = express.Router();

export const getCurriculums = async (req, res) => { 
    try {
        const curriculumModels = await CurriculumModel.find();
                
       return res.status(200).json(curriculumModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getCurriculum = async (req, res) => { 
    const { id } = req.params;

    try {
        const curriculum = await CurriculumModel.findById(id);
        
       return res.status(200).json(curriculum);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createCurriculum = async (req, res) => {
    const curriculumModels = await CurriculumModel.find();
    const curriculum_id = curriculumModels.length + 1;
    const {
    faculty,
    department,
    admission_classification,
    program,
    field_of_study,
    Nomenclature_in_engilsh,
    Nomenclature_in_amharic,
    total_credit,
    curriculum_name,
    curriculum_type,
    duration,
    number_of_semester,
    approved_year,
    minimum_credit,
    academic_commission_minute_number,
    academic_commission_approval_status,
    senate_minute_number,
    senate_approval_status,
    curriculum_document,
    registered_by,}    = req.body;
 
    const newCurriculumModel = new CurriculumModel({
        curriculum_id,
    faculty,
    department,
    admission_classification,
    program,
    field_of_study,
    Nomenclature_in_engilsh,
    Nomenclature_in_amharic,
    total_credit,
    curriculum_name,
    curriculum_type,
    duration,
    number_of_semester,
    approved_year,
    minimum_credit,
    academic_commission_minute_number,
    academic_commission_approval_status,
    senate_minute_number,
    senate_approval_status,
    curriculum_document,
    registered_by,})
     
    try {
        await newCurriculumModel.save();

       return res.status(201).json(newCurriculumModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateCurriculum = async (req, res) => {
    const { id } = req.params;
    const {
        curriculum_id,
    faculty,
    department,
    admission_classification,
    program,
    field_of_study,
    Nomenclature_in_engilsh,
    Nomenclature_in_amharic,
    total_credit,
    curriculum_name,
    curriculum_type,
    duration,
    number_of_semester,
    approved_year,
    minimum_credit,
    academic_commission_minute_number,
    academic_commission_approval_status,
    senate_minute_number,
    senate_approval_status,
    curriculum_document,
    registered_by, } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No curriculum with id: ${id}`);

    const updatedCurriculum = {
        curriculum_id,
    faculty,
    department,
    admission_classification,
    program,
    field_of_study,
    Nomenclature_in_engilsh,
    Nomenclature_in_amharic,
    total_credit,
    curriculum_name,
    curriculum_type,
    duration,
    number_of_semester,
    approved_year,
    minimum_credit,
    academic_commission_minute_number,
    academic_commission_approval_status,
    senate_minute_number,
    senate_approval_status,
    curriculum_document,
    registered_by,
    _id: id
    };

    await CurriculumModel.findByIdAndUpdate(id, updatedCurriculum, { new: true });

    return res.json(updatedCurriculum);
}

export const deleteCurriculum = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No curriculum with id: ${id}`);

    await CurriculumModel.findByIdAndRemove(id);

    return res.json({ message: "Curriculum deleted successfully." });
}



export default router;