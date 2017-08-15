const express = require('express')
const app = express()
const _ = require('underscore-node')
const csvUtils = require('./utils/csvUtils')
const jsonUtils = require('./utils/jsonUtils')
const path =  require('path')
const organizerData = path.join(__dirname, 'data/organizers.min.json')
const csvData = path.join(__dirname, 'data/sales.csv')

app.use(express.static('public'))

app.get('/api/organizers', function (req, res) {
    jsonUtils.streamableFor(organizerData, res)
})

app.get('/api/sales/:organizer?/:year?/:week?', function (req, res) {
    csvUtils.filterableCSVStream(csvData, req.params.organizer, req.params.year, req.params.week, res)
})

app.listen(3000, function () {
    console.log('App listening on port 3000, have fun!')
})
