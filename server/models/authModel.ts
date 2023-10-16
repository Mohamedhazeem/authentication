import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required : [true, 'Your email address is required']
    },
    password: {
        type: String,
        required: [true, 'Your password is required']
    }
});

export const authModel = mongoose.model('auth', authSchema);