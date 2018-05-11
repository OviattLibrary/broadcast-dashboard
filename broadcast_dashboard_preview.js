/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

$(document).ready(function() {
	$('#edit-preview').click(function () {
	   alert($("#broadcast_dashboard_custom_message").val());
	});
}