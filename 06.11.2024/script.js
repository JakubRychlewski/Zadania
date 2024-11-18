$(document).ready(function() {
  var slides = $('.slide');
  var slideIndex = 0;
  
  $(slides).hide();
  $(slides[slideIndex]).show();

  function updateImage() {
    $(slides[slideIndex]).show(); 
  }
  function nextSlide(){
     slideIndex = (slideIndex + 1) % slides.length;
     updateImage();
     console.log(slideIndex);
    updateImage();
    $('.slider').css('transform', `translateX(-${slideIndex * 600}px)`);
  }
  function prevSlide(){
     slideIndex = (slideIndex - 1 + slides.length) % slides.length;
     updateImage();
     console.log(slideIndex);
    updateImage();
    $('.slider').css('transform', `translateX(-${slideIndex * 600}px)`);
  }

   let slideInterval = setInterval(nextSlide, 10000);

  $(".next").on("click", function() {
    nextSlide();
    
  });

  $(".prev").on("click", function() {
    prevSlide();
    console.log(slideIndex);
    updateImage();
    $('.slider').css('transform', `translateX(-${slideIndex * 600}px)`);
  });

});