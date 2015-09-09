Meteor.publish('slideshows', function () {
    return SlideShows.find();
});
Meteor.publish('images', function () {
    return Images.find();
});

