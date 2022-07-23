import mongoose from "mongoose";

const Curriculum_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    curriculum_id: {
        type: Number
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

    program: {
        type: String,
        
    },
    field_of_study: {
        type: String,
        
    },
    Nomenclature_in_engilsh: {
        type: String,
        
    },
    Nomenclature_in_amharic: {
        type: String,
        
    },
    total_credit: {
        type: String,
        
    },
    curriculum_name: {
        type: String,
        
    },
    curriculum_type: {
        type: String,
        
    },
    duration: {
        type: String,
        
    },
    number_of_semester: {
        type: String,
        
    },
    approved_year: {
        type: String,
        
    },
    minimum_credit: {
        type: String,
        
    },
    academic_commission_minute_number: {
        type: String,
        
    },
    academic_commission_approval_status: {
        type: String,
        
    },
    senate_minute_number: {
        type: String,
        
    },
    senate_approval_status: {
        type: String,
        
    },
    curriculum_document: {
        type: String,
        
    },
    registered_by: {
        type: String,
        
    }
});

const Curriculum = mongoose.model("Curriculum", Curriculum_Schema);

export default Curriculum ;