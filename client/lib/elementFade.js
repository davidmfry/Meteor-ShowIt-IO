Meteor.methods({
    fadeInOut: function(selector, slideNumber, opacity, duration) {
        $(selector + slideNumber).animate({'opacity': opacity},duration);
        return true;
    },
    fadeOutLastElement: function (slidesArray, selector, slideNumber, opacity, duration) {
        var arrayLength = slidesArray.length;

        // Iterates over the selectors, it stops one element less than the length of the array
        // Then sets each css elements' opacity to 0
        for (var index = 0; index < slidesArray.length; index++)
        {
            $(selector + index).css('opacity', '0');
        }
        $(selector + slidesArray[arrayLength - 1]).animate({'opacity': opacity},duration);
        return true;
    }

});