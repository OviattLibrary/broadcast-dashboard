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

		// Set date on click
		msg_date = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    console.log("custom_msg: " + custom_msg);
    console.log("custom_clr_class: " + custom_clr_class);
    console.log("custom_clr_hex: " + custom_clr_hex);

	  // For custom alerts
	  if (custom_clr_hex == "") {
	  	// It's a class
	    $('#markuparea').html('<div class="' + custom_clr_class + '" role="alert">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
	  } else if (custom_clr_class == "") {
	  	// It's a hex
	    $('#markuparea').html('<div class="well" role="alert" style="background-color: ' + custom_clr_hex + ';">' + custom_msg + " (Posted on: " + msg_date + ')</div>');
		} // end custom msg
	});
});