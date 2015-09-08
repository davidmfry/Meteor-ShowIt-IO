Template.navbar.events({
    'click .logout-btn': function(event) {
        Meteor.logout(function(err) {
            if(err)
            {
                FlashMessages.sendError(err.reason);
            }
            else
            {
                console.log("You are logging out");
                FlashMessages.sendSuccess("You are now logged out");
                Router.go('/');
            }
        });
    }
});