window.fbAsyncInit = function() {
    FB.init({
        appId   : '351070565012663', // pure's app id
        xfbml      : true,
        version    : 'v2.3'
    });
    $(document).trigger('fbInit');
        var FBlogin_master = function(){
        FB.login(function(response) {
            if (response.status === 'connected') {
              $(document).trigger('fbLogin');
          }
         });
       }
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/th_TH/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
