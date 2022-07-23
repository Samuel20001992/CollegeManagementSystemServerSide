import express from 'express';
import mongoose from 'mongoose';

import Student_Course_RegistrationModel from '../models/student_Course_Registration.model.js';

const router = express.Router();

export const getStudent_Course_Registrations = async (req, res) => { 
    try {
        const student_Course_RegistrationModels = await Student_Course_RegistrationModel.find();
                
       return res.status(200).json(student_Course_RegistrationModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStudent_Course_Registration = async (req, res) => { 
    const { id } = req.params;

    try {
        const student_Course_Registration = await Student_Course_RegistrationModel.findById(id);
        
       return res.status(200).json(student_Course_Registration);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createStudent_Course_Registration = async (req, res) => {
    const student_Course_RegistrationModels = await Student_Course_RegistrationModel.find();
    const student_course_registration_id = student_Course_RegistrationModels.length + 1;
    
    const {
    student_id,
    course_offering_id,
        course_code,
        credit_hour,
        course_category_option,
    course_title,
        accademic_year,
    attendance_year,
    semester,
    instructor_id,
    first_assessment,
    second_assessment,
    third_assessment,
    fourth_assessment,
    fifth_assessment,
    final_assessment,
    total,
        letter_grade,
    grade_point,
    date,
    advisor,
    registered_by}    = req.body;
//    console.log('student id ' + student_id  )
    const newStudent_Course_RegistrationModel = new Student_Course_RegistrationModel({
    student_course_registration_id,
    student_id,
    course_offering_id,
        course_code,
        credit_hour,
        course_category_option,
    course_title,
        accademic_year,
    attendance_year,
    semester,
    instructor_id,
    first_assessment,
    second_assessment,
    third_assessment,
    fourth_assessment,
    fifth_assessment,
        final_assessment,
        total,
        letter_grade,
    grade_point,
    date,
    advisor,
    registered_by})
     
    try {
        await newStudent_Course_RegistrationModel.save();

       return res.status(201).json(newStudent_Course_RegistrationModel );
    } catch (error) {
        console.log('error ' + error);
        return res.status(409).json({
            message: error.message
        
        });
    }
}

export const updateStudent_Course_Registration = async (req, res) => {
    const { id } = req.params;
    
    const {
    student_course_registration_id,
    student_id,
    course_offering_id,
        course_code,
        credit_hour,
        course_category_option,
    course_title,
        accademic_year,
    attendance_year,
    semester,
    instructor_id,
    first_assessment,
    second_assessment,
    third_assessment,
    fourth_assessment,
    fifth_assessment,
    final_assessment,
    total,
        letter_grade,
    grade_point,
    date,
    advisor,
    registered_by } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student_Course_Registration with id: ${id}`);

    const updatedStudent_Course_Registration = {
    student_course_registration_id,
    student_id,
    course_offering_id,
        course_code,
        credit_hour,
        course_title,
        attendance_year,
    course_category_option,
    accademic_year,
    semester,
    instructor_id,
    first_assessment,
    second_assessment,
    third_assessment,
    fourth_assessment,
    fifth_assessment,
    final_assessment,
    total,
        letter_grade,
    grade_point,
    date,
    advisor,
    registered_by,
    _id: id
    };

    await Student_Course_RegistrationModel.findByIdAndUpdate(id, updatedStudent_Course_Registration, { new: true });

    return res.json(updatedStudent_Course_Registration);
}

export const deleteStudent_Course_Registration = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student_Course_Registration with id: ${id}`);

    await Student_Course_RegistrationModel.findByIdAndRemove(id);

    return res.json({ message: "Student_Course_Registration deleted successfully." });
}

export const getOneStudent = async (req, res) => { 
    const { attendance_year, semester,student_id } = req.params;
    console.log(attendance_year, semester, student_id);
    try {
        const data = await Student_Course_RegistrationModel.find(
      {
        // "attendance_year": attendance_year,
        "semester": semester ,
        "student_id": student_id ,
      }
    );
        // console.log('sliip ' + data)
       return res.status(200).json(data);
    } catch (error) {
        console.log(error);
       return res.status(404).json({ message: error.message });
    }
}


export default router;