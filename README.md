poly-extractor
========

[![Build Status](https://travis-ci.org/morganherlocker/poly-extractor.png?branch=master)](https://travis-ci.org/morganherlocker/poly-extractor)

extracts all of the polygons out of a geojson FeatureCollection

###Install
```sh
npm install poly-extractor
```

###Usage

```js
var extractor = require('poly-extractor')

var fc = JSON.parse(fs.readFileSync('./FC.geojson'))
res = extractor(fc)
fs.writeFileSync('./polys.geojson', JSON.stringify(res))
```

###Test
```sh
npm test
```
