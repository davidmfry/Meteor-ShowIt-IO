Template.slidefade.helpers({
    //add you helpers here
});

Template.slidefade.events({
    //add your events here
});

Template.slidefade.onCreated(function () {
    //add your statement here
});

Template.slidefade.onRendered(function() {
    var currentSlide = 0;
    var slides = [1,2,3,4];
    var length = slides.length;

    var slideConfig = {
        slideDuration: 3000,
        transitionDuration: 1000,
        slideArray: [1,2,3,4],
        selector: '.slide'
    };

    setInterval(function() {
        if (currentSlide >= length)
        {
            currentSlide = 0;
            // This call is in the element Fade.js file
            fadeOutLastElement(slides, '.slide', slides[currentSlide], 0, 1000);
        }
        // This call is in the element Fade.js file
        fadeInOut('.slide', slides[currentSlide], 1, 1000);
        currentSlide++;
    }, 3000);


});

Template.slidefade.onDestroyed(function () {
    //add your statement here
});



