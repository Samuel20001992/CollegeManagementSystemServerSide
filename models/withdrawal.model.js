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
});

const Withdrawal = mongoose.model("Withdrawal", Withdrawal_Schema);

export default Withdrawal;