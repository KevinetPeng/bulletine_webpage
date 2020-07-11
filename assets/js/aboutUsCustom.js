(function ($) {
  const heightKevin = $("#kevinParagraph")[0].scrollHeight;
  $("#kevinExpand").click(function (e) {
    e.stopPropagation();
    if ($("#kevinParagraph").css("height") !== "98px") {
      $("#kevinParagraph").animate({
        height: 98,
      });
    } else {
      $("#kevinParagraph").animate({
        height: heightKevin,
      });
    }
  });

  const heightJay = $("#jayParagraph")[0].scrollHeight;
  $("#jayExpand").click(function (e) {
    e.stopPropagation();
    if ($("#jayParagraph").css("height") !== "98px") {
      $("#jayParagraph").animate({
        height: 98,
      });
    } else {
      $("#jayParagraph").animate({
        height: heightJay,
      });
    }
  });

  const heightJenn = $("#jennParagraph")[0].scrollHeight;
  $("#jennExpand").click(function (e) {
    e.stopPropagation();
    if ($("#jennParagraph").css("height") !== "98px") {
      $("#jennParagraph").animate({
        height: 98,
      });
    } else {
      $("#jennParagraph").animate({
        height: heightJenn,
      });
    }
  });

  const heightElsie = $("#elsieParagraph")[0].scrollHeight;
  $("#elsieExpand").click(function (e) {
    e.stopPropagation();
    if ($("#elsieParagraph").css("height") !== "98px") {
      $("#elsieParagraph").animate({
        height: 98,
      });
    } else {
      $("#elsieParagraph").animate({
        height: heightElsie,
      });
    }
  });
})(jQuery);
