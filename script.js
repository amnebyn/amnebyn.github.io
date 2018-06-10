$(document).ready(function(){
  var jsOff = document.getElementById('jsoff');
  jsOff.style.display = 'none'; //or
  var jsOn = document.getElementById('map');
  jsOn.style.display = 'unset'; //or

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
    }, 2000);
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
