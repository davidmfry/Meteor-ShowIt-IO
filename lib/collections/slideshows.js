SlideShows = new Mongo.Collection("slideshows");

Meteor.methods({
    slideshowInsert: function(slideshowAttributes, fileList, slideshowImagesId) {
        check(Meteor.userId(), String);
        check(slideshowAttributes, {
            title: String,
            slide_duration: String,
            fade_transition: String
        });

        var user = Meteor.user();
        var slideshow = _.extend(slideshowAttributes, {
            userId: user._id,
            username: user.profile.first_name,
            createdAt: new Date(),
            fileList:fileList,
            fileListCount: fileList.length,
            slideshowImagesId: slideshowImagesId
        });

        var slideShowId = SlideShows.insert(slideshow);
        var username = user.profile.first_name;
        return {
            username:username,
            _id:slideShowId
        };
    }
});