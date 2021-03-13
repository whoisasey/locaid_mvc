/* eslint-disable no-console */
const express = require('express');
const { getAllData } = require('../controllers/dataController');

const router = express.Router();

router.route('/').get(getAllData);

// add router for /:id
module.exports = router;
