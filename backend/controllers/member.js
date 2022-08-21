const Member = require('../models/Member');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.addMember = async (req, res, next) => {
    let {email, firstName, lastName, dob, group, membershipType, address, weight, height, chest, thigh,arms, fat, startDate, endDate, trainer, phoneNumber } = req.body;
    try{
        console.log(req.body)
        const addedOn = Date.now();
        const displayName = firstName +" "+ lastName;
        let isSubscribed = false;
        if(Date.now() > new Date(startDate) && Date.now() < new Date(endDate)){
            isSubscribed = true;
        }
        const user = await Member.create({
            email : email.toLowerCase(), firstName, lastName, isSubscribed, displayName, addedOn, dob: new Date(dob), group, membershipType, address, weight,phoneNumber, height, chest, thigh,arms, fat, startDate: new Date(startDate), endDate: new Date(endDate), trainer
        });

        res.status(200).json({
            success: true
        })
    }
    catch(e){
        next(e);
    }
}


exports.editMember = async (req, res, next) => {
    let {email, firstName, lastName, dob, group, membershipType, address, weight, height, chest,phoneNumber, thigh,arms, fat, startDate, endDate, trainer, userId} = req.body;
    try{
        if(req.user.email !== "manishkumar9866@gmail.com"){
            res.status(400).json({
                success: false,
                reason: "Unauthorized"
            })
            return;
        }
        const addedOn = Date.now();
        const displayName = firstName +" "+ lastName;
        const user = await Member.updateOne({_id: userId},{
            email : email.toLowerCase(), firstName, displayName, lastName,addedOn, dob, group,phoneNumber, membershipType, address, weight, height, chest, thigh,arms, fat, startDate, endDate, trainer
        });
        res.status(200).json({
            success: true,
        })
    }
    catch(e){
        next(e);
    }
}

exports.getAllSubscribedMembers = async (req, res, next) => {
    try{
        if(req.user.email === "manishkumar9866@gmail.com"){
            const members = await Member.find({isSubscribed: true});
            res.status(200).json({
                success: true,
                members: members
            });    
        }else{
            res.status(400).json({
                success: false,
                reason: "Unauthorized"
            })
        }
    }
    catch(e){
        next(e);
    }
}

exports.getAllMembers = async (req, res, next) => {
    try{
        if(req.user.email === "manishkumar9866@gmail.com"){
            const members = await Member.find();
            res.status(200).json({
                success: true,
                members: members
            });    
        }else{
            res.status(400).json({
                success: false,
                reason: "Unauthorized"
            })
        }
    }
    catch(e){
        next(e);
    }
}