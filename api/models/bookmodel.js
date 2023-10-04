import mongoose from "mongoose";

const bookShema = new mongoose.Schema({
    bookName : {
        type: String,
        required: true,
        unique: true
    },
    author : {
        type: String,
        required: true,
    },
    quantity : {
        type: Number,
        required: true,
    },
    department : {
        type: String,
        required: true,
    },
    comment : {
        type: String,
    },

},{timestamps:true})

const store = mongoose.model("bookstore", bookShema);

export default store;