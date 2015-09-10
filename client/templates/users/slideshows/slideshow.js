
Session.set('firstLoad', true);

Template.slideshow.helpers({
    images: function () {
        return Images.find({'slideshowId': this.slideshowImagesId});
    },
    title: function () {
        // Had to use a session var becasue it was not rendering the var
        return Session.get('slideshowTitle');
    },
    username: function () {
        return Meteor.user().profile.first_name;
    },
    firstload: function () {
        return Session.get('firstLoad');
    }

});

Template.slideshow.onRendered(function () {
    // The current slideshow record in the mongo db
    var currentSlideshow = SlideShows.findOne({_id:Template.parentData(0)._id});
    Session.set('slideshowTitle', currentSlideshow.title);
    var currentSlide = 0;
    var selector = '.slide';
    console.log(currentSlideshow.seqArray);
    console.log(Session.get('firstLoad'));
    setInterval(function() {

        // For hiding and show the loading spinner
        if (Session.get('firstLoad') === true)
        {
            Session.set('firstLoad', false);
        }

        console.log(Session.get('firstLoad'));

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