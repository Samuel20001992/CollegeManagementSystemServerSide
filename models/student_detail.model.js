import mongoose from "mongoose";

const Student_Detail_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    student_id: {
        type: Number
    },
    applicant_id: {
      type: Number  
    },
    first_name: {
        type: String,
        
    },
    middle_name: {
        type: String,
        
    },
    last_name: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    facility: {
        type: String,
        
    },
    department: {
        type: String,
        
    },
    program: {
        type: String,
        
    },
    learning_modality: {
        type: String,
        
    },
    photo: {
        type: String,
        
    },
    section: {
        type: String,
        
    },
    attendace_year: {
        type: String,
        
    },
    fs_number: {
        type: String,
        
    },
    account_number: {
        type: String,
        
    },
    bank: {
        type: String,
        
    },
    birth_date: {
        type:String
    },
    place_of_birth_region: {
        type: String
    },
    place_of_birth_zone: {
        type: String
    },
    place_of_birth_woreda: {
        type: String
    },
    place_of_birth_house_no: {
        type: String
    },

    address_region: {
        type: String
    },
    address_zone: {
        type: String
    },
    address_woreda: {
        type: String
    },

    address_house_no: {
        type: String
    },

    emergency_contact_first_name: {
        type: String
    },
    emergency_contact_middle_name: {
        type: String
    },
    emergency_contact_last_name: {
        type: String
    },
    emergency_contact_address_region: {
        type: String
    },
    emergency_contact_address_zone: {
        type: String
    },
    emergency_contact_address_woreda: {
        type: String
    },

    emergency_contact_address_house_no: {
        type: String
    },
   emergency_contact_phone_no: {
        type: String
    },
   emergency_contact_email: {
        type: String
    },
   emergency_contact_relationship: {
        type: String
    },
     is_withdrawn: {
        type: Boolean
    },
    is_graduated:{
        type: String
    }
});

const Student_Detail = mongoose.model("Student_Detail", Student_Detail_Schema);

export default Student_Detail;