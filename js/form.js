$( function() {
    $("button.form-reveal").click( function() {
        //  Reveal form
        navigate( this );
        $("#email-form").slideDown(4000, "easeInOutExpo");

    })
})
