/*
	Implementing scroll magic
1.	Create the ScrollMagic Controller (and select general options)
2.	Create an Animation Object (and select animation options)
3.	Create a Scene Object (and select scene options)
4.	Add our Animation Object to the Scene Object
5.	Add the Scene Object to the ScrollMagic Controller
*/

var main = function (){


    // Init Controller
    var scrollMagicController = new ScrollMagic();

	// TweenMax.to(selectorOfElementYouWantToAnimate, DurationOfAnimation, AnimationProperties);
	// Create Animation for 0.5s
	var tween = TweenMax.to('#animation', 1, {
	    backgroundColor: 'rgb(255, 39, 46)',
	    scale: 7,
	    rotation: 360
	});

	// Create the Scene and trigger when visible with ScrollMagic
	var scene = new ScrollScene({
	    triggerElement: '#scene',
	    offset: 150, 			/* offset the trigger 150px below #scene's top */
	})
	.setTween(tween)
	.addTo(scrollMagicController);

	var tween2 = TweenMax.to('#animation2', 1, {
	    backgroundColor: 'rgb(46, 39, 255)',
	    scale: 7,
	    rotation: 360
	});

	// Add debug indicators fixed on right side
   	scene.addIndicators();

   	// Create the Scene and trigger when visible with ScrollMagic
	var scene = new ScrollScene({
	    triggerElement: '#scene2',
	    offset: 150, 			/* offset the trigger 150px below #scene's top */
	})
	.setTween(tween2)
	.addTo(scrollMagicController);
	
	// Add debug indicators fixed on right side
   	scene2.addIndicators();

}

$(document).ready(main);	