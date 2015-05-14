$(function(){

    //  Catch clicks on a tags
    $("#customScroll").click( function() {

        //  Get section name
        var target = this.hash;

        //  Get position of anchor
        var pos = $( target ).position().top;

        //  Scroll / animate to the anchor
        $( "body,html" ).animate({ scrollTop: pos }, 1000, "easeInOutCubic" );

    });

    return false;

});
