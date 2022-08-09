import mongoose from "mongoose";

const Withdrawal_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    withdrawal_id: {
        type: Number
    },
    student_id: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
   reason: {
        type: String,
        
    },
   phone: {
        type: String,
        
    },
   letter: {
        type: String,
        
    },
   remark: {
        type: String,
        
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
});

const Withdrawal = mongoose.model("Withdrawal", Withdrawal_Schema);

export default Withdrawal;