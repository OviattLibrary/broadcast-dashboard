/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for Settings value selection to pass the correct message title to input.
 */
 jQuery(function ($) {
	$(document).ready(function() {
		var input = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-message-edit');
		var selector = document.getElementById('edit-broadcast-dashboard-settings-update-msg-custom-message-select');

		// Added in so textarea is populated on page load
		input.value = selector.value;

		selector.onchange = function(){
		     input.value = this.value;
		}
	});
});