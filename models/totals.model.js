import mongoose from "mongoose";

const Totals_Schema = new mongoose.Schema({
    id: {
        type: Number,
        
    },
    totals_id: {
        type: Number
    },
    total_credit: {
        type: String,
        
    },
    total_point: {
        type: String,
        
    },
    total_mpa_point: {
        type: String
    },
    total_mpa_credit: {
      type: String  
    },
    student_id: {
        type: String,
        
    },
   
});

const Totals = mongoose.model("Totals", Totals_Schema);

export default Totals;