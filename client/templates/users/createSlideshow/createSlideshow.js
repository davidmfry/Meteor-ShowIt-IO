var fileList = [];
Template.createSlideshow.helpers({
    //add you helpers here
});

Template.createSlideshow.events({
    'submit .form-horizontal': function (e) {
    //TODO: Make a better validation for the create slideshow
        e.preventDefault();
        var slideshow = {
            title: e.target.title.value,
            slide_duration: convertToSeconds(e.target.slide_duration.value),
            fade_transition: convertToSeconds(e.target.fade_transition.value)
        };

        Meteor.call('slideshowInsert', slideshow, function (error, result) {
            if(error)
            {
                FlashMessages.sendError(error.reason);
                return false;
            }
            Meteor.call('test', Meteor.user().profile.first_name, slideshow.title);
            Router.go('slideshow', {_id: result._id});

        });
    },
    'dropped #dropzone': function(e) {
        e.preventDefault();
        FS.Utility.eachFile(event, function(file) {
            var theFile = new FS.File(file);
            theFile.creatorId = Meteor.userId();
            theFile.username = Meteor.user().profile.first_name;
            Images.insert(theFile, function (err, fileObj) {
               if(err)
               {
                   console.log(err);
               }
            });
        });
    }
});


// Helpers
function convertToSeconds(value)
{
    if (!isNaN(value))
    {
        var toInt = parseFloat(value);
        var seconds = toInt * 1000;
        return String(seconds);
    }


}
