$(document).ready(function() {
    
    $('.js--generations').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '25%';
    });
});