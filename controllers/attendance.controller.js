import express from 'express';
import mongoose from 'mongoose';

import AttendanceModel from '../models/attendance.model.js';

const router = express.Router();

export const getAttendances = async (req, res) => { 
    try {
        const attendanceModels = await AttendanceModel.find();
                
       return res.status(200).json(attendanceModels);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getAttendance = async (req, res) => { 
    const { id } = req.params;

    try {
        const attendance = await AttendanceModel.findById(id);
        
       return res.status(200).json(attendance);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const createAttendance = async (req, res) => {
    const attendanceModels = await AttendanceModel.find();
    const attendance_id = attendanceModels.length + 1;
    const {
    student_id,
    section_name,
    course_code,
    academic_year,
    semester,
    day,
    month,
    status
    } = req.body;
 
    const newAttendanceModel = new AttendanceModel({
        attendance_id,
        student_id,
        section_name,
        course_code,
        academic_year,
        semester,
        day,
        month,
        status
    })
     
    try {
        await newAttendanceModel.save();

       return res.status(201).json(newAttendanceModel );
    } catch (error) {
       return  res.status(409).json({ message: error.message });
    }
}

export const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const {
        attendance_id,
        student_id,
        section_name,
        course_code,
        academic_year,
        semester,
        day,
        month,
        status
     } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No attendance with id: ${id}`);

    const updatedAttendance = {
        attendance_id,
        student_id,
        section_name,
        course_code,
        academic_year,
        semester,
        day,
        month,
        status
        , _id: id
};

    await AttendanceModel.findByIdAndUpdate(id, updatedAttendance, { new: true });

    return res.json(updatedAttendance);
}

export const deleteAttendance = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No attendance with id: ${id}`);

    await AttendanceModel.findByIdAndRemove(id);

    return res.json({ message: "Attendance deleted successfully." });
}


export const getOneAttendance = async (req, res) => { 
    const { section,course_code, day, month, academic_year } = req.params;

    console.log(section + ' ' + course_code + ' ' + day + ' ' + month + ' ' + academic_year )
   try{
    const attendance  = await AttendanceModel.find(
                {
                  "section_name": section,
                  "course_code": course_code,
                  "day": day,
                  "month": month,
                  "academic_year": academic_year,
                });     
    
        
       return res.status(200).json(attendance);
    } catch (error) {
       return res.status(404).json({ message: error.message });
    }
}

export const getSearchAll = async (req, res) => { 
    const { start_day, start_month, start_year, end_day, end_month, end_year } = req.params;

    console.log(start_day + ' ' + start_month + ' ' + start_year + ' ' + end_day + ' ' + end_month + ' ' + end_year )
   try{
    const attendances  = await AttendanceModel.find();  
 
    let datas = [];
 
    attendances.map((attendance)=>{
        if(parseInt(attendance.day) >= parseInt(start_day) && parseInt(attendance.day) <= parseInt(end_day)){
            console.log('hey1')
            if(parseInt(attendance.month) >= parseInt(start_month) && parseInt(attendance.month) <= parseInt(end_month)){
                console.log('hey2')
                if(parseInt(attendance.academic_year) >= parseInt(start_year) && parseInt(attendance.academic_year) <= parseInt(end_year)){
                    console.log('hey3')
                       datas.push(attendance);
                }
            }
        }
    })
   
        
       return res.status(200).json(datas);
    } catch (error) {
        console.log(error.message);
       return res.status(404).json({ message: error.message });
    }
}


export default router;