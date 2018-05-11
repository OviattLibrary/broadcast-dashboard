/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for real-time previewing of messages before they're sent out.
 */

 function runPreview(test) {
 	alert(test);
 }
(function($){

 $("#edit-preview").click(function() {
    // show the text that is in the textarea element
    // when the button is clicked.
    alert($("#broadcast_dashboard_custom_message").val());
  });
})(jQuery);