/**
 * Created by Ricci on 12/04/2016.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers/files');
router.route('/')
    .get(function (req, res) {
        res.json(controller.list());
    });
module.exports = router;

