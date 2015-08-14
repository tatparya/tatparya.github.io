$(document).ready(function() {

    setTimeout( function(){
        //  Fade out loader
        $(".loader").fadeOut( 2000, "easeInOutExpo" );
    }, 3000);

    $(window).scroll(function(e){
        navFn();
    })
});
