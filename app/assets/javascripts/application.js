//= require jquery
//= require jquery_ujs
//= require jquery.ui.core
//= require jquery.ui.widget
//= require jquery.ui.mouse
//= require jquery.ui.position
//= require jquery.ui.draggable
//= require jquery.ui.droppable
//= require jquery.ui.resizable
//= require jquery.ui.selectable
//= require jquery.ui.sortable
//= require jquery.ui.accordion
//= require jquery.ui.autocomplete
//= require jquery.ui.button
//= require jquery.ui.dialog
//= require jquery.ui.slider
//= require jquery.ui.tabs
//= require jquery.ui.progressbar
//= require jquery.effects.all
//= require facebox
//= require jquery.NobleCount
//= require jquery.timeago
//= require jquery.truncator
//= require autoresize.jquery.min
//= require jquery.defaultvalue
//= require jquery.hoverIntent.minified
//= require jquery.bgiframe.min
//= require jquery.corner
//= require jquery.delayedObserver
//= require jquery.endless-scroll
//= require jquery.sticky
//= require jquery.pop
//= require jquery.dd
//= require jquery.autoSuggest
//= require jquery.slideshow.min
//= require jquery.tipsy
//= require msdropdown
//= require accounts
//= require subscriptions
//= require_self

jQuery(function ($) {
  $.fn.extend({
    turnRemoteToToggle: function(target,altText){
        var $el = $(this),
            altText = altText || "Hide";

        $el.text(altText);
        $el.toggle(
          function(){
            $el.text(el.data('origText'));
            $el.data('expanded', false);
            target.slideUp(); // or target.hide() or other effect
          }, 
          function(){
            $el.text(altText);
            $el.data('expanded', true);
            target.slideDown(); // or target.show() or whatever
          }
        );
      }
  });
});


jQuery(document).ready(function() {

	var isChrome = /Chrome/.test(navigator.userAgent);
	if(!isChrome & jQuery.support.opacity) {
		//jQuery(".tab_header a, div.tab_body").corners(); 
	}
	//jQuery("#idea_column, #intro, #buzz_box, #content_text, #notification_show, .bulletin_form").corners();
	//jQuery("#top_right_column, #toolbar").corners("bottom");
	
	jQuery("abbr[class*=timeago]").timeago();
	jQuery('#bulletin_content, #blurb_content, #message_content, #document_content, #email_template_content, #page_content').autoResize({extraSpace : 20})

	function addMega(){
	  jQuery(this).addClass("hovering"); 
	} 

	function removeMega(){ 
	  jQuery(this).removeClass("hovering"); 
	}
	var megaConfig = {
	     interval: 20,
	     sensitivity: 1,
	     over: addMega,
	     timeout: 20,
	     out: removeMega
	};
	jQuery(".mega").hoverIntent(megaConfig);


});

function toggleAll(name)
{
  boxes = document.getElementsByClassName(name);
  for (i = 0; i < boxes.length; i++)
    if (!boxes[i].disabled)
   		{	boxes[i].checked = !boxes[i].checked ; }
}

function setAll(name,state)
{
  boxes = document.getElementsByClassName(name);
  for (i = 0; i < boxes.length; i++)
    if (!boxes[i].disabled)
   		{	boxes[i].checked = state ; }
}

function showSubNavLayer(layer) {
    var myLayer = document.getElementById(layer);
    if(myLayer.style.display=="none" || myLayer.style.display==""){
      myLayer.style.display="block";
    } else {
      myLayer.style.display="none";
    }
}

jQuery(document).ready(function($) {
    $('a[rel*=facebox]').facebox()
})
