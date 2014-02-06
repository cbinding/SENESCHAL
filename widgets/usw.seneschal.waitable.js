/*jslint browser: true, nomen: true, white: true */
/*global $, jQuery, alert*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.waitable.js
Version	: 20140115
Summary	: Allows controls to appear	visually 'blocked',	preventing interaction
		  and displaying an	animation while	waiting	for	something to happen
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	jquery.event.resize.js,	waiting.gif
Example	: $("#div3").waitable({isWaiting: true});
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

15/01/2014	CFB	Initially created script, adapted from older STAR.UI script
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.widget("widget.waitable",	{ //start of widget	code

		// stateful	defaults
		options: {
			waiting: false,
			img: 'img/waiting.gif'
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this, divWaiting;
			self.options = $.extend(self.options, options);

			self.element.addClass("usw-seneschal-waitable");

			//self.divWaiting =	$("<div></div>")
			divWaiting = $("<div class='usw-seneschal-waitable-waiting'></div>")
				.insertAfter(self.element)
				.css({
					"margin": "0",
					"padding": "0",
					"border": "0",
					"opacity":	"0.3",
					"background": "black",
					"display": "none"
				});
			$("<img	src='" + self.options.img +	"'/>")
				.appendTo(divWaiting)
				.css({
					"margin": "0px",
					"padding": "0px",
					"border": "0px",
					"background": "transparent",
					"width": "16px",
					"height": "16px",
					"display": "none"
				});

			// redraw internal controls	if control is resized
			// $(self.element).resize()	didnt work,	this does (to a	point)
			//$(window).resize(function() {...
			// NOTE	- new approach using jquery.event.resize() downloaded
			// from	http://bitovi.com/blog/2011/05/jquery-resize-event.html
			$(self.element).resize(function() {
				self._refresh();
			});

			self._refresh();
		},

		// put this.element	back to	how	it was
		destroy: function()	{
			//this.element.remove(self.divWaiting);
			this.element.removeClass("usw-seneschal-waitable");
		},

		// set an option after control has loaded
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
		},

		// redraw the control
		_refresh: function() {
			var	self = this, imgWaiting, divWaiting;

			divWaiting = $("div.usw-seneschal-waitable-waiting:first", self.element);

			if (self.options.waiting === true)
			{
				// overlay divWaiting onto self.element
				$(divWaiting).css({
					//"position" : "absolute",
					//"left" : $(self.element).offset().left,
					//"top"	: $(self.element).offset().top,
					"left" : $(self.element).position().left,
					"top" :	$(self.element).position().top,
					"width"	: $(self.element).outerWidth(),
					"height" : $(self.element).outerHeight()
				}).show();

				//position imgWaiting in the centre	of divWaiting
				//var imgWaiting = $("img:first", self.divWaiting);
				imgWaiting = $("div.usw-seneschal-waitable-waiting:first img:first", self.element);
				$(imgWaiting).css({
					"position" : "absolute",
					"left" : ($(divWaiting).outerWidth() / 2) -	($(imgWaiting).outerWidth()	/ 2),
					"top": ($(divWaiting).outerHeight()	/ 2) - ($(imgWaiting).outerHeight()	/ 2)
				}).show();
			}
			else {
				// make	sure divWaiting	is hidden
				$(divWaiting).hide();
			}
		}

	});	// end of widget code

}(jQuery));	//end of main jquery closure
