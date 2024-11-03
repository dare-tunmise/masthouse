const mongoose = require('mongoose');

const Schema = mongoose.Schema

const personSchema = new Schema({
    fullName : {
        type : String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    lastSeen: {
        type: Number,
        required: true
    },
    missingStatus: {
        type: Boolean,
        required: true
    }

}, {timestamps: true}) 

const Person = model.('Person', personSchema);

module.exports = Person;