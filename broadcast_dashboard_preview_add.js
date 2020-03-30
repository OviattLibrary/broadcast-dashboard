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

// Date fix function
function setMonth(n) {
	return n + 1;
}

jQuery(function($) {
	// Clear custom color text if another value is selected
	$('input[type=radio][name="broadcast_dashboard_settings_add_color"]').on('change', function(){
    switch($(this).val()){
        case 'class' :
          $('input[name="broadcast_dashboard_settings_add_hex_code"]').val('');
          break;
        case 'hex' :
          $('input[name="broadcast_dashboard_settings_add_css_class"]').val('');
          break;
    }
	});

	$('#edit-broadcast-dashboard-settings-add-preview').click(function() {
		custom_msg = $("#edit-broadcast-dashboard-settings-add-msg-custom-message").val();
		custom_clr_class = $("#edit-broadcast-dashboard-settings-add-css-class").val();
		custom_clr_hex = $("#edit-broadcast-dashboard-settings-add-hex-code").val();

		date = new Date();

    // Determine if we need to display am or pm, and convert hours from military to 12-hour
    var hours = date.getHours();
    var timeend = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' is '12'am

		// Set date on click
		msg_date = "" + setMonth(date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear() + " " + hours + ":" + date.getMinutes() + timeend;

    // Hex check for not null
		if (custom_clr_hex) {
			var firstCharacter = custom_clr_hex.substring(0, 1);

			if (firstCharacter != "#") {
				custom_clr_hex = "#" + custom_clr_hex;
				$('#edit-broadcast-dashboard-settings-add-hex-code').val(custom_clr_hex);
			}
		}

	    console.log("custom_msg: " + custom_msg);
	    console.log("custom_clr_class: " + custom_clr_class);
	    console.log("custom_clr_hex: " + custom_clr_hex);

	  // For custom alerts
	  if (custom_clr_hex == "") {
	  	// It's a class
	    $('#markuparea').html('<div class="' + custom_clr_class + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
	  } else if (custom_clr_class == "") {
	  	// It's a hex
	    $('#markuparea').html('<div role="alert" style="background-color: ' + custom_clr_hex + '; padding: 15px; border: 1px solid transparent; border-radius: 4px;">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		} // end custom msg
	});
});
