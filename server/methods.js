var fs = Meteor.npmRequire('fs');
var mv = Meteor.npmRequire('mv');

Meteor.methods({
    'moveFilesToPublic': function(username, title) {
        var noSpaceTitle = title.replace('/ /g', "_");
        // This is created in the collections.js file with the FS collections
        var sourcePath = process.env.PWD + '/tempUploads';
        var destPath = process.env.PWD + '/public/images/' + username + "/" + noSpaceTitle;

        // Move the upload files to the public folder with username and title for the folder
        mv(sourcePath, destPath, {mkdirp: true}, function(err) {
           if(err)
           {
               console.log(err);
           }
        });
    }
});
