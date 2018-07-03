/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for a confirmation dialog box upon deleting a message.
 */
(function($) {
Drupal.behaviors.confirmPopUp = {
  attach: function (context, settings) {

    $(document).ready(function() {

      $("#delete_existing_message_submit").attr("type", "fake");    
      $("#delete_existing_message_submit").attr("id", "fake");

      $(document).on("click", "#fake", function(){
        var box = $("<div class='popup-box'><b>Are you sure you want to delete the selected message?</b><div class='btns-wrapper'><span class='save-btn'>Continue</span><span class='cancel-btn'>Cancel</span></div></div>");

        $("#overlay-content").prepend('<div class="blackbg"></div>').prepend(box);
        $("#overlay-content").addClass('transbg');
        $("#overlay-titlebar").prepend('<div class="blackbg"></div>');
      });

      $(document).on("click", ".save-btn", function(){
        $('#fake').attr("type","submit");         
        $('#fake').attr("id","edit-submit");
        $('#delete_existing_message_submit')[0].click();
      });

      $(document).on("click", ".cancel-btn", function(){
        $(".blackbg").remove();
        $(".popup-box").remove();
      });

    });

  }
};
})(jQuery);