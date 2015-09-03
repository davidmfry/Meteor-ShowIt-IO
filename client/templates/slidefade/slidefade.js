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
    var slideDuration = 3000;
    var fadeDuration = 1000;

    var selector = '.slide';

    setInterval(function() {
        if (currentSlide >= length)
        {
            currentSlide = 0;
            // This call is in the element Fade.js file
            fadeOutLastElement(slides, selector, slides[currentSlide], 0, fadeDuration);
        }
        // This call is in the element Fade.js file
        fadeInOut(selector, slides[currentSlide], 1, fadeDuration);
        currentSlide++;
    }, slideDuration);


});

Template.slidefade.onDestroyed(function () {
    //add your statement here
});



