jQuery(document).ready(function($) {
  $.get('https://library7.csun.edu/broadcast_dashboard_feed', function (data) {
  	// Check if there's a feed to get
  	if ($(data).find(".feed-error")[0]) {
  		//var error = $(this).find("feed-error").text();
  		//console.log(error);
  		//console.log(0);
  		return 0;
  	} else {
	  	$(data).find("item").each(function () {
	    	var el = $(this);

	      console.log("------------------------");
	      console.log("description: " + el.find("description").html());

	      var msg = el.find("description").html();
	      $("#bd-message").html(msg);
	    });
	  }
  });
});