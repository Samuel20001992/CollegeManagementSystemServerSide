import mongoose from "mongoose";

const Readmission_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    readmission_id: {
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
   withdrew_date: {
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

const Readmission = mongoose.model("Readmission", Readmission_Schema);

export default Readmission;