/**
 * @file
 * Broadcast Dashboard additional Javascript file
 * 
 * This file allows for Settings value selection to pass the correct message title to input.
 */
 /*jQuery(function($) {
 	var selector = document.getElementById("edit-broadcast-dashboard-setting-custom-message-select");

 	selector.addEventListener("change", function() {
	    //var selected_option = $("#edit-broadcast-dashboard-setting-custom-message-select").val();
	    var selected_option = selector.val();
	    return selected_option;
	});
 });*/

var input = document.getElementById('mytext');
var selector = document.getElementById('dropdown');

selector.onchange = function(){
     input.value = this.value;
}