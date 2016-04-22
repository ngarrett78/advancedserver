/**
 * Created by nate on 4/11/2016.
 */

// Modals
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})


// Jumbotron responsiveness
var jumboHeight = $('.home_jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}


// Slideshow - rotating
$(document).ready(function() {
    $('#slideshow').cycle({
        fx: 'fade',
        pager: '#smallnav',
        pause:   1,
        speed: 1800,
        timeout:  4500
    });
});