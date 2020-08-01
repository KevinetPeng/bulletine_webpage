(function ($) {
  const hStart = $("#moreInfoHowItStarted")[0].scrollHeight;

  $("#howItStarted").click(function (e) {
    e.stopPropagation();
    if ($("#moreInfoHowItStarted").css("height") !== "97px") {
      $("#moreInfoHowItStarted").animate({
        height: 97,
      });
    } else {
      $("#moreInfoHowItStarted").animate({
        height: hStart,
      });
    }
  });

  const hHelp = $("#moreInfoHowWeHelp")[0].scrollHeight;

  $("#howWeHelp").click(function (e) {
    e.stopPropagation();
    if ($("#moreInfoHowWeHelp").css("height") !== "97px") {
      $("#moreInfoHowWeHelp").animate({
        height: 97,
      });
    } else {
      $("#moreInfoHowWeHelp").animate({
        height: hHelp,
      });
    }
  });
})(jQuery);

var slideIndex = [1, 1, 1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2", "mySlides3"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
