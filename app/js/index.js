$(window).scroll(function(){
    if ($(window).scrollTop() >= 3200) {
       $('.form').addClass('fixed-header');
    }
    else {
       $('.form').removeClass('fixed-header');
    }
});

/* scrollTop() >= 240
   Should be equal the the height of the header
 */