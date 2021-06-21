$(document).ready(function () {
  let lastScroll = 0;

  $(window).scroll((e) => {
    let scrollTop = $(this).scrollTop();

    if (scrollTop > lastScroll) {
      $('.desktop-header').css('opacity', 0);
    } else {
      $('.desktop-header').css('opacity', 1);
    }
    lastScroll = scrollTop;
  });

  $('.desktop-header').mouseover((e) => {
    $('.desktop-header').css('opacity', 1);
  });

  $('.desktop-header').mouseleave((e) => {
    $('.desktop-header').css('opacity', 0);
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

  $('.phots-container').click((e) => {
    const width = $('.phots-container').width();
    if (e.offsetX < width / 2) {
      $('.left-phot').css('display', 'none');
      $('.right-phot').css('display', 'block');
    } else {
      $('.right-phot').css('display', 'none');
      $('.left-phot').css('display', 'block');
    }
    $('.desktop-header').css('opacity', 0);
  });

  $('.phots-container').mousemove((e) => {
    const width = $('.phots-container').width();
    if (e.offsetX < width / 2) {
      $('.left-title').css('opacity', 1);
      $('.right-title').css('opacity', 0);
    } else {
      $('.right-title').css('opacity', 1);
      $('.left-title').css('opacity', 0);
    }
  });

  $('.left-phot').hover((e) => {
    $('.left-phot').css('display', 'none');
  });

  $('.right-phot').hover((e) => {
    $('.right-phot').css('display', 'none');
  });
});
