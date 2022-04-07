$(document).ready(function(){

  $('.slider-main > .slider-wrap').slick({
    dots: true,
    });

  $('.section02 > .slider-section').slick({
    dots: true,
    });

  $('.best-section03 > .best-section > .best-slider > .slide').slick({
      slidesToShow: 3 ,
      slidesToScroll: 3 ,

      });

    //   $(".txt00").click(function(){
    
    //     var thisIndex = $(this).index();
    
    //     $(".slide").eq(thisIndex).addClass("active");
    //     $(".slide").eq(thisIndex).siblings().removeClass("active");
    //     $(".slide").slick('setPosition');
    
    //   });
    //   $(".best-slide01").slick()
    //   $(".best-slide02").slick()
    //   $(".best-slide03").slick()
    // });
      


  // $('.kitchen-slider > .kit-slider').slick({
  //     dots: true,
  //     });
  

  
  //   $(".slider-main > .slider-wrap").slick({})

  //   $(".left-btn").click(function(){
  //       $(".slider-main > .slider-wrap").slick("slickPrev")
  //     })
  //     $(".right-btn").click(function(){
  //       $(".slider-main > .slider-wrap").slick("slickNext")
  //     })

  //   $(".dot").click(function(){
  //       let num = $(this).index()
  //       $(".slider-wrap > .slider").slick("slickGoTo",num)
  //     })

  //     $(".play").click(function(){
  //       $(".play").removeClass("active")
  //       $(".pause").addClass("active")
  //       $(".slider-main > .slider-wrap").slick("slickPlay")
  //     })
  //     $(".pause").click(function(){
  //       $(".play").addClass("active")
  //       $(".pause").removeClass("active")
  //       $(".slider-main > .slider-wrap").slick("slickPause")
  //     })

  //     $('.slider-main > .slider-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  //       $(".prograss").removeClass("active")
  // });
    
  //   $('.slider-main > .slider-list').on('afterChange', function(event, slick, currentSlide){
  //       $(".prograss").addClass("active")
  // });



})