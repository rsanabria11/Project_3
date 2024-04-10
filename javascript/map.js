// map

var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.09011843664449, lng: -118.32688458633045 },
    zoom: 11,
  });
  








  
  const marker = new google.maps.Marker({
    position: { lat: 34.09011843664449, lng: -118.32688458633045 },
    map: map,
    title: "Los Angeles",
    draggable: true
  });
 
google.maps.event.addDomListener(window, 'load', initMap)
