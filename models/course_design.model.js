import mongoose from "mongoose";

const Course_Design_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    course_design_id: {
        type: Number
    },
    instructor_id: {
        type: String
    },
    
        first_assessment_name: {
            type: String
        },
        first_assessment_out_of: {
            type: String
        },
        second_assessment_name: {
            type: String
        },
        second_assessment_out_of: {
            type: String
        },
        third_assessment_name: {
            type: String
        },
        third_assessment_out_of: {
            type: String
        },
        fourth_assessment_name: {
            type: String
        },
        fourth_assessment_out_of: {
            type: String
        },
    
        fifth_assessment_name: {
            type: String
        },
        fifth_assessment_out_of: {
            type: String
        },
        final_assessment_name: {
            type: String
        },
        _final_assessmentout_of: {
            type: String
        },
   
    date: {
        type: String,
        
    },
    instructor_course_id: {
        type: String,
        
    }
});

const Course_Design = mongoose.model("Course_Design", Course_Design_Schema);

export default Course_Design;