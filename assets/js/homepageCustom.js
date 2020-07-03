(function ($) {
  const hStart = $("#moreInfoHowItStarted")[0].scrollHeight;

  $("#howItStarted").click(function (e) {
    e.stopPropagation();
    if ($("#moreInfoHowItStarted").css("height") !== "100px") {
      $("#moreInfoHowItStarted").animate({
        height: 100,
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
    if ($("#moreInfoHowWeHelp").css("height") !== "100px") {
      $("#moreInfoHowWeHelp").animate({
        height: 100,
      });
    } else {
      $("#moreInfoHowWeHelp").animate({
        height: hHelp,
      });
    }
  });
})(jQuery);
