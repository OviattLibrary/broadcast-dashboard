/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

var preset_msg;
var preset_clr_class;
var preset_clr_hex;
var custom_clr;
var custom_msg;
var date;

var current_id;

jQuery(function($) {
	// Declare function to grab values
	$.getCurrentValues = function() {
		current_id = $("#edit-broadcast-dashboard-message").val();

		console.log(current_id + "\n");

		// If the value isn't custom_msg, it's preset
		if (current_id != "custom_msg") {
			console.log("Fires into non-custom" + "\n");
			preset_msg = $('#broadcast_dashboard_msg_text_' + current_id).val();
			console.log(preset_msg);
			
			if ( $("#broadcast_dashboard_clr_class_" + current_id).length ) {
				// Class
				preset_clr_class = $("#broadcast_dashboard_clr_class_" + current_id).val();
			} else if ( $("#broadcast_dashboard_clr_hex_" + current_id).length ) {
				// Hex
				preset_clr_hex = $("#broadcast_dashboard_clr_hex_" + current_id).val();
			}
		} else {
			// It's custom
		}

		console.log("Current ID: " + current_id + "\n" + "Preset message: " + preset_msg);
	}

	// Get initial values on page ready
	$.getCurrentValues();

	$('#edit-broadcast-dashboard-message').change(function() {
		$.getCurrentValues();
	});


	$('#edit-preview').click(function() {
		current_id = $("#edit-broadcast-dashboard-message").val();
		date = new Date();

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	    
	    // Set values for custom messages
	    if (current_id == "custom_msg") {
	      // Custom
	      custom_msg = $("#edit-broadcast-dashboard-custom-message").val();
	      custom_clr = $("#edit-broadcast-dashboard-custom-message-color").val();
	    }

	    if (current_id != "custom_msg") {
			  // clr_code = color_setter(preset_clr);
			    
			  if (clr_code && preset_msg) {
			    //<div class="'. $clr_code .'" role="alert">' . $preset_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
			    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
			  }
			} else if (current_id == "custom_msg") { // end no custom msg
			  // For custom alerts
			  // Set alert color based on setting
			  
			  //clr_code = color_setter(custom_clr);
			    
			  if (clr_code && custom_msg) {
			    //'<div class="'. $clr_code .'" role="alert">' . $cust_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
			    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
			  }
			} // end custom msg
	});
});