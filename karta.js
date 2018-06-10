function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 58.991429, lng: 12.462891},
    zoom: 17
  });

  var marker = new google.maps.Marker({
  	position: {lat: 58.991429, lng: 12.462891},
  	map: map
  })

  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
  		console.log(pos);
      map.setCenter(pos);
  		calcRoute(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    }, {timeout:10000});
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }

  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

  directionsDisplay.setMap(map);
  function calcRoute(pos) {
    var start = pos;
    var end = {lat: 58.991429, lng: 12.462891};
    var request = {
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
  }
}
