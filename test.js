var should = require('chai').should()
var fs = require('fs')
var extractor = require('./index.js')
var fc = require("./FC.json")
describe('arc-poly', function(){
  it('should take a geometrycollection and return all polygons', function(done){
    res = extractor(fc)
    res.should.be.ok
    fs.writeFile('./polys.geojson', JSON.stringify(res), done)
  })
})
