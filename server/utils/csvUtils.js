const path =  require('path')
const fs = require('fs')
const csv = require('fast-csv')
const destroy = require('destroy')
const onFinished = require('on-finished')

exports.filterableCSVStream = function (file, organizationFilter, yearFilter, weekFilter, res){
    let streamable = fs.createReadStream(file)
    let result = []
    let csvStream = csv()
    .on('data', function(data){
         let organization = Number.parseInt(data[0])
         let year = Number.parseInt(data[1])
         let week = Number.parseInt(data[2])
         let tickets = Number.parseInt(data[3])
         if(
            ((organizationFilter && organization === Number.parseInt(organizationFilter)) || !organizationFilter) &&
            ((yearFilter && year === Number.parseInt(yearFilter)) || !yearFilter) &&
            ((weekFilter && week === Number.parseInt(weekFilter)) || !weekFilter)
            ) {
            result.push({'organization': organization, 'year': year, 'week': week, 'tickets': tickets})
        }
    })
    .on('end', function(){
        console.log('Served ' + result.length + ' weeks of sales data!')
        res.send(JSON.stringify(result))
    })
    res.setHeader('Content-Type', 'application/json')
    streamable.pipe(csvStream)
    onFinished(res, function (err) {
        destroy(streamable)
    })
}
