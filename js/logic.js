
var data = features;
var data2 = features2;
var data3 = features3;
var data4 = features4;
var data5 = features5;

var sourceMarkers = [];
for (var i = 0; i < data.length; i++) {
  console.log(data[i].geometry.coordinates)
  sourceMarkers.push(
    L.circle(data[i].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "yellow",
      radius: 25000
    }).bindPopup("<h3>Source Name: " + data[i].properties.Name + "</h3><br><h3> Energy Type: " + data[i].properties.Type + "</h3><br>")
  );
}

var kzMarkers = [];
for (var i = 0; i < data2.length; i++) {
  console.log(data2[i].geometry.coordinates)
  kzMarkers.push(
    L.circle(data2[i].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "yellow",
      radius: 25000
    })
  );
}

var mMarkers = [];
for (var i = 0; i < data3.length; i++) {
  console.log(data3[i].geometry.coordinates)
  mMarkers.push(
    L.circle(data3[i].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "yellow",
      radius: 25000
    })
  );
}
var aMarkers = [];
for (var i = 0; i < data4.length; i++) {
  console.log(data4[i].geometry.coordinates)
  aMarkers.push(
    L.circle(data4[i].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "yellow",
      radius: 45000
    })
  );
}
var tMarkers = [];
for (var i = 0; i < data5.length; i++) {
  console.log(data5[i].geometry.coordinates)
  tMarkers.push(
    L.circle(data5[i].geometry.coordinates, {
      stroke: false,
      fillOpacity: 0.75,
      color: "white",
      fillColor: "yellow",
      radius: 45000
    }).bindPopup("<h3>Source Type: " + data5[i].properties.power + "</h3>")
  );
}



var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var satmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.satellite",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var piratemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
});


var sources = L.layerGroup(sourceMarkers);
var kz = L.layerGroup(kzMarkers);
var m = L.layerGroup(mMarkers);
var a = L.layerGroup(aMarkers);
var t = L.layerGroup(tMarkers);


var baseMaps = {
  "Dark Map": darkmap,
  "Street Map": streetmap,
  "Satellite Map": satmap

  
};

var overlayMaps = {
  "Africa Energy Sources": sources,
  "Tanzanian Energy Sources": t,
  "Kazakhstan Energy Sources": kz,
  "Montenegro Energy Sources":m,
  "Arabian Energy Sources": a
 
};


var myMap = L.map("map", {
  center: [7.09, 10.4],
  zoom: 2,
  layers: [darkmap, sources]
});


L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
