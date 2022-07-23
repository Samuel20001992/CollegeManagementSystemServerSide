import mongoose from "mongoose";

const Staff_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    staff_id: {
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
    field_of_study: {
        type: String,
        
    },
    academic_rank: {
        type: String,
        
    },
    position: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    
    email: {
        type: String,
        
    },
    photo: {
        type: String,
        
    },
    role: {
        type: String,
        
    },
    
    employement_type: {
        type: String,
        
    },
    status: {
        type: String,
        
    },
    
    registered_by: {
        type: String,
        
    },
});

const Staff = mongoose.model("Staff", Staff_Schema);

export default Staff;