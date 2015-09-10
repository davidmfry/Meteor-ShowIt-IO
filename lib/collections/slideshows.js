SlideShows = new Mongo.Collection("slideshows");

Meteor.methods({
    slideshowInsert: function(slideshowAttributes, fileList, slideshowImagesId) {
        check(Meteor.userId(), String);
        check(slideshowAttributes, {
            title: String,
            slide_duration: String,
            fade_transition: String,
            test:Array,
        });

        var user = Meteor.user();
        var slideshow = _.extend(slideshowAttributes, {
            userId: user._id,
            username: user.profile.first_name,
            createdAt: new Date(),
            fileList:fileList,
            fileListCount: fileList.length,
            slideshowImagesId: slideshowImagesId,
            seqArray:createSeqArray(fileList.length)

        });

        var slideShowId = SlideShows.insert(slideshow);
        var username = user.profile.first_name;
        return {
            username:username,
            _id:slideShowId
        };
    }
});

function createSeqArray(length)
{
    var newSeqArray = [];
    for(var i = 1; i <= length; i++)
    {
        newSeqArray.push(i);
    }
    return newSeqArray;
}