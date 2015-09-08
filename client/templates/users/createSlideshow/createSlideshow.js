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
            Router.go('slideshow', {_id: result._id});
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
