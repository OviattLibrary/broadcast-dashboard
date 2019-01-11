/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file serves as an example for how to read from the RSS feed and output to a specified div.
 */

// Start of customizable settings
var feedURL = "https://library7.csun.edu/broadcast_dashboard_feed"; // Your feed URL
var outDIV = "#bd-message"; // Your output DIV (requires # at start)
// End of customizable settings

jQuery(document).ready(function($) {
  $.get(feedURL, function (data) {
    // Check if there's a feed to get
    if ($(data).find(".feed-error")[0]) {
      //var error = $(this).find("feed-error").text();
      //console.log(error);
      //console.log(0);
      return 0;
    } else {
      $(data).find("item").each(function () {
        var el = $(this);
        var msg = el.find("description").html();
        $(outDIV).html(msg);
      });
    }
  });
});