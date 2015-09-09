Template.slideshow.helpers({
    images: function () {
        return Images.find({'slideshowId': 1});
    }
});