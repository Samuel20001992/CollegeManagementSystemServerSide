import mongoose from "mongoose";

const Academic_Calander_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    academic_calander_id: {
        type: Number
    },
    title: {
        type: String,
        
    },
    type: {
        type: String,
        
    },
    issued_no: {
        type: String,
        
    },
    academic_year: {
        type: String,
        
    },
    doc_no: {
        type: String,
        
    },
    reason: {
        type: String,
        
    },
    date: {
        type: String
    },
    first_semester_registration_start_date: {
        type: String
    },
     first_semester_registration_end_date: {
        type: String
    },
    first_semester_add_drop_registration_start_date: {
        type: String
    },
    first_semester_add_drop_registration_end_date: {
        type: String
    },
    first_semester_class_begin: {
        type: String
    },
    first_semester_class_end: {
        type: String
    },
    first_semester_final_exam_start: {
        type: String
    },
    first_semester_final_exam_end: {
        type: String
    },
    first_semester_application_for_makeup_start: {
        type: String
    },
    first_semester_application_for_makeup_end: {
        type: String
    },
    first_semester_grade_submission: {
        type: String
    },
    first_semester_makeup_exam_start: {
        type: String
    },
    first_semester_makeup_exam_end: {
        type: String
    },
    second_semester_registration_start_date: {
        type: String
    },
     second_semester_registration_end_date: {
        type: String
    },
    second_semester_add_drop_registration_start_date: {
        type: String
    },
    second_semester_add_drop_registration_end_date: {
        type: String
    },
    second_semester_class_begin: {
        type: String
    },
    second_semester_class_end: {
        type: String
    },
    second_semester_final_exam_start: {
        type: String
    },
    second_semester_final_exam_end: {
        type: String
    },
    second_semester_application_for_makeup_start: {
        type: String
    },
    second_semester_application_for_makeup_end: {
        type: String
    },
    second_semester_grade_submission: {
        type: String
    },
    second_semester_makeup_exam_start: {
        type: String
    },
    second_semester_makeup_exam_end: {
        type: String
    },
    
});

const Academic_Calander = mongoose.model("Academic_Calander", Academic_Calander_Schema);

export default Academic_Calander;