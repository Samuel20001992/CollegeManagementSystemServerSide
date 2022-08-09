import mongoose from "mongoose";

const Student_Sections_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    
    student_Student_Section_id: {
        type: String
    },
    first_name: {
        type: String
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String
    },

    student_id: {
        type: String
    },
    section_name: {
        type: String
    },
    department: {
        type: String,
        
    },
    learning_modality: {
        type: String,
        
    },
    program: {
        type: String
    },
    attendance_year: {
        type: String
    },
    semester : {
        type: String,
        
    },
    academic_year: {
        type: String
    },
    status: {
        type: String
    },
   
});

const Student_Sections = mongoose.model("Student_Sections", Student_Sections_Schema);

export default Student_Sections;