$(function () {

    $("html").niceScroll();

    $(window).scroll(function () {

        if($(this).scrollTop() > 500) {

            $(".scroll i").fadeIn(600);

        } else{

            $(".scroll i").fadeOut(600);

        }

    });
    
    $(".scroll i").click(function () {
       
        $("html, body").animate({
            scrollTop:0
        }, 600)
        
    });
    
    $(".navbar-default .navbar-nav > li > a").click(function (e) {
        
        e.preventDefault();
       
        $("body, html").animate({
            scrollTop: $($(this).data("scroll")).offset().top
        }, 600)
        
    });
    
    $(".hero .over-color a").click(function (e) {
        
        e.preventDefault();
        
        $("body, html").animate({
            
            scrollTop: $(".about").offset().top
            
        }, 600)
        
    });

    $(".over-loading .spinner").delay(2000).fadeOut(1000, function () {
            
        $("body").css({overflow: "auto"});
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
            
        });
        
    });

});