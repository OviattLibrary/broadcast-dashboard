/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before added to the database from the settings page.
 */

var custom_clr_class;
var custom_clr_hex;
var custom_msg;
var date;

jQuery(function($) {
	$('#edit-broadcast-dashboard-settings-add-preview').click(function() {
		custom_msg = $("#edit-broadcast-dashboard-settings-add-msg-custom-message").val();
		date = new Date();

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    console.log("custom_msg: " + custom_msg);
    console.log("custom_clr_class: " + custom_clr_class);
    console.log("custom_clr_hex: " + custom_clr_hex);

    if (current_id != "custom_msg") {
    	// Not a custom message
		  if (preset_clr_class != "") {
		    $('#markuparea').html('<div class="' + preset_clr_class + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  } else if (preset_clr_hex != "") {
		    $('#markuparea').html('<div role="alert" style="background-color: ' + preset_clr_hex + ';">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		  // end no custom msg
		} else if (current_id == "custom_msg") {
			console.log("In custom msg markup");
		  // For custom alerts
		  if (custom_clr_hex == "") {
		  	// It's a class
		    $('#markuparea').html('<div class="' + custom_clr_class + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		  } else if (custom_clr_class == "") {
		  	// It's a hex
		    $('#markuparea').html('<div role="alert" style="background-color: ' + custom_clr_hex + ';">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		} // end custom msg
	});
});