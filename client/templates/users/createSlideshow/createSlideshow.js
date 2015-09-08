Template.createSlideshow.helpers({
    //add you helpers here
});

Template.createSlideshow.events({
    'submit #createSlideshow-btn': function (e, tpl) {
        e.preventDefault()

        var slideshow = {
            title: e.target.title.value,
            slide_duration: e.target.slide_duration.value,
            fade_transition: e.target.fade_transition.value
        };

        Meteor.call('slideshowInsert', slideshow, function (error, result) {
            if(error)
            {
                FlashMessages.sendError(error.reason);
                return false;
            }
            Router.go('/dashboard');
        });
    }
});
