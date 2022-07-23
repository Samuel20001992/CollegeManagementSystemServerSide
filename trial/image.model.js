import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    }
    ,
    photo: {
        type: String
    }
    ,
    birthdate: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

export default User;