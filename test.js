var should = require('should')
var fs = require('fs')
var extractor = require('./index.js')

describe('arc-poly', function(){
  it('should take a geometrycollection and return all polygons', function(){
    var fc = JSON.parse(fs.readFileSync('./FC.geojson'))
    res = extractor(fc)
    res.should.be.ok
    fs.writeFileSync('./polys.geojson', JSON.stringify(res))
  })
})
