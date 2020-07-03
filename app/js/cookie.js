$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 100);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 