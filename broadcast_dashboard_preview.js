/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

jQuery(function($) {
	$('#edit-preview').click(function () {
	   alert($("#edit-broadcast-dashboard-custom-message").val());
	});
});