import mongoose from "mongoose";

const Department_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    department_id: {
        type: Number
    },
    faculty: {
        type: String,
        
    },
    department_name: {
        type: String,
        
    },
    department_head: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    start_date: {
        type: String,
        
    },
    end_date: {
        type: String,
        
    },
    registered_by: {
        type: String,
        
    },
});

const Department = mongoose.model("Department", Department_Schema);

export default Department;