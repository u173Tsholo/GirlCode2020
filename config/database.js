var Sequelize = require('sequelize');

module.exports = new Sequelize('d3hgsi2l63vmb8', 'crptiokvpligte', '2a2cf799640a6efb5650b8ee18de55aada3f86733c9d2e814cdc199405b4dd9f', {
    host: 'ec2-18-211-48-247.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    ssl:true,
    dialectOptions:
        { ssl: {require:true, rejectUnauthorized: false }},

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }

  });
