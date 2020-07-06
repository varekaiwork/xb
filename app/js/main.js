$(document).ready(function () {
  $('.js-anchor-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
  });
  $('.users__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $('.header__btn').click(function () {
    $('.header__btn').toggleClass('active');
    $('.menu__list').toggleClass('open');
  });
});
