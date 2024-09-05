import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String, require: true, index:true, unique:true,sparse:true
    },
    email: {
        type: String, require: true, index:true, unique:true,sparse:true
    },
    password: {
        type: String,
        required: true,
    },
}, { timeseries: true });



const User = mongoose.model('User', userSchema);


export default User;