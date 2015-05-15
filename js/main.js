$(document).ready(function() {

    setTimeout( function(){
        //  Fade out loader
        $(".loader").fadeOut( 2000, "easeInOutExpo" );
    }, 6000);

    $(window).scroll(function(e){
        navFn();
    })
});
