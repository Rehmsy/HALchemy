const router = require('express').Router();
const Stage = require('../models/Stage');
const { Types } = require('mongoose');
const ensureAuth = require('../util/ensure-auth')();


module.exports = router

    .get('/:name', ensureAuth, (req, res, next) => {
        Stage.find({ name: req.params.name })
            .then(stage => res.json(stage[0]))
            .catch(next);
    });

    