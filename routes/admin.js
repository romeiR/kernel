'use strict';
const express = require('express');
const Question = require('../models/question');
const router = express.Router();
const Subject = require('../models/subject');
const Unit = require('../models/unit');

router.get('/', function(req,res,next) {
  res.render('admin',{
    subject: false
  });
});

router.post('/', function(req,res,next) {
  if (req.body.admin_pass == "ys2060!!") {
    res.render('admin', {
      subject: true
    });
  }else {
    res.redirect('/');
  }
});

router.post('/new/subject', function(req,res,next) {
  Subject.create({
    subjectname: req.body.subject_name
  }).then((subject) => {
    console.log(req.body);
    res.redirect('/admin');
  })
});

router.post('/new/unit', function(req,res,next) {
  Subject.findOne({
    where: {
      subjectname: req.body.unitsubject
    },
    order:[['subjectId', "ASC"]]
  }).then((subject) => {
    Unit.create({
      unitname: req.body.unitname,
      subjectId: subject.subjectId
    }).then(() => {
      res.redirect('/subjects');
    })
  });
});

router.post('/new/question', function(req,res,next) {
  Unit.findOne({
    where: {
      unitname: req.body.questionunit
    },
    order: [['unitId', 'ASC']]
  }).then((unit) => {
    Question.create({
      questiontitle: req.body.questiontitle,
      questionq: req.body.questionq,
      unitId: unit.unitId
    }).then(() => {
      res.redirect('/subjects');
    });
  });
});

module.exports = router;