const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required: [true, "Please provide a first name"]
    },
    lastName : {
        type:String,
        required: [true, "Please provide a last name"]
    },
    displayName : {
        type:String
    },
    phoneNumber : {
        type:Number,
        unique: true
    },
    email : {
        type:String,
        required: [true, "Please provide email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"
        ]
    },
    isSubscribed:{
        type: Boolean,
        required: true
    },
    dob:{
        type: Date
    },
    group:{
        type: String
    },
    membershipType:{
        type: String
    },
    weight:{
        type: String
    },
    fat:{
        type: String
    },
    thigh:{
        type: String
    },height:{
        type: String
    },chest:{
        type: String
    },arms:{
        type: String
    },
    startDate:{
        type: Date
    },
    endDate:{
        type: String
    },
    trainer:{
        type: String
    },
    addedOn:{
        type: Date
    },
    address : {
        type: String
    },
    updatedOn: {
        type: Date,
        default : Date.now
    }
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member