// map

var map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 34.09011843664449, lng: -118.32688458633045 },
    zoom: 11,
    center: Hollywood,
  });
  
  const contentString =
    '<h1>The Hollywood Sign</h1><p>Spelling out the word "Hollywood" in 50-foot-tall (15.2 m) white uppercase letters and 450 feet (137.2 m) long,[1] it was originally erected in 1923 as a temporary advertisement for a local real estate development, but due to increasing recognition the sign was left up,[2] and replaced in 1978 with a more durable all-steel structure.</p>'
   
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Hollywood Sign",
  });
  const marker = new google.maps.Marker({
    position: Hollywood,
    map,
    title: "Hollywood Sign",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}
  const marker = new google.maps.Marker({
    position: { lat: 34.09011843664449, lng: -118.32688458633045 },
    map: map,
    title: "Los Angeles",
    draggable: true
  });
 
google.maps.event.addDomListener(window, 'load', initMap)
