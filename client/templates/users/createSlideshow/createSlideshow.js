var fileList = [];
Template.createSlideshow.helpers({
    //add you helpers here
});

Template.createSlideshow.events({
    'submit .form-horizontal': function (e) {
    //TODO: Make a better validation for the create slideshow
    //TODO: ADD a Session var or something to know how many slide shows the user has made so it can me put with each image

        e.preventDefault();
        var slideshow = {
            title: e.target.title.value,
            slide_duration: convertToSeconds(e.target.slide_duration.value),
            fade_transition: convertToSeconds(e.target.fade_transition.value),
            test:fileList
        };

        Meteor.call('slideshowInsert', slideshow, fileList, Session.get('slideshowNumber'), function (error, result) {
            if(error)
            {
                FlashMessages.sendError(error.reason);
                return false;
            }
            Meteor.users.update(Meteor.userId(), {$set:{"profile.slideShowCount": Session.get("slideshowNumber")}});
            Meteor.call('moveFilesToPublic', Meteor.user().profile.first_name, slideshow.title);
            Router.go('slideshow', {_id: result._id});

        });
    },
    'dropped #dropzone': function(e) {
        e.preventDefault();
        FS.Utility.eachFile(event, function(file) {
            var theFile = new FS.File(file);
            theFile.creatorId = Meteor.userId();
            theFile.username = Meteor.user().profile.first_name;
            theFile.slideshowId = Session.get('slideshowNumber');
            Images.insert(theFile, function (err, fileObj) {
                if(err)
               {
                   console.log(err);
               }
            });

            fileList.push(theFile.name())
        });

        console.log(fileList);
    }
});

Template.createSlideshow.onRendered(function () {
    Session.set('slideshowNumber', Meteor.user().profile.slideShowCount + 1);
    console.log(Session.get('slideshowNumber'));
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
