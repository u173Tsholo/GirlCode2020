const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const Role = require('./Role');

const User = db.define('users', {
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.NUMBER },
    address: { type: Sequelize.STRING },
    postalCode: { type: Sequelize.NUMBER },
    password: { type: Sequelize.STRING },
    token: { type: Sequelize.STRING },
    roleID: { type: Sequelize. NUMBER }
});

//User.hasMany(PuzzleRating);
//Role.belongsTo(User, {foreignKey: 'roleID'});

module.exports = User;