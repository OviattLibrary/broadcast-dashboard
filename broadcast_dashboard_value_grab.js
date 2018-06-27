/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for Settings value selection to pass the correct message title to input.
 */
 jQuery(function ($) {
	$(document).ready(function() {
		var input = document.getElementById('edit-broadcast-dashboard-setting-custom-message-edit');
		var selector = document.getElementById('edit-broadcast-dashboard-setting-custom-message-select');

		selector.onchange = function(){
		     input.value = this.value;
		}
	});
});