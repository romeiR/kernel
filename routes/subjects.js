'use strict';
const express = require('express');
const router = express.Router();
const Subject = require('../models/subject.js');
router.get('/',function(req,res,next) {
  Subject.findAll({
    order: [['subjectId','ASC']]
  }).then((subject) => {
    res.render('subject', {
      subjects: subject
    });
  });
});

module.exports = router;