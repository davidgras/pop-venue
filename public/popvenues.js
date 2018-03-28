/**
 * PopVenues jQuery functions
 */

$(() => {

    // Search location
    $('#search').click(function(){
        var $input = $('#location');
        var $output = $('#result');
        if( $input ) {
            $.getJSON('ws/venues/'+$input.val(), (data)=>{
                console.log(data);
                $output.html( JSON.stringify(data) );
            });
        }
    });
    
    
});
