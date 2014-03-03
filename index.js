module.exports = function(fc){
  var polys = {
    type: 'FeatureCollection'
  }
  polys.features = []
  fc.features.forEach(function(feature){
    if(feature.geometry.type === 'Polygon'){
      polys.features.push(feature)
    }
    else if(feature.geometry.type === 'MultiPolygon'){
      feature.geometry.coordinates.forEach(function(polyCoords){
        var poly = polyTemplate()
        poly.geometry.coordinates = polyCoords
        poly.properties = feature.properties
        polys.features.push(poly)
      })
    }
    else if(feature.geometry.type === 'GeometryCollection'){
      feature.geometry.geometries.forEach(function(geometry){
        if(geometry.type === 'Polygon'){
          var poly = polyTemplate()
          poly.geometry = geometry
          poly.properties = feature.properties
          polys.features.push(poly)
        }
        else if(geometry.type === 'MultiPolygon'){
          geometry.coordinates.forEach(function(polyCoords){
            var poly = polyTemplate()
            poly.geometry = {
              type: 'Polygon',
              coordinates: []
            }
            poly.properties = feature.properties
            poly.geometry.coordinates = polyCoords
            polys.features.push(poly)
          })
        }
      })
    }
  })

  return polys
}
function polyTemplate () {
  return {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: []
    }
  }
}