import express from 'express';
import mongoose from 'mongoose';

import StudentModel from '../models/student.model.js';

const router = express.Router();

export const getStudents = async (req, res) => { 
    try {
        const studentModels = await StudentModel.find();
                
       return res.status(200).json(studentModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getStudent = async (req, res) => { 
    const { id, department } = req.params;
let data = [];
    try {
        const students = await StudentModel.find();

        
        if(department == 'no' || department == ''){
            students.map((student)=>{
                if(student.student_id == id){
                    console.log('hey1');
                   data.push(student);
                }
            })
        }
        else if(id == 'no' || id == ''){
            students.map((student)=>{
                if(student.department == department){
                    console.log('hey2');
                   data.push(student);
                }
            })
        }
        else{
            students.map((student)=>{
                if(student.student_id == id && student.department == department){
                    console.log('hey3');
                   data.push(student);
                }
            })
        }
        
       return res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
       return res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const studentModels = await StudentModel.find();
   
    let { student_id,first_name, middle_name, last_name,
        gender, department, program,
        learning_modality, photo, is_withdrawn} = req.body;

     if(student_id == '' || student_id == null){
        student_id = studentModels.length + 1;
    } 
 
    const newStudentModel = new StudentModel({
        student_id,
        first_name, middle_name, last_name,
        gender, department, program,
        learning_modality, photo, is_withdrawn})
     
    try {
        await newStudentModel.save();

       return res.status(201).json(newStudentModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { student_id, first_name, middle_name, last_name,
        gender, department, program,
        learning_modality, photo, is_withdrawn } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    const updatedStudent = {student_id,first_name, middle_name, last_name,
        gender, department, program,
        learning_modality, photo, is_withdrawn, _id: id };

    await StudentModel.findByIdAndUpdate(id, updatedStudent, { new: true });

    return res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);

    await StudentModel.findOneAndDelete({
        "student_id": id
    });

    return res.json({ message: "Student deleted successfully." });
}



export default router;