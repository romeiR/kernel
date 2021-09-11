'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define(
  'questions',
  {
    questiontitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    questionId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      alloNull: false,
      autoIncrement: true
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