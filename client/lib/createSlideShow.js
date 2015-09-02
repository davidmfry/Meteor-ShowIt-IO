
//Meteor.methods({
//    fadeInOut: function(selector, slideNumber, opacity, duration) {
//        $(selector + slideNumber).animate({'opacity': opacity},duration);
//        return true;
//    },
//    fadeOutLastElement: function (selector, slideNumber, opacity, duration) {
//        var arrayLength = slidesArray.length;
//
//        // Iterates over the selectors, it stops one element less than the length of the array
//        // Then sets each css elements' opacity to 0
//        for (var index = 0; index < slidesArray.length; index++)
//        {
//            $(selector + index).css('opacity', '0');
//        }
//
//
//        this.fadeInOut(selector + slidesArray[arrayLength - 1], 0, duration);
//        return true;
//    }
//
//});


// Creates a slide show
function CreateSlideShow(settingsObj, currentSlide)
{
    /*
    * The setting object should have the following properties:
    * */
    this.slideDuration = settingsObj.slideDuration;
    this.transitionDuration = settingsObj.transitionDuration;
    this.slideArray = settingsObj.slideArray;
    this.selector = settingsObj.selector;
    this.currentSlide = settingsObj.currentSlide;

    //Call the Create show function
    this.createShow(this.slideArray, this.selector, this.slideDuration, this.transitionDuration);

    this.createShow = function(slidesArray, selector, currentSlide, slideDuration, transitionDuration)
    {

        var length = this.slideArray.length;

        if (currentSlide >= length)
        {
            currentSlide = 0;
            this.fadeOutLastElement(slidesArray, selector, currentSlide, transitionDuration)
        }
        this.fadeInOut(selector, currentSlide, 1, transitionDuration);
    };

    // Fades a css element in or out using the opacity
    this.fadeInOut = function (selector, slideNumber, opacity, duration)
    {
        $(selector + slideNumber).animate({'opacity': opacity},duration);
        return true;
    };

    // Fades the last css element out using the opacity
    this.fadeOutLastElement = function (slidesArray, selector, slideNumber, duration)
    {
        var arrayLength = slidesArray.length;

        // Iterates over the selectors, it stops one element less than the length of the array
        // Then sets each css elements' opacity to 0
        for (var index = 0; index < slidesArray.length; index++)
        {
            $(selector + index).css('opacity', '0');
        }


        this.fadeInOut(selector + slidesArray[arrayLength - 1], 0, duration);
        return true;
    }



}