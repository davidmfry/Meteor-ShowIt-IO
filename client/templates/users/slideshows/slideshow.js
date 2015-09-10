
Template.slideshow.helpers({
    images: function () {
        return Images.find({'slideshowId': this.slideshowImagesId});
    },
    slideshowTitle: function () {
        return this.title;
    },
    username: function () {
        return Meteor.user().profile.first_name;
    }
});

Template.slideshow.onRendered(function () {
    // The current slideshow record in the mongo db
    var currentSlideshow = SlideShows.findOne({_id:Template.parentData(0)._id});
    var currentSlide = 0;
    var selector = '.slide';
    console.log(currentSlideshow.seqArray);
    setInterval(function() {
        if (currentSlide >= currentSlideshow.seqArray.length)
        {
            currentSlide = 0;
            // This call is in the element Fade.js file
            fadeOutLastElement(currentSlideshow.seqArray, selector, currentSlideshow.seqArray[currentSlide], 0, currentSlideshow.fade_transition);
        }
        // This call is in the element Fade.js file
        fadeInOut(selector, currentSlideshow.seqArray[currentSlide], 1, currentSlideshow.fade_transition);
        currentSlide++;
    }, currentSlideshow.slide_duration);
});