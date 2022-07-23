import express from 'express';
import mongoose from 'mongoose';

import Academic_CalanderModel from '../models/academic_calander.model.js';

const router = express.Router();

export const getAcademic_Calanders = async (req, res) => { 
    try {
        const academic_calanderModels = await Academic_CalanderModel.find();
                
       return res.status(200).json(academic_calanderModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getAcademic_Calander = async (req, res) => { 
    const { id } = req.params;

    try {
        const academic_calander = await Academic_CalanderModel.findById(id);
        
       return res.status(200).json(academic_calander);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createAcademic_Calander = async (req, res) => {
    const academic_calanderModels = await Academic_CalanderModel.find();
    const academic_calander_id = academic_calanderModels.length + 1;
    const {
    title,
    type,
    issued_no,
    academic_year,
    doc_no,
    reason,
    date,
    first_semester_registration_start_date,
     first_semester_registration_end_date,
    first_semester_add_drop_registration_start_date,
    first_semester_add_drop_registration_end_date,
    first_semester_class_begin,
    first_semester_class_end,
    first_semester_final_exam_start,
    first_semester_final_exam_end,
    first_semester_application_for_makeup_start,
    first_semester_application_for_makeup_end,
    first_semester_grade_submission,
    first_semester_makeup_exam_start,
    first_semester_makeup_exam_end,
    second_semester_registration_start_date,
     second_semester_registration_end_date,
    second_semester_add_drop_registration_start_date,
    second_semester_add_drop_registration_end_date,
    second_semester_class_begin,
    second_semester_class_end,
    second_semester_final_exam_start,
    second_semester_final_exam_end,
    second_semester_application_for_makeup_start,
    second_semester_application_for_makeup_end,
    second_semester_grade_submission,
    second_semester_makeup_exam_start,
    second_semester_makeup_exam_end,
    } = req.body;
 
    const newAcademic_CalanderModel = new Academic_CalanderModel({
    academic_calander_id,
    title,
    type,
    issued_no,
    academic_year,
    doc_no,
    reason,
    date,
    first_semester_registration_start_date,
     first_semester_registration_end_date,
    first_semester_add_drop_registration_start_date,
    first_semester_add_drop_registration_end_date,
    first_semester_class_begin,
    first_semester_class_end,
    first_semester_final_exam_start,
    first_semester_final_exam_end,
    first_semester_application_for_makeup_start,
    first_semester_application_for_makeup_end,
    first_semester_grade_submission,
    first_semester_makeup_exam_start,
    first_semester_makeup_exam_end,
    second_semester_registration_start_date,
     second_semester_registration_end_date,
    second_semester_add_drop_registration_start_date,
    second_semester_add_drop_registration_end_date,
    second_semester_class_begin,
    second_semester_class_end,
    second_semester_final_exam_start,
    second_semester_final_exam_end,
    second_semester_application_for_makeup_start,
    second_semester_application_for_makeup_end,
    second_semester_grade_submission,
    second_semester_makeup_exam_start,
    second_semester_makeup_exam_end,})
     
    try {
        await newAcademic_CalanderModel.save();

       return res.status(201).json(newAcademic_CalanderModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateAcademic_Calander = async (req, res) => {
    const { id } = req.params;
    const {
    academic_calander_id,
    title,
    type,
    issued_no,
    academic_year,
    doc_no,
    reason,
    date,
    first_semester_registration_start_date,
     first_semester_registration_end_date,
    first_semester_add_drop_registration_start_date,
    first_semester_add_drop_registration_end_date,
    first_semester_class_begin,
    first_semester_class_end,
    first_semester_final_exam_start,
    first_semester_final_exam_end,
    first_semester_application_for_makeup_start,
    first_semester_application_for_makeup_end,
    first_semester_grade_submission,
    first_semester_makeup_exam_start,
    first_semester_makeup_exam_end,
    second_semester_registration_start_date,
     second_semester_registration_end_date,
    second_semester_add_drop_registration_start_date,
    second_semester_add_drop_registration_end_date,
    second_semester_class_begin,
    second_semester_class_end,
    second_semester_final_exam_start,
    second_semester_final_exam_end,
    second_semester_application_for_makeup_start,
    second_semester_application_for_makeup_end,
    second_semester_grade_submission,
    second_semester_makeup_exam_start,
    second_semester_makeup_exam_end, } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No academic_calander with id: ${id}`);

    const updatedAcademic_Calander = {
    title,
    type,
    issued_no,
    academic_year,
    doc_no,
    reason,
    date,
    first_semester_registration_start_date,
     first_semester_registration_end_date,
    first_semester_add_drop_registration_start_date,
    first_semester_add_drop_registration_end_date,
    first_semester_class_begin,
    first_semester_class_end,
    first_semester_final_exam_start,
    first_semester_final_exam_end,
    first_semester_application_for_makeup_start,
    first_semester_application_for_makeup_end,
    first_semester_grade_submission,
    first_semester_makeup_exam_start,
    first_semester_makeup_exam_end,
    second_semester_registration_start_date,
     second_semester_registration_end_date,
    second_semester_add_drop_registration_start_date,
    second_semester_add_drop_registration_end_date,
    second_semester_class_begin,
    second_semester_class_end,
    second_semester_final_exam_start,
    second_semester_final_exam_end,
    second_semester_application_for_makeup_start,
    second_semester_application_for_makeup_end,
    second_semester_grade_submission,
    second_semester_makeup_exam_start,
    second_semester_makeup_exam_end, _id: id };

    await Academic_CalanderModel.findByIdAndUpdate(id, updatedAcademic_Calander, { new: true });

    return res.json(updatedAcademic_Calander);
}

export const deleteAcademic_Calander = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No academic_calander with id: ${id}`);

    await Academic_CalanderModel.findByIdAndRemove(id);

    return res.json({ message: "Academic_Calander deleted successfully." });
}



export default router;