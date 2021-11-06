$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 170){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.navbar-light .navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass("active");
        $('.navbar-light .navbar-toggler i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Designer", "Developer", "Photographer","Rider"],
        typeSpeed: 200,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Designer", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});