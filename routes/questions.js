'use strict';
const express = require('express');
const router = express.Router();
const Question = require('../models/question');
router.get('/:unitId', function(req,res,next) {
  Question.findOne({
    where: {
      unitId: req.params.unitId
    },
    order: [['questionId', "ASC"]]
  }).then((question) => {
    res.render('question',{
      questiontitle: question.questiontitle,
      questionq: question.questionq
    });
    console.log(question);
  });
});

module.exports = router;