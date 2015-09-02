Template.slidefade.helpers({
    //add you helpers here
});

Template.slidefade.events({
    //add your events here
});

Template.slidefade.onCreated(function () {
    //add your statement here
});

Template.slidefade.onRendered(function() {
    var currentSlide = 0;
    var slides = [1,2,3,4];
    var length = slides.length;
    var firstLoad = 0;

    console.log(length);

    setInterval(function() {
        if (currentSlide >= length)
        {
            currentSlide = 0;
            //fadeDownNew(slides);

            // This call is in the element Fade.js file
            Meteor.call('fadeOutLastElement', slides, '.slide', slides[currentSlide], 0, 1000 )

        }

        console.log(currentSlide);
        console.log(slides[currentSlide]);
        //fadeUp(slides[currentSlide]);

        // This call is in the element Fade.js file
        Meteor.call('fadeInOut', '.slide', slides[currentSlide], 1, 1000);
        currentSlide++;
    }, 3000);


});

Template.slidefade.onDestroyed(function () {
    //add your statement here
});


// Helper function
function fadeUp(slideNum)
{
    $(".slide" + slideNum).animate({opacity: 1}, 1000);
    //$(".slide" + slideNum).fadeIn(1000);
    console.log("fade up " + slideNum);
    return true
}

function fadeDown(slideNum)
{
    $(".slide" + slideNum).animate({opacity: 0}, 1000);
    //$(".slide" + slideNum).fadeOut(1000);
    console.log("fade down " + slideNum);
    return true
}
function fadeDownNew(array)
{

    for (var index = 0; index < array.length; index++ )
    {
        //
        $(".slide" + index).css('opacity', '0');

    }
    // fades the last photo in the array
    fadeDown(array[array.length - 1]);


}


