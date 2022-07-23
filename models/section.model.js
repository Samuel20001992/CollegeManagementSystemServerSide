import mongoose from "mongoose";

const Sections_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    
    section_id: {
        type: String
    },
    section_name: {
        type: String
    },
    department: {
        type: String,
        
    },
    learning_modality: {
        type: String,
        
    },
    attendance_year: {
        type: String
    },
    curriculum_name: {
      type: String  
    },
    number_of_students: {
        type: String,
        
    },

   
});

const Sections = mongoose.model("Sections", Sections_Schema);

export default Sections;