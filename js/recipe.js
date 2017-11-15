$(document).ready(function(){

// Black Underline for Navigation

$(".slide-section").on("mouseover", function(){
  $(this).removeClass("border");
  $(this).addClass("navhover-black");
});
$(".slide-section").on("mouseout", function(){
  $(this).removeClass("navhover-black");
  $(this).addClass("border");
});


// Button Functionality

$(".button-1").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-2");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-2");

  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".button-2").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-3");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-3");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".button-3").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-4");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-4");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".button-4").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-5");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-5");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".button-i").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-1");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-1");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});


// Next Step Button Section

// $(".step-1-button").on("click", function(){
//
//   var currentImg = $(".active");
//   var nextImg = $(".img-2");
//   currentImg.removeClass("active").css("z-index", -10);
//   nextImg.addClass("active").css("z-index", 10);
//
// });

$(".step-1-button").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-2");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-2");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".step-2-button").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-3");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-3");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".step-3-button").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-4");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-4");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});

$(".step-4-button").on("click", function(){

  var currentImg = $(".active");
  var nextImg = $(".img-5");
  var currentStep = $(".steps-active");
  var nextStep = $(".step-5");
  currentImg.removeClass("active").css("z-index", -10);
  nextImg.addClass("active").css("z-index", 10);
  currentStep.removeClass("steps-active").css("z-index", -10);
  nextStep.addClass("steps-active").css("z-index", 10);

});




  });
