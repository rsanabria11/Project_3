
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15.5,
    center: { lat: 29.749907, lng: -95.358421},
  });
  var marker = new google.maps.Marker({
    position: { lat: 29.749907, lng: -95.358421},
    map: map,
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;