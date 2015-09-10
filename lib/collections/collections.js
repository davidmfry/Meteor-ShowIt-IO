var baseUrl = "";
var user = "";
if (Meteor.isServer)
{
    baseUrl = process.env.PWD;

}

Images = new FS.Collection('images', {
    stores: [new FS.Store.FileSystem('images', {path: baseUrl + '/tempUploads'})]
});

Images.allow({
    insert: function(userId) {return userId != null;},
    update: function (userId) {return userId != null;}
});