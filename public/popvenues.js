/**
 * PopVenues jQuery functions
 */

// Location autocomplete field
var autocomplete;

// Initialize google maps components
function init() {
    // LOCATION AUTOCOMPLETE
    // Create the autocomplete object, restricting the search to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('location')),
        {types: ['geocode']});
    // When the user selects an address from the dropdown, calculate distance and point-of-interest.
    autocomplete.addListener('place_changed', searchLocation);
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
        // Print output
        $output.html( JSON.stringify(data) );
    });
}

