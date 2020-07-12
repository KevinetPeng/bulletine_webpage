(function ($) {
  const heightKevin = $("#kevinParagraph")[0].scrollHeight;
  $("#kevinExpand").click(function (e) {
    e.stopPropagation();
    if ($("#kevinParagraph").css("height") !== "97px") {
      $("#kevinParagraph").animate({
        height: 97,
      });
    } else {
      $("#kevinParagraph").animate({
        height: heightKevin,
      });
      $("#elsieParagraph").animate({
        height: 97,
      });
      $("#jayParagraph").animate({
        height: 97,
      });
      $("#jennParagraph").animate({
        height: 97,
      });
    }
  });

  const heightJay = $("#jayParagraph")[0].scrollHeight;
  $("#jayExpand").click(function (e) {
    e.stopPropagation();
    if ($("#jayParagraph").css("height") !== "97px") {
      $("#jayParagraph").animate({
        height: 97,
      });
    } else {
      $("#kevinParagraph").animate({
        height: 97,
      });
      $("#elsieParagraph").animate({
        height: 97,
      });
      $("#jayParagraph").animate({
        height: heightJay,
      });
      $("#jennParagraph").animate({
        height: 97,
      });
    }
  });

  const heightJenn = $("#jennParagraph")[0].scrollHeight;
  $("#jennExpand").click(function (e) {
    e.stopPropagation();
    if ($("#jennParagraph").css("height") !== "97px") {
      $("#jennParagraph").animate({
        height: 97,
      });
    } else {
      $("#kevinParagraph").animate({
        height: 97,
      });
      $("#elsieParagraph").animate({
        height: 97,
      });
      $("#jayParagraph").animate({
        height: 97,
      });
      $("#jennParagraph").animate({
        height: heightJenn,
      });
    }
  });

  const heightElsie = $("#elsieParagraph")[0].scrollHeight;
  $("#elsieExpand").click(function (e) {
    e.stopPropagation();
    if ($("#elsieParagraph").css("height") !== "97px") {
      $("#elsieParagraph").animate({
        height: 98,
      });
    } else {
      $("#kevinParagraph").animate({
        height: 98,
      });
      $("#elsieParagraph").animate({
        height: heightElsie,
      });
      $("#jayParagraph").animate({
        height: 98,
      });
      $("#jennParagraph").animate({
        height: 98,
      });
    }
  });
})(jQuery);
