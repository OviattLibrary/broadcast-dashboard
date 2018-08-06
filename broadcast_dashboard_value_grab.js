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

		console.log(id);
		console.log(hidden_name);
		console.log(hidden_text);

		bd_name_field.value = hidden_name;
		bd_msg_field.value = hidden_text;

		selector.onchange = function(){
			id = selector.value;

			// Change name field text
			hidden_name = document.getElementsByName('broadcast_dashboard_settings_update_msg_title_' + id)[0].value;
			bd_name_field.value = hidden_name;
			// Change msg field text
			hidden_text = document.getElementsByName('broadcast_dashboard_settings_update_msg_msg_text_' + id)[0].value;
			bd_msg_field.value = hidden_text;
		}
	});
});