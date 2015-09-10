// Tells Iron router to use layout template as the default layout
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'

});

Router.route('/', {name:'home'});
Router.route('/login', {name:'login'});
Router.route('/register', {name:'register'});
Router.route('/slideshow', {
    layoutTemplate: 'slideshow-layout',
    name: 'slidefade'
});
Router.route('/dashboard', {
    //TODO: Add username in the url so each one is unique
    layoutTemplate: 'dashboard_layout',
    name: 'dashboard'
});

Router.route('/slideshow/:_id', {
    name: 'slideshow',
    data: function () {
        return SlideShows.findOne(this.params._id);
    }
});
Router.route('/createslideshow', {name:'createSlideshow'});
Router.route('/sandbox', {name:'sandbox'});


// Checks for user to be logged in


// Checks for user to be logged in
var requireLogin = function() {
    if (! Meteor.user())
    {
        if (Meteor.loggingIn())
        {
            this.render(this.loadingTemplate);
        }
        else
        {
            // this.render('login');
            Router.go('/');
        }
    }
    else
    {
        this.next();
    }
};

Router.onBeforeAction(requireLogin, {except: ['home','login', 'register']});
