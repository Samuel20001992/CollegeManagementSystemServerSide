import mongoose from "mongoose";

const Applicant_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    applicant_id: {
        type: Number,
        
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
    grade10_national_exam: {
        type: String,
    },
    status: {
        type: String
    }
});

const Applicant = mongoose.model("Applicant", Applicant_Schema);

export default Applicant;