import mongoose from "mongoose";

const Course_Registration_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    course_registration_id: {
        type: Number
    },
    course_code: {
        type: String,
        
    },
    carriculum_id: {
        type: String,
        
    },

    course_title: {
        type: String,
        
    },
    credit_hour: {
        type: String,
        
    },
    lecture_hour: {
        type: String,
        
    },
    practical_hour: {
        type: String,
        
    },
    tutorial_hour: {
        type: String,
        
    },
    prerequisite: {
        type: String,
        
    },
    course_category: {
        type: String,
        
    },
    course_category_option: {
        type: String,
        
    },
    course_owner: {
        type: String,
        
    },
    status: {
        type: String,
        
    },
    date: {
        type: String,
        
    },
    registered_by: {
        type: String,
        
    }
});

const Course_Registration = mongoose.model("Course_Registration", Course_Registration_Schema);

export default Course_Registration;