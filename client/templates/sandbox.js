Template.sandbox.helpers({
    imageList: function() {
        var dbRecord = SlideShows.findOne({_id:"2Rz3wG5BimepcewDy"});
        console.log(dbRecord.images.length);
        return SlideShows.findOne({_id:"2Rz3wG5BimepcewDy"})
    }

});

Template.sandbox.events({
    //add your events here
});

Template.sandbox.onCreated(function () {
    //add your statement here
});

Template.sandbox.onRendered(function () {
    //add your statement here
});

Template.sandbox.onDestroyed(function () {
    //add your statement here
});

