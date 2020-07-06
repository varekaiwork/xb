$(document).ready(function () {
  $('.js-anchor-link').click(function (e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      var scrollTo = target.offset().top;
      $('body, html').animate({ scrollTop: scrollTo + 'px' }, 800);
    }
  });

  $('.header__btn').click(function () {
    $('.header__btn').toggleClass('active');
    $('.menu__list').toggleClass('open');
  });
});
