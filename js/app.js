var initInfo = function(){

    var name = "Tatparya Shankar";
    var tag = "Engineer | Programmer | Designer";

    $(".brand-heading").append( name );
    $(".intro-text").append( tag );

    var aboutMe = "I am Tatparya Shankar, currently pursuing an \
    undergraduate degree in the field of Computer Engineering \
    from Purdue University. A very passionate and quick learner \
    with a strong base of object oriented programming. I am very \
    passionate about machine learning, cyber security, \
    aritificial intelligence and web development. I am seeking a challenging \
    work environment and a position of responsibility that would \
    allow me to utilize and further refine my technical and \
    interpersonal skills and also enrich my knowledge.";

    var interests = ["Aritificial Intelligence", "Machine Learning",
     "Web Development", "Security", "Mobile App Development"];

    var skills = ["C++", "C#", "Python", "Java", "HTML", "JavaScript" ];

    $("#about-text").append( aboutMe );

    for ( i in interests )
    {
        $("#interests").append( "<li>" + interests[ i ] + "</li>" );
    }

    for ( j in skills )
    {
        $("#skills").append( "<li>" + skills[ j ] + "</li>" );
    }

}
