import express from 'express';
import mongoose from 'mongoose';

import StaffModel from '../models/staff.model.js';

const router = express.Router();

export const getStaffs = async (req, res) => { 
    try {
        const staffModels = await StaffModel.find();
                
       return res.status(200).json(staffModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStaff = async (req, res) => { 
    const { id } = req.params;

    try {
        const staff = await StaffModel.findById(id);
        
       return res.status(200).json(staff);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createStaff = async (req, res) => {
    const staffModels = await StaffModel.find();
    const staff_id = staffModels.length + 1;

    const {
    first_name,
    middle_name,
    last_name,
    gender,
    field_of_study,
    academic_rank,
    position,
    phone,
    email,
    photo,
    role,
    employement_type,
    status,
    registered_by}    = req.body;
 
    const newStaffModel = new StaffModel({
    staff_id,
        first_name,
    middle_name,
    last_name,
    gender,
    field_of_study,
    academic_rank,
    position,
    phone,
    email,
    photo,
    role,
    employement_type,
    status,
    registered_by})
     
    try {
        await newStaffModel.save();

       return res.status(201).json(newStaffModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateStaff = async (req, res) => {
    const { id } = req.params;
    const {
        staff_id,
        first_name,
        middle_name,
    last_name,
    gender,
    field_of_study,
    academic_rank,
    position,
    phone,
    email,
    photo,
    role,
    employement_type,
    status,
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff with id: ${id}`);

    const updatedStaff = {
    staff_id,
        first_name,
    middle_name,
    last_name,
    gender,
    field_of_study,
    academic_rank,
    position,
    phone,
    email,
    photo,
    role,
    employement_type,
    status,
    registered_by,
        _id: id
    };

    await StaffModel.findByIdAndUpdate(id, updatedStaff, { new: true });

    return res.json(updatedStaff);
}

export const deleteStaff = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No staff with id: ${id}`);

    await StaffModel.findByIdAndRemove(id);

    return res.json({ message: "Staff deleted successfully." });
}



export default router;