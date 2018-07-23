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
		preset_msg = "";
		preset_clr_class = "";
		preclr_clr_hex = "";

		current_id = $("#edit-broadcast-dashboard-message").val();

		console.log(current_id + "\n");

		// If the value isn't custom_msg, it's preset
		if (current_id != "custom_msg") {
			//preset_msg = $('#broadcast_dashboard_msg_text_' + current_id).val();
			var text_id = 'broadcast_dashboard_msg_text_' + current_id;
			preset_msg = $("input[type='hidden'][name=" + text_id + "]").attr('value');
			//console.log("Clear call test: " + $("input[type='hidden'][name='broadcast_dashboard_msg_text_3").attr('value'));

			console.log("Clr class len: " + $("#broadcast_dashboard_clr_class_" + current_id).length);

			if ( $("#broadcast_dashboard_clr_class_" + current_id).length ) {
				// Class
				preset_clr_class = $("#broadcast_dashboard_clr_class_" + current_id).val();
				console.log("Preset class: " + preset_clr_class);
			} else if ( $("#broadcast_dashboard_clr_hex_" + current_id).length ) {
				// Hex
				preset_clr_hex = $("#broadcast_dashboard_clr_hex_" + current_id).val();
				console.log("Preset hx: " + preset_clr_hex);
			}
		} else {
			// It's custom
		}
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
	  
	  console.log(current_id);
	  console.log(msg_date);

    // Set values for custom messages
    if (current_id == "custom_msg") {
      // Custom
      custom_msg = $("#edit-broadcast-dashboard-custom-message").val();
      custom_clr = $("#edit-broadcast-dashboard-custom-message-color").val();
    }

    if (current_id != "custom_msg") {
		  // clr_code = color_setter(preset_clr);

		  console.log("Fired into not custom msg");
		  console.log(preset_clr_class);
		  console.log(preset_clr_hex);
		    
		  if (preset_clr_class != "") {
		  	console.log("Fired into color class write");
		    //<div class="'. $clr_code .'" role="alert">' . $preset_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
		    $('#markuparea').html('<div class="' + preset_clr_class + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  } else if (preset_clr_hex != "") {
		    $('#markuparea').html('<style ' + preset_clr_hex + '<div role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		} else if (current_id == "custom_msg") { // end no custom msg
		  // For custom alerts
		  // Set alert color based on setting
		  
		  //clr_code = color_setter(custom_clr);
		    
		  //if (clr_code && custom_msg) {
		    //'<div class="'. $clr_code .'" role="alert">' . $cust_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
		    //$('#markuparea').html('<div class="' + clr_code + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		  //}
		} // end custom msg
	});
});