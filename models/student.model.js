import mongoose from "mongoose";

const Student_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    student_id: {
        type: Number
    },
    first_name: {
        type: String,
        
    },
    middle_name: {
        type: String,
        
    },
    last_name: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    facility: {
        type: String,
        
    },
    department: {
        type: String,
        
    },
    program: {
        type: String,
        
    },
    learning_modality: {
        type: String,
        
    },
    photo: {
        type: String,
        
    },
    section: {
        type: String,
        
    },
    attendace_year: {
        type: String,
        
    },
    fs_number: {
        type: String,
        
    },
    account_number: {
        type: String,
        
    },
    bank: {
        type: String,
        
    },
});

const Student = mongoose.model("Student", Student_Schema);

export default Student;