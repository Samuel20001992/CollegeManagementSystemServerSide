import mongoose from "mongoose";

const Add_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    add_id: {
        type:Number
    },
    student_id: {
        type: String,
        
    },
    section: {
        type: String,
        
    },
    course_offering_id: {
        type: String,
        
    },
    course_code: {
        type: String,
        
    },
    accademic_year: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
    advisor: {
        type: String,
        
    },
    registered_by: {
        type: String,
        
    }
});

const Add = mongoose.model("Add", Add_Schema);

export default Add;