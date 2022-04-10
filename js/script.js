$(document).ready(function(){

  $('.slider-main > .slider-wrap').slick({
    dots: true,
    });

  $('.section02 > .slider-section').slick({
    dots: true,
    });

    $(".section02 li").click(function(){

      let indexNum11 = $(this).index();
  
      $(".section02 > .slider-section").slick("slickGoTo",indexNum11);
  
      });
    

  $('.best-section03 > .best-section > .best-slider > .slide').slick({
      slidesToShow: 3 ,
      slidesToScroll: 3 ,

      });

    $("li").click(function(){

    let indexNum12 = $(this).index();
    
    $(".best-section03 > .best-section > .best-slider > .slide").slick("slickGoTo",indexNum12);
    
    });


   $('.kitchen-wrap > .kitchen-slider').slick({

    });

    $(".kitchen-wrap li").click(function(){

    let indexNum01 = $(this).index();

    $(".kitchen-wrap > .kitchen-slider").slick("slickGoTo",indexNum01);

    });


  $('.live-wrap > .live-slider').slick({

    });

  $(".live-wrap li").click(function(){

    let indexNum02 = $(this).index();

    $(".live-wrap > .live-slider").slick("slickGoTo",indexNum02);

    });


  $('.air-wrap > .air-slider').slick({
    
    });
    
    $(".air").click(function(){
    
    let indexNum03 = $(this).index();
    
    $(".air-wrap > .air-slider").slick("slickGoTo",indexNum03);
    
    });


    // $('.sns-section07 > .SnsTitle-slider > .slide-SnsTitle').slick({
    
    // });

})

  
