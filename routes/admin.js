'use strict';
const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');

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

router.post('/new', function(req,res,next) {
  Subject.create({
    subjectname: req.body.subject_name
  }).then((subject) => {
    console.log(req.body);
    res.redirect('/admin');
  })
});



module.exports = router;