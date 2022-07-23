import express from 'express';
import mongoose from 'mongoose';

import DepartmentModel from '../models/department.model.js';

const router = express.Router();

export const getDepartments = async (req, res) => { 
    try {
        const departmentModels = await DepartmentModel.find();
                
       return res.status(200).json(departmentModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getDepartment = async (req, res) => { 
    const { id } = req.params;

    try {
        const department = await DepartmentModel.findById(id);
        
       return res.status(200).json(department);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createDepartment = async (req, res) => {
    const departmentModels = await DepartmentModel.find();
    const department_id = departmentModels.length + 1;
    const {
    faculty,
    department_name,
    department_head,
    phone,
    email,
    start_date,
    end_date,
    registered_by
    } = req.body;
 
    const newDepartmentModel = new DepartmentModel({
    department_id,
        faculty,
    department_name,
    department_head,
    phone,
    email,
    start_date,
    end_date,
    registered_by})
     
    try {
        await newDepartmentModel.save();

       return res.status(201).json(newDepartmentModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateDepartment = async (req, res) => {
    const { id } = req.params;
    const {
    department_id,
        faculty,
    department_name,
    department_head,
    phone,
    email,
    start_date,
    end_date,
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No department with id: ${id}`);

    const updatedDepartment = {
    department_id,
        faculty,
    department_name,
    department_head,
    phone,
    email,
    start_date,
    end_date,
    registered_by, _id: id };

    await DepartmentModel.findByIdAndUpdate(id, updatedDepartment, { new: true });

    return res.json(updatedDepartment);
}

export const deleteDepartment = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No department with id: ${id}`);

    await DepartmentModel.findByIdAndRemove(id);

    return res.json({ message: "Department deleted successfully." });
}



export default router;