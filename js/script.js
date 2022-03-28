$(document).ready(function(){

    $(".slider-main > .slider-list").slick({})

    $(".left-btn").click(function(){
        $(".slider-main > .slider-list").slick("slickPrev")
      })
      $(".right-btn").click(function(){
        $(".slider-main > .slider-list").slick("slickNext")
      })

    $(".dot").click(function(){
        let num = $(this).index()
        $(".slider-wrap > .slider").slick("slickGoTo",num)
      })

      $(".play").click(function(){
        $(".play").removeClass("active")
        $(".pause").addClass("active")
        $(".slider-main > .slider-list").slick("slickPlay")
      })
      $(".pause").click(function(){
        $(".play").addClass("active")
        $(".pause").removeClass("active")
        $(".slider-main > .slider-list").slick("slickPause")
      })

      $('.slider-main > .slider-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".prograss").removeClass("active")
  });
    
    $('.slider-main > .slider-list').on('afterChange', function(event, slick, currentSlide){
        $(".prograss").addClass("active")
  });



})