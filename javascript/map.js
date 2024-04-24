function init() {
    var el = document.getElementById('canvas');
    var myLocation = new google.maps.LatLng(34.13457688683777, -118.32114050424853);
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };

    var myMap = new google.maps.Map(el, mapOptions);

    var contentString = '<h1>Hollywood Sign</h1><p>The Hollywood sign is a symbol of the entertainment industry, dreams, and ambition. Its also a location marker and a reminder of the pursuit of glamorous lifestyles. The sign has nine white block letters that are each 45 feet tall.</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLocation,
        map: myMap,
        title: 'Hollywood Sign',
        icon: './images/mapicon.jpg'
    });

    var streetViewService = new google.maps.StreetViewService();
    var streetViewPanorama = myMap.getStreetView();
    streetViewPanorama.setPosition(myLocation);
    streetViewPanorama.setPov({
        heading: 256,
        pitch: 0
    });

    var searchBox = new google.maps.places.SearchBox(document.getElementById('search-box'));
    myMap.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('search-box'));

    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0) {
            return;
        }
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        myMap.fitBounds(bounds);
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(myMap, marker);
    });
}

google.maps.event.addDomListener(window, 'load', init);