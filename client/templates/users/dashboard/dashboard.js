Template.dashboard.helpers({
    slideshows: function() {
        return SlideShows.find({userId:Meteor.userId()});
    },
    username: function () {
        return Meteor.user().profile.first_name;
    }

});
