import mongoose from "mongoose";

const Student_Course_Registration_Schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    student_course_registraiton_id: {
        type:Number
    },
    student_id: {
        type: String
    },
    course_offering_id: {
        type: String,
        
    },
    
    credit_hour: {
        type:String
    },
    course_code: {
        type:String
    },
    course_title: {
        type: String
    },
    course_category_option: {
        type:String
    },
    accademic_year: {
        type: String,
        
    },
    attendance_year: {
        type: String,
        
    },
    semester: {
        type: String,
        
    },
    instructor_id: {
        type: Number
    },
    first_assessment: {
        type: String
        
    },
    second_assessment: {
         type: String
    },
    third_assessment: {
         type: String
    },
    fourth_assessment: {
         type: String
    },
    fifth_assessment: {
         type: String
    },
    final_assessment: {
         type: String
    },
    total: {
         type: String
    },
    letter_grade: {
         type: String
    },
    grade_point: {
         type: String
    },
    advisor: {
        type: String
    },
    date: {
        type:String
    },
    registered_by: {
        type: String
    }

});

const Student_Course_Registration = mongoose.model("Student_Course_Registration", Student_Course_Registration_Schema);

export default Student_Course_Registration;