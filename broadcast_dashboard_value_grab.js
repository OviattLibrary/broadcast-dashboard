/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for Settings value selection to pass the correct message title to SQL.
 */
 jQuery(function($) {
 	var selector = document.getElementById("edit-broadcast-dashboard-setting-custom-message-select");

 	/*selector.addEventListener("change", function() {
	    //var selected_option = $("#edit-broadcast-dashboard-setting-custom-message-select").val();
	    var selected_option = selector.val();
	    return selected_option;
	});*/

	function getCustomMessage(){
		return selector.val();
	}
 }