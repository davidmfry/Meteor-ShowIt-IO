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
    insert: function() {return true;},
    update: function () {return true}
});