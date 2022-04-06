$(document).ready(function(){

  $('.slider-main > .slider-wrap').slick({
    dots: true,
    });

  $('.section02 > .slider-section').slick({
    dots: true,
    });

  $('.section03 > .best-item-wrap').slick({
      dots: true,
      });

  // $('.section04 > .kitchen-img').slick({
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