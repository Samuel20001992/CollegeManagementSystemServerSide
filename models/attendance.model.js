import mongoose from "mongoose";

const Attendances_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    
    Attendance_id: {
        type: String
    },
    student_id: {
        type: String
    },
    section_name: {
        type: String
    },
    course_code: {
        type: String
    },
    academic_year: {
        type: String
    },
    semester: {
        type: String
    },
    day:{
        type: String
    },
    month:{
        type:String
    },
    status:{
        type: String
    }

   
});

const Attendances = mongoose.model("Attendances", Attendances_Schema);

export default Attendances;