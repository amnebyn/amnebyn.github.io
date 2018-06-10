$(document).ready(function(){
  // handle links with @href started with '#' only
  $(document).on('click', 'a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $id.offset().top;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos});
  });


    var i = 1;
    setInterval(function (){
      $('.bg').css('background-image', 'url(bakgrund' + i + '.jpg)');
      i++;
      if (i > 2) {
        i = 0;
      }
    }, 5000);
    var visa = document.getElementsByTagName('*');
for(var i = 0; i< visa.length; i++){
  visa[i].style.visibility = "visible";
  $('.jsoff').hide();
}
var slideIndex = 1;
showSlides(slideIndex);

$("#prevButton").click(function() {
  plusSlides(-1); 
});
$("#nextButton").click(function() {
  plusSlides(1);
});
$("#dot1").click(function() {
  currentSlide(1);
});
$("#dot2").click(function() {
  currentSlide(2);
});
$("#dot3").click(function() {
  currentSlide(3);
});
function plusSlides(i) {
  showSlides(slideIndex += i);
}

function currentSlide(i) {
  showSlides(slideIndex = i);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var autoRunning = false;
var auto = null;
$("#auto").click(function(){
  if (!autoRunning) {
    autoRunning = true;
    auto = setInterval(function() { plusSlides(1);}, 1000);
    console.log("autorun");
  } else {
    console.log("clearauto")

    autoRunning = false;
    clearInterval(auto);
  }
})
});

$('a').on('click', function(){
    $('a').removeClass('active');
    $(this).addClass('active');
});

function topnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var clickbtn = document.getElementById("clickbtn");
clickbtn.onclick = function(){
  topnav();
}
