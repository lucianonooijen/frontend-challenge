// Dependencies
const express = require('express');
const router = express.Router();
const _ = require('underscore-node');
const path =  require('path');

// Utils
const csvUtils = require('../utils/csvUtils');
const jsonUtils = require('../utils/jsonUtils');

// Data
const organizerData = path.join(__dirname, '../data/organizers.min.json');
const csvData = path.join(__dirname, '../data/sales.csv');

router.get('/', (req, res) => {
    res.send('API route is working!');
});

router.get('/organizers', function (req, res) {
    jsonUtils.streamableFor(organizerData, res);
});

router.get('/sales/:organizer?/:year?/:week?', function (req, res) {
    csvUtils.filterableCSVStream(csvData, req.params.organizer, req.params.year, req.params.week, res);
});

module.exports = router;