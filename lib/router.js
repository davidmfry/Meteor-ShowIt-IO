// Tells Iron router to use layout template as the default layout
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'

});

Router.route('/', {name:'home'});
Router.route('/slideshow', {name: 'slidefade'});
Router.route('/userslideshows', {name:'usersSlideShows'});
Router.route('/createslideshow', {name:'createSlideshow'});

