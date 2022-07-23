import mongoose from "mongoose";

const Course_Breakdown_Schema = new mongoose.Schema({
    id: {
        type: Number
    },
    course_breakdown_id: {
        type: Number
    },
    section: {
        type: String
    },
    attendance_year: {
        type: String
    },
    semester: {
        type: String
    },
    course_code: {
        type: String
    },
    
    
    date: {
        type: String
    }, 
    department_id: {
        type: String
    },
});

const Course_Breakdown = mongoose.model("Course_Breakdown", Course_Breakdown_Schema);

export default Course_Breakdown;