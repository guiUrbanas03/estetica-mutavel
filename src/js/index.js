$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    responsiveClass: true,
  });

  $('.nav-button').click(() => {
    if ($('.mobile-nav').css('display') === 'none') {
      $('.mobile-nav').css('display', 'block');
    } else {
      $('.mobile-nav').css('display', 'none');
    }
  });

  $('.mobile-nav > ul > li > a').click(() => {
    $('.mobile-nav').css('display', 'none');
  });
});
