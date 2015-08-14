$(function(){

    //  Catch clicks on a tags
    $(".customScroll").click( function( ) {

        navigate( this );

    });

    return false;

});

var navigate = function ( obj ){

    //  Get section name
    var target = obj.id;

    //  Get position of anchor
    var pos = $( target ).position().top;

    //  Scroll / animate to the anchor
    $( "body,html" ).animate({ scrollTop: pos }, 3000, "easeInOutExpo" );

}
