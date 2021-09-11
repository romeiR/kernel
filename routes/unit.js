'use strict';
const express = require('express');
const router = express.Router();
const Subject = require('../models/subject');
const Unit = require('../models/unit');

router.get('/:subjectId', function(req,res,next) {
  Unit.findAll({
    where: {
      subjectId: req.params.subjectId
    },
    order: [['unitId', 'ASC']]
  }).then((unit) => {
    res.render('unit', {
      units: unit
    });
  });
});

module.exports = router;