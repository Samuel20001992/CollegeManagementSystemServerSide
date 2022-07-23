import mongoose from "mongoose";

const Drop_Schema = new mongoose.Schema({
    id: {
        type: Number,
        sequence_value : 0
    },
    drop_id: {
        type: Number
    },
    student_id: {
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

const Drop = mongoose.model("Drop", Drop_Schema);

export default Drop;