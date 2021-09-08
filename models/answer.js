'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Answer = loader.database.define(
  'answers',
  {
    answera: {
      type: Sequelize.STRING,
      allowNull: false
    },
    answerId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    answercommentary: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    questionId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Answer;