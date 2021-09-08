'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/kernel'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};