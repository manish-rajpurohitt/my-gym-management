const express = require('express');
const router =  express.Router();
const { 
    addMember,
    editMember,
    getAllMembers,
    getAllSubscribedMembers
} = require('../../controllers/member');
const {protect} = require("../../middleware/auth");

router.route("/addMember").post(addMember);
router.route('/editMember').post(editMember);
router.route('/getAllSubscribedMembers').get(protect, getAllSubscribedMembers);
router.route('/getAllMembers').get(protect, getAllMembers);


module.exports = router;