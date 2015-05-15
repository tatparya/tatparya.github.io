var navFn = function(){
    //  Hanlding Active element
    var aboutPos = $("#section-about").offset().top;
    var projectPos = $("#section-projects").offset().top;
    var socialPos = $("#section-social").offset().top;

    var middle = $("i.projects").offset().top;

    if( middle >= aboutPos )
    {
        $(".small-nav").children().removeClass("fa-active");
        $("i.about").addClass("fa-active");
    }
    if( middle >= projectPos )
    {
        $(".small-nav").children().removeClass("fa-active");
        $("i.projects").addClass("fa-active");
    }
    if( middle >= socialPos )
    {
        $(".small-nav").children().removeClass("fa-active");
        $("i.social").addClass("fa-active");
    }

};

$(function(){
    $(".customScroll-up-down").click( function(){

        elements = $(".small-nav").children();
        if( $(elements[1]).hasClass("fa-active") )
        {
            if( this.id == "d" )
            {
                navigate( elements[2] );
            }
            else
                navigate( elements[3] );
        }

        else if( $(elements[2]).hasClass("fa-active") )
        {
            if( this.id == "d" )
            {
                navigate( elements[3] );
            }
            else
                navigate( elements[1] );
        }
        else
        {
            if( this.id == "u" )
            {
                navigate( elements[2] );
            }
            else
                navigate( elements[1] );
        }


/*
        var scroll = 0;
        //  Get active section
        elements = $(".small-nav").children();
        //  Get position of anchor
        if( elements[1].hasClass( "fa-active" ) && this.id == 'd' )
        {
            var pos = $( "#section-projects" ).position().top;
            scroll += 1;
        }

        if( elements[2].hasClass( "fa-active" ) && this.id =='u' )
        {
            var pos = $( "#section-about" ).position().top;
            scroll += 1;
        }
        else if( elements[2].hasClass( "fa-active" ) && this.id =='d' )
        {
            var pos = $( "#section-social" ).position().top;
            scroll += 1;
        }

        if( elements[3].hasClass( "fa-active" ) && this.id == 'u' )
        {
            var pos = $( "#section-projects" ).position().top;
            scroll += 1;
        }

        if( scroll ){
            //  Scroll / animate to the anchor
            $( "body,html" ).animate({ scrollTop: pos }, 2000, "easeInOutCubic" );
        }
        */

    });
});
