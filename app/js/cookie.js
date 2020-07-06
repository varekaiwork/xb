$(document).ready(function () {
  var cookieshowhide = $.cookie('cookie-policy');
  if (cookieshowhide == 1) {
    $('#cookieConsent').hide();
  }

  $('.cookieConsentOK').click(function () {
    $.cookie('cookie-policy', 1, { expires: 1000 });
    $('#cookieConsent').hide();
  });
});
