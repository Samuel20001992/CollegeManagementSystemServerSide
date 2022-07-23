import mongoose from "mongoose";

const Slip_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    slip_id: {
        type: Number
    },
    stream: {
        type: String,
        
    },
    attendance_year: {
        type: String,
        
    },
    admission_classification: {
        type: String,
        
    },
    program: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    academic_year: {
        type: String,
        
    },
    student_first_name: {
        type: String,
        
    },
    student_middle_name: {
        type: String,
        
    },
    student_last_name: {
        type: String,
        
    },
    student_id: {
        type: String,
        
    },
    
    course_title: {
        type: String,
        
    },
    course_code: {
        type: String,
        
    },
    credit_hour: {
        type: String,
        
    },
    
    lecture_hour: {
        type: String,
        
    },
    tutorial_hour: {
        type: String,
        
    },
    
    lab_hour: {
        type: String,
        
    },
    category: {
        type: String,
        
    },

    option: {
        type: String,
        
    },

    remark: {
        type: String,
        
    },
});

const Slip = mongoose.model("Slip", Slip_Schema);

export default Slip;