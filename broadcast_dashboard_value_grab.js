/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for Settings value selection to pass the correct message title to input.
 */
 jQuery(function ($) {
	$(document).ready(function() {
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
		var hidden_class = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_class_' + id)[0];
		var hidden_hex = document.getElementsByName('broadcast_dashboard_settings_update_msg_clr_hex_' + id)[0];

		console.log(id);
		console.log(hidden_name);
		console.log(hidden_text);

		bd_name_field.value = hidden_name;
		bd_msg_field.value = hidden_text;

		if (hidden_class) {
			console.log(hidden_class.value);
			bd_clr_class_field.value = hidden_class.value;
			bd_clr_class_select.checked = true;
			bd_clr_hex_select.checked = false;
		} else if (hidden_hex) {
			console.log(hidden_hex.value);
			bd_clr_hex_field.value = hidden_hex.value;
			bd_clr_hex_select.checked = true;
			bd_clr_class_select.checked = false;
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

			console.log(id);
			console.log(hidden_name);
			console.log(hidden_text);

			hidden_class.value = "";
			hidden_hex.value = "";

			if (hidden_class) {
				console.log(hidden_class.value);
				bd_clr_class_field.value = hidden_class.value;
				bd_clr_class_select.checked = true;
				bd_clr_hex_select.checked = false;
			} else if (hidden_hex) {
				console.log(hidden_hex.value);
				bd_clr_hex_field.value = hidden_hex.value;
				bd_clr_hex_select.checked = true;
				bd_clr_class_select.checked = false;
			}
		}
	});
});