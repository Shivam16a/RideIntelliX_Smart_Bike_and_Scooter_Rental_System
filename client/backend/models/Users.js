const mongoose = require("mongoose");

const users = new mongoose.Schema({
    name : {
        type : String,
        required:true
    },
    location : {
        type : String,
        required:true
    },
    status : {
        type : String,
        enum : ["active","inactive"],
        default:"active" 
    },
    createdAt : {
        type : Date,
        default: Date.now
    }
});

module.exports = mongoose.model("users",users);