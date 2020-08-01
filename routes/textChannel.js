const express = require('express');
const { response, request } = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Str = require('@supercharge/strings');
const bcrypt = require('bcrypt');
const TextChannel = require('../models/TextChannel');
const Role = require('../models/Role');


//get all current channels
router.get('/getCurrentChannels', (request, response) => {
    console.log("Now here");
    TextChannel.findAll( { raw: true, where: { resolved: false } } )
    .then( data => {
        let messageObject = JSON.parse(data[0].message);
        console.log("Eureka, ", "from ", messageObject[0].user, " message " ,messageObject[0].message, " time ", messageObject[0].timestamp);
        response.status(200).json({"from": messageObject[0].user, "message": messageObject[0].message, "time":messageObject[0].timestamp});
    })
    .catch( error => {
        console.log("Error: ", error)
    });
});

//create user role
router.post('/createNewChannel', (request, response) => {

    let userID;
    let adminID;
    let adminRoleID;
    let userName;
    let adminRole;
    let resolved = false;
    
    //get user id
    User.findAll( { raw: true, where: { token: {[Op.like]:  request.body.token } } } )
    .then ( data => {
        userID = data[0].id;
        userName = data[0].name;

        //get id of the specified role
        Role.findAll( { raw: true, where: { role: {[Op.like]:  request.body.role } } } )
        .then ( data => {
            adminRoleID = data[0].id;
            adminRole = data[0].role;

            //////////////
            //get admin details
            User.findAll( { raw: true, where: { roleID: adminRoleID } } )
            .then ( data => {
                adminID = data[0].id;

                //now create the json object for the current message
                var todaysDate = new Date();
                var currentTime = todaysDate.getHours() + ":" + todaysDate.getMinutes() + ":" + todaysDate.getSeconds();
                let userMessageObjectArray = [];
                let userMessageObject = {
                    "message": request.body.message,
                    "timestamp": currentTime,
                    "user": userName,
                    "sentTo": adminID
                }

                userMessageObjectArray.push(userMessageObject);
                let message = JSON.stringify(userMessageObjectArray);;

                console.log("*************************** ", userID, adminID, resolved, message );

                const role = request.body.role;
                TextChannel.create({
                    userID, adminID, resolved, message 
                })
                .then( data => {
                    response.status(201).send("Message sent");
                })
                .catch( error => { 
                    console.log(error)
                    response.status(500).send("Server error");
                });
            })
            .catch( error => {
                console.log("error here: 1 ", error);
            });

            console.log("Before insert id is: ", adminID);
        })
        .catch( error => {
            console.log("error here: 1 ", error);
        })
    })
    .catch( error => {
        console.log("error here: 1 ", error);
    });

    
});

module.exports = router;