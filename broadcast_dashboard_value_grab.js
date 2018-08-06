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
		var bd_text_field = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-message-edit');
		var hidden_text = document.getElementsByName('broadcast_dashboard_settings_update_msg_msg_text_' + id)[0].value;

		console.log(id);
		console.log(hidden_text);

		bd_text_field.value = hidden_text;

		selector.onchange = function(){
			id = selector.value;
			hidden_text = document.getElementsByName('broadcast_dashboard_settings_update_msg_msg_text_' + id)[0].value;
			bd_text_field.value = hidden_text;
		}
	});
});