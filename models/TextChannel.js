const sequelize = require('sequelize');
const db = require('../config/database');
const { Sequelize } = require('sequelize');
const Role = require('./Role');

const TextChannel = db.define('textChannels', {
    userID: { type: Sequelize.NUMBER },
    adminID: { type: Sequelize.NUMBER },
    resolved: { type: Sequelize.BOOLEAN },
    message: { type: Sequelize.STRING }
});

module.exports = TextChannel;