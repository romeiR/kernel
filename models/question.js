'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define(
  'questnios',
  {
    questiontitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    questionId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      alloNull: false
    },
    questionq: {
      type: Sequelize.STRING,
      allowNull: false
    },
    unitId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Question;