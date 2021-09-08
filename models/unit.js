'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Unit = loader.database.define(
  'units',
  {
    unitname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unitId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    subjectId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Unit;