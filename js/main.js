$(document).ready(function(){
    $('.fa-bars').click(function(){
           $('header ul').addClass('show');
    });
    $('.fa-times').click(function(){
        $('header ul').removeClass('show');
 });
 $("#testimonial-slider").owlCarousel({
       items:3,
       itemsDesktop:[1199,2],
       itemsDesktopSmall:[979,2],
       itemsTablet:[768,2],
       itemsMobile:[600,1],
       pagination: false,
       navigation:true,
       navigationText:["",""],
       slideSpeed:1000,
       autoPlay:true
   });

   $('.counter-value').each(function(){
       $(this).prop('Counter',0).animate({
           Counter: $(this).text()
       },{
           duration: 3500,
           easing: 'swing',
           step: function (now){
               $(this).text(Math.ceil(now));
           }
       });
   });

   /*************scroll*************/
   var scrollButton = $('.scroll-top');
   $(window).scroll(function(){
      
        if ($(this).scrollTop() >= 700)
        {
          scrollButton.fadeIn();
        } 
        else {
          scrollButton.fadeOut();
        }

       
   });
   scrollButton.click(function(){
    $("html,body").animate({scrollTop:0},600);
});
/****** change backrounder-color***********/

       $(window).scroll(function(){
        if ($(this).scrollTop() >= 100)
      {
            $('header').addClass('add');
        } 
       else {
         $('header').removeClass('add');
        }


});

});


