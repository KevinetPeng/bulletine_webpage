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
