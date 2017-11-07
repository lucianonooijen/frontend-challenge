const path =  require('path')
const fs = require("fs")
const destroy = require('destroy')
const onFinished = require('on-finished')

exports.streamableFor = function (file, res){
    res.setHeader('Content-Type', 'application/json')
    let streamable = fs.createReadStream(file)
    streamable.pipe(res)
    onFinished(res, function (err) {
        destroy(streamable)
    })
}