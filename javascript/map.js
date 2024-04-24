function init() {
    var el = document.getElementById('canvas');
    var myLocation = new google.maps.LatLng(34.13457688683777, -118.32114050424853);
    var mapOptions = {
        center: myLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var myMap = new google.maps.Map(el, mapOptions);

    // Array of locations with their details
    var locations = [
        { position: new google.maps.LatLng(34.13457688683777, -118.32114050424853), title: 'Hollywood Sign', icon: './images/mapicon.jpg', content: '<h1>Hollywood Sign</h1><p>The Hollywood sign is a symbol of the entertainment industry, dreams, and ambition. Its also a location marker and a reminder of the pursuit of glamorous lifestyles. The sign has nine white block letters that are each 45 feet tall.</p>' },
        { position: new google.maps.LatLng(34.052235, -118.243683), title: 'Griffith Observatory', icon: './images/observatory.png', content: '<h1>Griffith Observatory</h1><p>The Griffith Observatory is a facility in Los Angeles, California, sitting on the south-facing slope of Mount Hollywood in Los Angeles\' Griffith Park. It commands a view of the Los Angeles Basin, including Downtown Los Angeles to the southeast, Hollywood to the south, and the Pacific Ocean to the southwest.</p>' }
        // Add more locations as needed
    ];

    // Loop through each location and add markers
    locations.forEach(function (location) {
        var marker = new google.maps.Marker({
            position: location.position,
            map: myMap,
            title: location.title,
            icon: location.icon
        });

        var infowindow = new google.maps.InfoWindow({
            content: location.content
        });

        // Add click event listener to each marker to open info window
        marker.addListener('click', function () {
            infowindow.open(myMap, marker);
        });
    });
}

init();