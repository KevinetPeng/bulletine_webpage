(function ($) {
  const hStart = $("#moreInfoHowItStarted")[0].scrollHeight;

  $("#howItStarted").click(function (e) {
    e.stopPropagation();
    if ($("#moreInfoHowItStarted").css("height") !== "98px") {
      $("#moreInfoHowItStarted").animate({
        height: 98,
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
    if ($("#moreInfoHowWeHelp").css("height") !== "98px") {
      $("#moreInfoHowWeHelp").animate({
        height: 98,
      });
    } else {
      $("#moreInfoHowWeHelp").animate({
        height: hHelp,
      });
    }
  });
})(jQuery);
