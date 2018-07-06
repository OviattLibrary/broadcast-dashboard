/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

var msg_text;
var custom_clr;
var date;

jQuery(function($) {
	$('#edit-broadcast-dashboard-settings-add-preview').click(function() {
		date = new Date();

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	  
	  // Custom
	  custom_msg = $("#edit-broadcast-dashboard-settings-add-msg-custom-message").val();
	  custom_clr_class = $("#edit-broadcast-dashboard-settings-add-css-class").val();
	  custom_clr_hex = $("#edit-broadcast-dashboard-settings-add-hex-code").val();

	  clr_code = color_setter(preset_clr);
	    
	  if (clr_code && preset_msg) {
	    //<div class="'. $clr_code .'" role="alert">' . $preset_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
	    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
	  }

	  // For custom alerts
	  // Set alert color based on setting
	  clr_code = color_setter(custom_clr);
	    
	  if (clr_code && custom_msg) {
	    //'<div class="'. $clr_code .'" role="alert">' . $cust_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
	    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
	  }
	});
});