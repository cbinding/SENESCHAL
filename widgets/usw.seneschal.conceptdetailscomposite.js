/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.conceptdetailscomposite
Version	: 20140120
Summary	: Graphical	display	of concepts	related	to the specified concept
Require	: jquery-XXX.min.js, jquery.ui.widget.min.js, usw.seneschal.waitable.js,
		usw.uri.skos.js, usw.seneschal.conceptdetails, usw.seneschal.conceptrelations
Example	: $("#div1").conceptdetailscomposite();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

20/01/2014	CFB	Initially created script
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.support.cors	= true;

	$.widget("seneschal.conceptdetailscomposite", {	//start	of widget code

		// stateful	defaults
		options: {
			conceptURI:	"",
			useCache: true,
			title:	"Concept details",
			//serviceURI: "http://localhost/heritagedata/getconceptrelations.php",
			displayHeader: true,
			displayFooter: true
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this, w, h, main;
			self.options = $.extend(self.options, options);

			self.element
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-conceptdetailscomposite")
				.waitable({waiting:	false})
				.header({
					text: self.options.title,
					visible: self.options.displayHeader
				})
				.footer({
					text: "",
					visible:  self.options.displayFooter
				})
				.css({
					"min-height": "200px"
				});

			// dimensions for apportioning on screen elements
			w =	$(self.element).innerWidth();
			h =	$(self.element).innerHeight();

			// main	container for other	elements
			main = $("<div></div>")
				.appendTo(self.element)
				.css({
					position: "relative",
					width: w,
					height:	h
				});

			// the conceptdetails element (PT, SN etc.)
			$("<div	class='details'/>").conceptdetails({useCache: self.options.useCache})
				.appendTo(main)
				.css({
					position: "absolute",
					"overflow-y": "scroll",
					left: (w / 100),
					top: (h / 100),
					width: (w /	100) * 98,
					height:	(h / 100) *	48
				});

			// the conceptrelations	element	(BT, NT, RT	links)
			$("<div	class='relations'/>").conceptrelations({useCache: self.options.useCache})
				.appendTo(main)
				.css({
					position: "absolute",
					"overflow-y": "scroll",
					left: (w / 100),
					top: (h	/ 100) * 50,
					width: (w /	100) * 98,
					height:	(h / 100) *	48
				});

			// update self and fire	event to notify	other controls when	a link is clicked
			self.element.on("click", "a", function() {
				var	uri	= $(this).attr('href'),
					label =	$(this).text();

				self.options.conceptURI = uri;
				self._refresh();

				// fire	an event to	notify other controls when a link is clicked
				$(self.element).trigger("selected",	{"uri":	uri, "label": label});

				return false;
			});

			// display URI in footer when mouse	passes over	link
			self.element.on("mouseover", "a", function() {
				var	uri	= $(this).attr('href');
				self.element.footer({text: uri});
				return false;
			});
			self.element.on("mouseout",	"a", function()	{
				self.element.footer({text: ""});
				return false;
			});
			self.element.on("mouseout",	self.element, function() {
				self.element.footer({text: ""});
				return false;
			});

			$(".relations:first", self.element).conceptrelations().bind("selected",	function(e,	data) {

				self.options.conceptURI = data.uri;
				self._refresh();

				// fire	an event to	notify other controls when a link is clicked
				$(self.element).trigger("selected",	{"uri":	data.uri, "label": data.label});
				return false;
				//$(".details:first").conceptdetailscomposite({"conceptURI": data.uri, "conceptLabel": data.label});
				//$("#conceptRelationsLabel").text("Concept	relations for '" + data.label +	"':");
			});

			this._refresh();
		},

		// put this.element	back to	how	it was
		_destroy: function() {
			var	self = this;
			self.element.html("");
			self.element.removeClass("usw-seneschal-conceptdetailscomposite");
			self.element.removeClass("usw-seneschal");
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
			var	self = this;

			$("div.relations:first", self.element).conceptrelations({conceptURI: self.options.conceptURI});
			$("div.details:first", self.element).conceptdetails({conceptURI: self.options.conceptURI});
		}

	});	// end of usw.seneschal.conceptdetailscomposite

}(jQuery));	//end of main jquery closure
