import mongoose from "mongoose";

const Semester_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    semester_grade_id: {
        type: Number
    }
    ,
    student_id: {
        type: Number,
        
    },
    attendance_year: {
        type: String
    },
    semester: {
        type: String
    },
    previous_GPA: {
        type: String
    },
    previous_total_credit: {
        type: String
    },
    previous_total_point: {
        type: String
    },
    current_total_credit: {
        type: String
    },
    current_total_point: {
        type: String
    },
    GPA: {
        type: String
    },
    CGPA: {
        type: String,
        
    },
    MGPA: {
        type: String,
        
    },
    
   
});

const Semester = mongoose.model("Semester", Semester_Schema);

export default Semester;