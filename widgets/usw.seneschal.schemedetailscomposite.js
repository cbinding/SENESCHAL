/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.schemedetailscomposite
Version	: 20140619
Summary	: Graphical	display	of concepts	related	to the specified concept
Require	: jquery-XXX.min.js, jquery.ui.widget.min.js, usw.seneschal.waitable.js,
		  usw.seneschal.schemedetails, usw.seneschal.senechal.topconcepts
Example	: $("#div1").schemedetailscomposite();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

20/01/2014 CFB Initially created script
19/06/2014 CFB elements with class usw-seneschal-schemedetailscomposite automatically become one
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	 $.support.cors	= true;

	$.widget("seneschal.schemedetailscomposite", { //start of widget code

		// stateful	defaults
		options: {
			schemeURI: "http://purl.org/heritagedata/schemes/1",
			title: "Scheme details",
			useCache: true,
			displayHeader: true,
			displayFooter: true
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this, w, h, main;
			self.options = $.extend(self.options, options);

			self.element
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-schemedetailscomposite")
				.header({
					text: self.options.title,
					visible: self.options.displayHeader
				})
				.footer({
					text: "",
					visible:  self.options.displayFooter
				})
				.css({
					"min-height": "200px",
					overflow: "none"
				});

			w =	$(self.element).innerWidth();
			h =	$(self.element).innerHeight();

			main = $("<div/>")
				.css({
					position: "relative",
					overflow: "none",
					width: w,
					height:	h
				}).appendTo(self.element);

			$("<div	class='details'/>").schemedetails({useCache: self.options.useCache})
				.css({
					position: "absolute",
					"overflow-y": "scroll",
					left: (w / 100),
					top: (h	/ 100),
					width: (w /	100) * 98,
					height:	(h / 100) *	48
				}).appendTo(main);

			$("<div	class='topconcepts'/>").topconcepts({useCache: self.options.useCache})
				.css({
					position: "absolute",
					"overflow-y": "scroll",
					left: (w / 100),
					top: (h	/ 100) * 50,
					width: (w /	100) * 98,
					height:	(h / 100) *	48
				}).appendTo(main);


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

			$(".topconcepts:first",	self.element).topconcepts().bind("selected", function(e, data) {
				// fire	an event to	notify other controls when a link is clicked
				$(self.element).trigger("selected",	{"uri":	data.uri, "label": data.label});
				return false;
			});

			this._refresh();
		},

		// put this.element	back to	how	it was
		destroy: function()	{
			var	self = this;
			self.element.removeClass("usw-seneschal-schemedetailscomposite");
			self.element.removeClass("usw-seneschal");
			//$.Widget.prototype.destroy.call(this);
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

			$("div.details:first", self.element).schemedetails({schemeURI: self.options.schemeURI});
			$("div.topconcepts:first", self.element).topconcepts({schemeURI: self.options.schemeURI});
		}

	});	// end of usw.seneschal.schemedetailscomposite

	// any elements with class usw-seneschal-schemedetailscomposite automatically become one
	// arbitrary default scheme URI is "http://purl.org/heritagedata/schemes/1"
	$(window).load(function(){
		$(".usw-seneschal-schemedetailscomposite").schemedetailscomposite();
	});


}(jQuery));	//end of main jQuery closure
