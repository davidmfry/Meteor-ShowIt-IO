Meteor.publish('slideshows', function () {
    return SlideShows.find();
});