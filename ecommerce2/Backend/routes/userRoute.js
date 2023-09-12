const express = require('express');
const {router} = express.Router;
const User = require('../modals/user')

router.post('/adduser', async(req,res)=>{

    const newUser = new User(
        {
            "name": req.body.name,
            "email" : req.bosy.email,
            "password": req.body.password
        }
    )

    const savedUser = newUSer.save();
    res.json(savedUser)





})