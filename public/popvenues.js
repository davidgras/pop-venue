/**
 * PopVenues jQuery functions
 */

// Location autocomplete field
var autocomplete;

// Map objects
var map, service, markers=[], midPoint;

// Initialize google maps components
function init() {
    // LOCATION AUTOCOMPLETE
    // Create the autocomplete object, restricting the search to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('location')),
        {types: ['geocode']});
    // When the user selects an address from the dropdown, calculate distance and point-of-interest.
    autocomplete.addListener('place_changed', searchLocation);
    
    // MAPS
    // Create the map, centered in London by default
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.5182, lng: -0.1084},
        zoom: 15
    });
}

// Search for popular venues
function searchLocation() {

    // Validate location coordinates
    if( !autocomplete || !autocomplete.getPlace() || !autocomplete.getPlace().geometry || !autocomplete.getPlace().geometry.location ) {
        return;
    }
    
    // Get lat/lon from geometry
    var lat = autocomplete.getPlace().geometry.location.lat();
    var lon = autocomplete.getPlace().geometry.location.lng();
    
    // WS request
    var $output = $('#result');
    $.getJSON(`ws/venues/${lat}/${lon}`, (data)=>{
        placeVenuesOnMap( data.venues )
    });
}


// Draw a marker for every venue
function placeVenuesOnMap( venues ) {
    // Clear previous markers
    clearMarkers();
    // Place pop venues into the map
    for( place of venues ) {
        console.log(place);
        createMarker(
            place.venue.location.lat,
            place.venue.location.lng,
            place.venue.name
        );
    }
}



// Draw a marker in the map and show its name in a label.
function createMarker(lat,lon,name) {
    // Create a marker
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat,lon),
    });
    markers.push(marker);

    // Create the label
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent( name );
    // Show the label on hover event
    google.maps.event.addListener(marker, 'mouseover', function() {
        infowindow.open(map, this);
    });
    google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close(map, this);
    });

    // Center the pin on the map
    map.setCenter( marker.getPosition() );
}


// Remove all markers from the map
function clearMarkers() {
    for (var i=0; i<markers.length; i++) {
      markers[i].setMap(null);
    }
}