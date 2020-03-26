/**
 * @file
 * Broadcast Dashboard additional Javascript file
 *
 * This file contains all JS elements that rely on a ready call.
 * This file allows for Settings value selection to pass the correct message title to input.
 */
 jQuery(function ($) {
	$(document).ready(function() {

    // SECTION -- For scheduler reset
    $("#edit-broadcast-dashboard-scheduler-reset").on("click", function() {
        console.log('fired');
        $("#edit-broadcast-dashboard-scheduler").val('');
        $("#edit-broadcast-dashboard-unscheduler").val('');
      });

    // SECTION -- For Settings value section to pass the correct message title to input:q!
    var hidden_class;
		var hidden_hex;

		var selector = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-message-select');
		var id = selector.value;

		var bd_msg_field = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-message-edit');
		var hidden_text = document.getElementsByName('broadcast_dashboard_settings_update_msg_msg_text_' + id)[0].value;

		var bd_name_field = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-name-edit');
		var hidden_name = document.getElementsByName('broadcast_dashboard_settings_update_msg_title_' + id)[0].value;

		var bd_clr_class_select = document.getElementById('edit-broadcast-dashboard-settings-update-color-class');
		var bd_clr_hex_select = document.getElementById('edit-broadcast-dashboard-settings-update-color-hex');
		var bd_clr_class_field = document.getElementById('edit-broadcast-dashboard-settings-update-css-class');
		var bd_clr_hex_field = document.getElementById('edit-broadcast-dashboard-settings-update-hex-code');
		hidden_class = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_class_' + id)[0];
		hidden_hex = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_hex_' + id)[0];

		bd_name_field.value = hidden_name;
		bd_msg_field.value = hidden_text;

		if (hidden_class) {
			console.log(hidden_class.value);
			bd_clr_class_field.value = "";
			bd_clr_hex_field.value = "";
			bd_clr_class_field.value = hidden_class.value;
		} else if (hidden_hex) {
			console.log(hidden_hex.value);
			bd_clr_class_field.value = "";
			bd_clr_hex_field.value = "";
			bd_clr_hex_field.value = hidden_hex.value;
		}

		selector.onchange = function(){
			id = selector.value;

			// Change name field text
			hidden_name = document.getElementsByName('broadcast_dashboard_settings_update_msg_title_' + id)[0].value;
			bd_name_field.value = hidden_name;
			// Change msg field text
			hidden_text = document.getElementsByName('broadcast_dashboard_settings_update_msg_msg_text_' + id)[0].value;
			bd_msg_field.value = hidden_text;

			// Select appropriate color and change fields
			bd_name_field.value = hidden_name;
			bd_msg_field.value = hidden_text;

			hidden_class = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_class_' + id)[0];
			hidden_hex = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_hex_' + id)[0];

			if (hidden_class) {
				hidden_hex = "";
				bd_clr_class_field.value = "";
				bd_clr_hex_field.value = "";
				console.log(hidden_class.value);
				jQuery('#edit-broadcast-dashboard-settings-update-color-class').trigger('click').trigger('change');
				bd_clr_class_field.value = hidden_class.value;
			} else if (hidden_hex) {
				hidden_class = "";
				bd_clr_class_field.value = "";
				bd_clr_hex_field.value = "";
				console.log(hidden_hex.value);
				jQuery('#edit-broadcast-dashboard-settings-update-color-hex').trigger('click').trigger('change');
				bd_clr_hex_field.value = hidden_hex.value;
			}
		}

  });

	$('input[type=radio][name=broadcast_dashboard_settings_update_color]').on('change', function(){
    switch($(this).val()){
	    case 'class' :
	      $('input[name="broadcast_dashboard_settings_update_css_class"]').val('');
	      break;
	    case 'hex' :
	      $('input[name="broadcast_dashboard_settings_update_hex_code"]').val('');
	      break;
    }
  });

});
