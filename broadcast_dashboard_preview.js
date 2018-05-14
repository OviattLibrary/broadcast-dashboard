/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

jQuery(function($) {
	$('#edit-preview').click(function() {
		var msg_type = $("#edit-broadcast-dashboard-message").val();
		var preset_msg;
		var preset_clr;
		var custom_clr;
		var custom_msg;
		var date = new Date();

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	    
	    // Pre-set messages
	    if (msg_type == 1) {
	      // Drill
	      preset_msg = "There is currently a drill taking place. Please remain calm.";
	      preset_clr = 2;
	    } else if (msg_type == 2) {
	      // Earthquake
	      preset_msg = "There is currently an earthquake. Drop, cover, and hold.";
	      preset_clr = 3;
	    } else if (msg_type == 3) {
	      // Fire
	      preset_msg = "A fire has been reported. Please calmly evacuate the building.";
	      preset_clr = 4;
	    } else if (msg_type == 4) {
	      // Shooter
	      preset_msg = "An active shooter has been reported. Take cover and, if possible, escape through a window or door.";
	      preset_clr = 4;
	    } else if (msg_type == 5) {
	      // Custom
	      custom_msg = $("#edit-broadcast-dashboard-message").val();
	    }

	    if (msg_type != 5) {
		  clr_code = color_setter(preset_clr);
		    
		  if (clr_code && preset_msg) {
		    //<div class="'. $clr_code .'" role="alert">' . $preset_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
		    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		} else if (msg_type == 5) { // end no custom msg
		  // For custom alerts
		  // Set alert color based on setting
		  clr_code = color_setter(custom_clr);
		    
		  if (clr_code && custom_msg) {
		    //'<div class="'. $clr_code .'" role="alert">' . $cust_msg . ' (Posted on: ' . $msg_date . ')' . $page[$region]['system_main']['#markup'] . '</div>';
		    $('#markuparea').html('<div class="' + clr_code + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		} // end custom msg
		alert($(preset_msg).val());
	});
});

/**
 * Global function to set alert color classes
 */
function color_setter(input_color) {
  /* 1 => Success - Green
     2 => Info - Blue
     3 => Warning - Yellow
     4 => Danger - Red')
  */
  if (input_color == 1) {
      // Success
      return 'alert alert-success';
    } else if (input_color == 2) {
      // Info
      return 'alert alert-info';
    } else if (input_color == 3) {
      // Warning
      return 'alert alert-warning';
    } else if (input_color == 4) {
      // Error
      return 'alert alert-danger';
    } else {
      // Default
      return 'alert alert-info';
    }
}