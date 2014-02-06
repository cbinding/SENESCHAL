/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: Any
Classes	: usw.seneschal.header.js
Summary	: Adds a text header onto an element
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,
		  jquery.event.resize.js, img/collapse.gif,	img/expand.gif
Example	:$('.tmp1').header({text: 'my header', collapsible:	true});
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

Ref	Who	Date		Details
===	===	====		=======
001	CFB	06/06/2013	Initially created script, adapted from older STAR.UI script
===============================================================================
*/
(function($) { //start of main jQuery closure
	"use strict"; // strict	mode pragma

	$.widget('widget.header', {

		// stateful	defaults
		options: {
			text: "header",
			collapsible: false,
			visible: true
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this, ctlCollapse;
			self.options = $.extend(self.options, options);

			//Create and style elements	representing header
			self.header	= $("<div></div>")
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-header")
				.insertBefore(self.element)
				.css({
					"width"	: $(self.element).innerWidth(),
					//"color" :	"ghostwhite",
					//"background-color" : "dimgray",
					"padding-left" : "2px",
					"margin-top" : $(self.element).css("margin-top"),
					"margin-left" :	$(self.element).css("margin-left"),
					"margin-right" : $(self.element).css("margin-right"),
					"margin-bottom"	: "0px",
					"height" : "25px"
				});

			self.element.css({
				"margin-top" : "0px"
				//height: self.element.height -	25,
				//top: self.element.top	+ 25
				});

			$("<span class='usw-seneschal-header-text'>" + self.options.txt	+ "</span>")
				.css({
					"margin" : "3px",
					"float"	: "left",
					"color"	:  "ghostwhite"
				}).appendTo(self.header);

			ctlCollapse	= $("<span class='usw-seneschal-header-ctl'></span>")
				.css({
					"margin" : "3px",
					"float"	: "right",
					"vertical-align" : "middle"
				}).appendTo(self.header);

			$("<img	class='usw-seneschal-header-ctl-img' src='img/collapse.gif'></img>")
				.appendTo(ctlCollapse);

			if(self.options.collapsible) {
				$(ctlCollapse).css("display", "inline");
				$(self.header)
					.css("cursor", "pointer")
					.click(function() {
						$(this).next().slideToggle('fast');
						var	x =	$(this).next().height(),
						img	= (x <=	1 ?	'img/collapse.gif' : 'img/expand.gif');
						$(".usw-seneschal-header-ctl-img", self.header).attr("src",	img);
					});
			}
			else {
				$(ctlCollapse).css("display","none");
				$(self.header).css("cursor", "default");
			}

			$(self.element).resize(function() {
				self._refresh();
			});

			self._refresh();
		},	// end function '_create'

		// any option set after	control	loads
		// causes control to refresh itself
		_setOption:	function(key, value) {
			var	self = this;

			//clean	up input
			key	= $.trim(key ||	'');
			value =	$.trim(value ||	'');

			// do nothing if same value	is passed
			if (value === self.options[key]) {
				return;
			}

			// change the option value and refresh the widget
			self.options[key] =	value;
			self._refresh();
		},	// end function '_setOption'

		_refresh: function() {
			var	self = this;
			$(self.header).width($(self.element).width());

			if (self.options.text) {
				 $(".usw-seneschal-header-text:first", self.header).html(self.options.text);
			}

			if (self.options.visible) {
				$(self.header).show();
			}
			else {
				$(self.header).hide();
			}
		}	// end function '_refresh'

	});	// end widget usw.seneschal.header

}(jQuery));	//end of main jQuery closure
