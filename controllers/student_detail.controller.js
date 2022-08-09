import express from 'express';
import mongoose from 'mongoose';

import Student_DetailModel from '../models/student_detail.model.js';

const router = express.Router();

export const getStudent_Details = async (req, res) => { 
    try {
        const student_detail_detailModels = await Student_DetailModel.find();
                
       return res.status(200).json(student_detail_detailModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStudent_Detail = async (req, res) => { 
    const { student_id } = req.params;

    try {
        const student_detail = await Student_DetailModel.find({
            "student_id": student_id
        })
        console.log("s " + student_detail);
       return res.status(200).json(student_detail);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createStudent_Detail = async (req, res) => {
    const student_detailModels = await Student_DetailModel.find();
    const student_id = student_detailModels.length + 1;
    const {  first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number, withdrawal, account_number, bank,
         birth_date,
        place_of_birth_region,
        place_of_birth_zone,
        place_of_birth_woreda,
        place_of_birth_house_no,
        address_region,
        address_zone,
        address_woreda,
        address_house_no,
        emergency_contact_first_name,
        emergency_contact_middle_name,
        emergency_contact_last_name,
        emergency_contact_address_region,
        emergency_contact_address_zone,
        emergency_contact_address_woreda,
        emergency_contact_address_house_no,
        emergency_contact_phone_no,
        emergency_contact_email,
        emergency_contact_relationship,
        is_withdrawn,
        is_graduated
    } = req.body;
 
    const newStudent_DetailModel = new Student_DetailModel({  student_id, first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number, withdrawal, account_number, bank,
         birth_date,
        place_of_birth_region,
        place_of_birth_zone,
        place_of_birth_woreda,
        place_of_birth_house_no,
        address_region,
        address_zone,
        address_woreda,
        address_house_no,
        emergency_contact_first_name,
        emergency_contact_middle_name,
        emergency_contact_last_name,
        emergency_contact_address_region,
        emergency_contact_address_zone,
        emergency_contact_address_woreda,
        emergency_contact_address_house_no,
        emergency_contact_phone_no,
        emergency_contact_email,
        emergency_contact_relationship,
        is_withdrawn,
        is_graduated
    })
     
    try {
        await newStudent_DetailModel.save();

       return res.status(201).json(newStudent_DetailModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateStudent_Detail = async (req, res) => {
    const { id } = req.params;
    const { student_id, first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number, withdrawal, account_number, bank,
        birth_date,
        place_of_birth_region,
        place_of_birth_zone,
        place_of_birth_woreda,
        place_of_birth_house_no,
        address_region,
        address_zone,
        address_woreda,
        address_house_no,
        emergency_contact_first_name,
        emergency_contact_middle_name,
        emergency_contact_last_name,
        emergency_contact_address_region,
        emergency_contact_address_zone,
        emergency_contact_address_woreda,
        emergency_contact_address_house_no,
        emergency_contact_phone_no,
        emergency_contact_email,
        emergency_contact_relationship,
        is_withdrawn,
        is_graduated
    } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student_detail with id: ${id}`);

    const updatedStudent_Detail = {student_id,first_name, middle_name, last_name,
        gender, phone,email, facility, department, program,
        learning_modality, photo, section, attendance_year,
        fs_number, withdrawal, account_number, bank,
         birth_date,
        place_of_birth_region,
        place_of_birth_zone,
        place_of_birth_woreda,
        place_of_birth_house_no,
        address_region,
        address_zone,
        address_woreda,
        address_house_no,
        emergency_contact_first_name,
        emergency_contact_middle_name,
        emergency_contact_last_name,
        emergency_contact_address_region,
        emergency_contact_address_zone,
        emergency_contact_address_woreda,
        emergency_contact_address_house_no,
        emergency_contact_phone_no,
        emergency_contact_email,
        emergency_contact_relationship,
        is_withdrawn,
        is_graduated,
        _id: id
    };
    console.log('update iiiii');
    await Student_DetailModel.findByIdAndUpdate(id, updatedStudent_Detail, { new: true });
      console.log('update 0000');
    return res.json(updatedStudent_Detail);
}

export const deleteStudent_Detail = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Student_Detail with id: ${id}`);

    await Student_DetailModel.findByIdAndRemove(id);

    return res.json({ message: "Student_Detail deleted successfully." });
}



export default router;