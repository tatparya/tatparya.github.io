$( function() {
    $("button.form-reveal").click( function() {
        //  Reveal form
        navigate( this );
        $("#email-form").slideDown(4000, "easeInOutExpo");

    });

    $("button.btn-send").click( function() {

        //  Hide Form and Add Thank you
        $("#email-form").slideUp(3000, "easeInOutExpo");
        $("button.form-reveal").slideUp( 2000, "easeInOutExpo");

        $(".thanks").slideDown(5000, "easeInOutExpo" );
        return false;
    });
})
