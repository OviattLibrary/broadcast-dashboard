/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

var preset_msg;
var preset_clr_class;
var preset_clr_hex;
var custom_clr_class;
var custom_clr_hex;
var custom_msg;
var date;

var current_id;

jQuery(function($) {
	// Declare function to grab values
	$.getCurrentValues = function() {
		preset_msg = "";
		preset_clr_class = "";
		preset_clr_hex = "";
		custom_msg = "";
		custom_clr_class = null;
		custom_clr_hex = null;

		current_id = $("#edit-broadcast-dashboard-message").val();

		console.log(current_id + "\n");

		// If the value isn't custom_msg, it's preset
		if (current_id != "custom_msg") {
			var text_id = 'broadcast_dashboard_msg_text_' + current_id;
			preset_msg = $("input[type='hidden'][name=" + text_id + "]").attr('value');

			if ( $("input[type='hidden'][name='broadcast_dashboard_clr_class_" + current_id + "']").length ) {
				// Class
				preset_clr_class = $("input[type='hidden'][name='broadcast_dashboard_clr_class_" + current_id + "']").attr('value');
				console.log("Class: " + preset_clr_class);
			} else if ( $("input[type='hidden'][name='broadcast_dashboard_clr_hex_" + current_id + "']").length ) {
				// Hex
				preset_clr_hex = $("input[type='hidden'][name='broadcast_dashboard_clr_hex_" + current_id + "']").attr('value');
				console.log("Hex: " + preset_clr_hex);
			}
		} else {
			// It's custom
			custom_msg = $("#edit-broadcast-dashboard-custom-message").val();
      custom_clr_class = $("#edit-broadcast-dashboard-custom-color-css").val();
      custom_clr_hex = $("#edit-broadcast-dashboard-custom-color-hex--2").val();
		}
	}

	// Get initial values on page ready
	$.getCurrentValues();

	// Grab new values every time the message type is changed
	$('#edit-broadcast-dashboard-message').change(function() {
		$.getCurrentValues();
	});

	// Clear custom color text if another value is selected
	$('input[type=radio][name=broadcast_dashboard_custom_color]').on('change', function(){
    switch($(this).val()){
      case 'class' :
        $('input[name="broadcast_dashboard_custom_color_hex"]').val('');
        break;
      case 'hex' :
        $('input[name="broadcast_dashboard_custom_color_css"]').val('');
        break;
    }            
	});

	$('#edit-preview').click(function() {
		$.getCurrentValues();
		current_id = $("#edit-broadcast-dashboard-message").val();
		date = new Date();

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

		// Hex check for not null
		if (custom_clr_hex) {
			console.log("There is a hex");
			var firstCharacter = custom_clr_hex.substring(0, 1);

			if (firstCharacter != "#") {
				console.log("It has no #!");
				custom_clr_hex = "#" + custom_clr_hex;
				console.log("It now " + custom_clr_hex);
				$('input[name="broadcast_dashboard_custom_color_hex"]').val(custom_clr_hex);
			}
		}

		/*if (!empty($add_hex)) {
	    $firstCharacter = substr($add_hex, 0, 1);

	    echo "Hex input: " . $add_hex . "\n";
	    echo "First char: " . $firstCharacter . "\n";

	    if ($firstCharacter != "#") {
	      $add_hex = "#" . $add_hex;
	    }

	    echo "New hex: " . $add_hex;
	  }*/

    console.log("custom_msg: " + custom_msg);
    console.log("custom_clr_class: " + custom_clr_class);
    console.log("custom_clr_hex: " + custom_clr_hex);

    if (current_id != "custom_msg") {
    	// Not a custom message
		  if (preset_clr_class != "") {
		    $('#markuparea').html('<div class="' + preset_clr_class + '" role="alert">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
		  } else if (preset_clr_hex != "") {
		    $('#markuparea').html('<div role="alert" style="background-color: ' + preset_clr_hex + '; padding: 15px; border: 1px solid transparent; border-radius: 4px;">' + preset_msg + " (Posted on: " + msg_date + ')</div>');
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
		    $('#markuparea').html('<div role="alert" style="background-color: ' + custom_clr_hex + '; padding: 15px; border: 1px solid transparent; border-radius: 4px;">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		  }
		} // end custom msg
	});
});