$(document).ready(function(){



// Anchor Navigation

// Get the nav height
var navHeight = $("nav").outerHeight();

$(".slide-section").click(function(event){

  var linkHref = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(linkHref).offset().top - navHeight
  }, 2000);

  event.preventDefault();
});



// Sticky Navigation

var targetPosition = $("#intro").offset().top;

$(window).resize(function(){
  targetPosition = $("#intro").offset().top;
})

$(window).scroll(function(){

  var scrollPosition = $(this).scrollTop();

  if (scrollPosition > targetPosition) {
    $(".sticky-nav-wrapper").addClass("fixed-nav", 500);
    $("a").css("color", "black");
    $(".slide-section").on("mouseover", function(){
      $(this).addClass("navhover-black");
    });
    $(".slide-section").on("mouseout", function(){
      $(this).removeClass("navhover-black");
    });
  } else {
    $(".sticky-nav-wrapper").removeClass("fixed-nav", 500);
    $("a").css("color", "white");
    $(".slide-section").on("mouseover", function(){
      $(this).removeClass("navhover-black");
      $(this).addClass("navhover");
    });
    $(".slide-section").on("mouseout", function(){
      $(this).removeClass("navhover-black");
      $(this).removeClass("navhover");
    });
  }

// Make Logo and Nav Hover Lines Disappear (responsive)

  if ((scrollPosition > targetPosition) && ($(window).width() > 700)) {
    $(".site-name").css("display", "block");
  } else {
    $(".site-name").css("display", "none");
    $(".slide-section").on("mouseover", function(){
      $(this).removeClass("navhover-black");
      });
  }

// if $(window).width() < 700) {
//   $(".site-name").addClass("display-none");
//   $("nav a").addClass("display-none");
//   $("nav li").addClass("display-none");
//   $("nav").addClass("display-none");
// }

});

// White Hover Navigation Upon Page Load

$(".slide-section").on("mouseover", function(){
  $(this).addClass("navhover");
});

$(".slide-section").on("mouseout", function(){
  $(this).removeClass("navhover");
});

});
