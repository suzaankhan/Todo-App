
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    user : [{
        type : mongoose.Types.ObjectId,
        reference : "Users"
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }
});

module.exports = new mongoose.model("TodoSchema", todoSchema);