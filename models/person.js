const mongoose = require('mongoose');

const Schema = mongoose.Schema

const personSchema = new Schema({
    fullName : {
        type : String,
        required: true
    }
}, {timestamps: true}) 

