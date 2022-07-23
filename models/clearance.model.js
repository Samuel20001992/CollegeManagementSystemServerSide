import mongoose from "mongoose";

const Clearance_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    clearance_id: {
        type: Number
    },
    student_id: {
        type: String,
        
    },
    reason: {
        type: String,
        
    },
    store: {
        type: String,
        
    },
    finance: {
        type: String,
        
    },
    department: {
        type: String,
        
    },
    library: {
        type: String,
        
    },
    registerar: {
        type: String
    },
    date: {
        type: String
    }
});

const Clearance = mongoose.model("Clearance", Clearance_Schema);

export default Clearance;