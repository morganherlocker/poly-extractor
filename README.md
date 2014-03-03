poly-extractor
========

extracts all of the polygons out of a geojson FeatureCollection

###Install
```
npm install poly-extractor
```

###Usage

```
var extractor = require('poly-extractor')

var fc = JSON.parse(fs.readFileSync('./FC.geojson'))
res = extractor(fc)
fs.writeFileSync('./polys.geojson', JSON.stringify(res))
```
