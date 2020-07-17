/**
 * @file
 * Broadcast Dashboard additional Javascript file
 *
 * This file allows for the quick clearing of scheduled message timestamps.
 */

jQuery(function($) {
  $(document).ready(function() {
      $("#edit-broadcast-dashboard-scheduler-reset").on("click", function() {
        //console.log('fired');
        $("#edit-broadcast-dashboard-scheduler").val('');
        $("#edit-broadcast-dashboard-unscheduler").val('');
      });
    });
});
