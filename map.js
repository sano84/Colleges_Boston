

//coordinate of Boston

var mymap = L.map('mapdiv')
mymap.setView([42.360278, -71.057778], 11);

//Being said
var backgroundLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// (1) Marker of old state house
// add a popup to the marker

var oldhouseMarker = L.marker([42.358769, -71.057806]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Old Center house</h5><a href='https://en.wikipedia.org/wiki/Old_State_House_(Boston)' target='blank'><img src='img/house.jpg' width='200px' </a>");

$("#zoomTooldstate").click(function(){
    mymap.setView([42.358769, -71.057806], 17)
});


// (2) Marker of Harvard University
// add a popup to the marker

var harvarduniMarker = L.marker([42.374444, -71.116944]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Harvard University</h5><a href='https://en.wikipedia.org/wiki/Harvard_University' target='blank'><img src='img/Harvard.jpg' width='200px' </a>");

$("#zoomToharvardUniv").click(function(){
    mymap.setView([42.374444, -71.116944], 17)
});

// (3) Marker of Massachusetts Institute of Technology
// add a popup to the marker

var mitMarker = L.marker([42.359722, -71.091944]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Massachusetts Institute of Technology</h5><a href='https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology' target='blank'><img src='img/MIT.jpg' width='200px' </a>");

$("#zoomTomit").click(function(){
    mymap.setView([42.359722, -71.091944], 17)
});

// (4) Marker of Tufts University
// add a popup to the marker

var tuftUniMarker = L.marker([42.406, -71.12]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Tufts University</h5><a href='https://en.wikipedia.org/wiki/Tufts_University' target='blank'><img src='img/MIT.jpg' width='200px' </a>");

$("#zoomTomTuftsUniv").click(function(){
    mymap.setView([42.406, -71.12], 17)
});

// (5) Marker of Boston College
// add a popup to the marker

var bostonColMarker = L.marker([42.335, -71.170278]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Boston College</h5><a href='https://en.wikipedia.org/wiki/Tufts_University' target='blank'><img src='img/tufts.jpg' width='200px' </a>");

$("#zoomToBostonCollege").click(function(){
    mymap.setView([42.335, -71.170278], 17)
});

// (6) Marker of Northeastern University
// add a popup to the marker

var northEasternUni = L.marker([42.34, -71.088333]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Northeastern University</h5><a href='https://en.wikipedia.org/wiki/Northeastern_University' target='blank'><img src='img/Northeastern.jpg' width='200px' </a>");

$("#zoomTonortheastern").click(function(){
    mymap.setView([42.34, -71.088333], 17)
});

// (7) Marker of Babson College
// add a popup to the marker

var babsonCollege = L.marker([42.298231, -71.261192]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Babson College</h5><a href='https://en.wikipedia.org/wiki/Babson_College' target='blank'><img src='img/Babson.jpg' width='200px' </a>");

$("#zoomTobobsonCollege").click(function(){
    mymap.setView([42.298231, -71.261192], 17)
});

// (8) Marker of Bentley University
// add a popup to the marker

var bentleyUniversity = L.marker([42.3876, -71.2206]).addTo(mymap).bindPopup("<h5 class = 'text-center'>Bentley University</h5><a href='https://en.wikipedia.org/wiki/Bentley_University' target='blank'><img src='img/Bentley.jpg' width='200px' </a>");

$("#zoomBentleyUniv").click(function(){
    mymap.setView([42.3876, -71.2206], 17)
});



//choose an event to respond to
// write an event handler
mymap.on('mousemove', function(e){
    var str = "Latitude: "+ e.latlng.lat.toFixed(6)+"  Longtitude: "+e.latlng.lng.toFixed(6)+"  Zoom Level: "+mymap.getZoom();
    $("#map_coords").html(str);
});

var options = {
    maxZoom: 16,
    tolerance: 3,
    debug: 0,
    style: {
      fillColor: "#1EB300",
      color: "#F2FF00",
    },
  };

// Load the GeoJSON data and add it to the map
var geojsonLayer = new L.GeoJSON.AJAX("highereducation.geojson", {
  onEachFeature: function(feature, layer) {
      var str = "<h4>" + feature.properties.name + "</h4><hr>";
      str += "<a href='" + feature.properties.web + "' target='_blank'>"; // Changed target to '_blank'
      str += "<img src='img/" + feature.properties.image + "' width='200px'>";
      str += "</a>";
      layer.bindPopup(str); // Bind the popup to the layer
  },
}).addTo(mymap);

// Listener for data loaded event
geojsonLayer.on('data:loaded', function() {
  mymap.addLayer(geojsonLayer);
});
// Optional: Add an event listener for when the data is loaded
// geojsonLayer.on('data:loaded', function() {
//   console.log("GeoJSON data loaded");
// });

// geojsonLayer.addTo(mymap);

// mymap.on('mousemove', function(e){

// })