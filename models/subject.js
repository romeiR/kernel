'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Subject = loader.database.define(
  'subjects',
  {
    subjectname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    subjectId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Subject;