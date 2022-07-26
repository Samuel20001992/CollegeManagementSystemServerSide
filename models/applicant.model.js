import mongoose from "mongoose";

const Applicant_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    applicant_id: {
        type: Number,
        
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
    place_of_birth_city: {
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
    address_city: {
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
    emergency_contact_address_city: {
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
    status: {
        type: String
    }
});

const Applicant = mongoose.model("Applicant", Applicant_Schema);

export default Applicant;