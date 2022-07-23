import mongoose from "mongoose";

const Application_Schema = new mongoose.Schema({
    id: {
        type: Number,
    },
    application_id: {
        type: String
    },
    student_id: {
        type: String,
    },
    item: {
        type: String,
    },
    course_code: {
        type: String,
    },
    reson: {
        type: String,
    }
});

const Application = mongoose.model("Application", Application_Schema);

export default Application;