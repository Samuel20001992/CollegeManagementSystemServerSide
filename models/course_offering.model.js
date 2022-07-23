import mongoose from "mongoose";

const Course_Offering_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    course_offering_id: {
        type: Number
    },
    name: {
       type: String
    },
    section: {
        type: String,
        
    },
    academic_year: {
        type: String,
        
    },

    attendance_year: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    course_breakdown_id: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
    registered_by: {
        type: String,
        
    }
});

const Course_Offering = mongoose.model("Course_Offering", Course_Offering_Schema);

export default Course_Offering;