import mongoose from "mongoose";

const Student_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    student_id: {
        type: String
    },
    applicant_id: {
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
    is_withdrawn: {
        type: Boolean
    }
});

const Student = mongoose.model("Student", Student_Schema);

export default Student;