'use strict';
const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const Unit = require('../models/unit');

router.get('/:subjectId', function(req,res,next) {
  console.log(req.params.subjectId);
  console.log('aaa');
});

module.exports = router;