import mongoose from "mongoose";

const Instructor_Course_Schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    instructor_course_id: {
        type:Number
    },
    instructor_id: {
        type: String,
        
    },
    program: {
        type: String,
        
    },
    faculty: {
        type: String,
        
    },
    department: {
        type: String,
        
    },
    admission_classification: {
        type: String,
        
    },
    academic_year: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    section: {
        type: String,
        
    },
    course_title: {
        type: String
    },
    course_code: {
        type:String
    },
    date: {
        type: String,
        
    }, 
    course_completed: {
        type: String,
        
    },
    status: {
        type: String,
        
    },
    assigned_by: {
      type: String  
    },
    
});

const Instructor_Course = mongoose.model("Instructor_Course", Instructor_Course_Schema);

export default Instructor_Course;