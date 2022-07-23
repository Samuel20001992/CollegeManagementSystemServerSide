import mongoose from "mongoose";

const College_Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    college_id: {
        type: Number
    },
    college_name: {
        type: String,
        required: true,
    },
    college_head: {
        type: String,
        required: true,
    }
});

const College = mongoose.model("College", College_Schema);

export default College;