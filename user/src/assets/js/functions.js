// Mobile Menu
$('.mob-menu-trig-btn').click(function(){
    var mob_menu_offest = $('.mob-menu').offset().top;
    if(mob_menu_offest < 0){
        // $('.fvp, .svp, .main-footer,.checkout-main-container').animate({'margin-left':'50vw' },200);
        $('.mob-menu').animate({'top':'60px' },200);
    }else{
        // $('.fvp, .svp, .main-footer,.checkout-main-container').animate({'margin-left':'0vw' },200);
        $('.mob-menu').animate({'top':'-300px' },200);
    }
});

// Show header on body scroll
 $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.location-input-scrolltop-helper').each(function() {
        var topDistance = $(this).offset().top;
        if ( (topDistance+100) < scrollTop ) {
            $('.scroll-header').css({'top':'0'});
            $('.mob-main-header').css({'background-color':'rgba(0,0,0,1)'});
        }else{
            $('.scroll-header').css({'top':'-100px'});
            $('.mob-main-header').css({'background-color':'rgba(0,0,0,.5)'});
        }
    });
});

$('#accept-btn').click(function() {
   $('.otp-span').show('slow');
});