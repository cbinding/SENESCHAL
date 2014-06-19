/*jslint browser: true, nomen: true, white: true, unparam: true  */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.topconcepts.js
Version	: 20140115
Summary	: List of top (root) concepts for specified	ConceptScheme
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	usw.seneschal.waitable.js
Example	: $("#div1").topconcepts();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

15/01/2014	Initially created script
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	 $.support.cors	= true;

	$.widget("seneschal.topconcepts", {	//start	of widget code

		// default options
		options: {
			useCache: true,
			schemeURI: "http://purl.org/heritagedata/schemes/mda_obj",
			title: "Top	concepts",
			serviceURI:	"http://www.heritagedata.org/live/services/getTopConceptsForScheme",
			//serviceURI: "http://localhost/heritagedata/getTopConceptsForScheme.php",
			displayHeader: true,
			displayFooter: true
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this;
			self.options = $.extend(self.options, options);

			self.element
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-topconcepts")
				.waitable({"waiting": false})
				.header({text: self.options.title, visible:	self.options.displayHeader})
				.footer({text: "", visible:	self.options.displayFooter})
				.css({
					"max-height": "200px",
					//margin: "0px,	5px",
					//width: "100%",
					"text-align":"left",
					"overflow-y":"scroll"
				});

			// fire	an event when any link is clicked
			self.element.on("click", "a", function() {
				var	uri	= $(this).attr('href'),	label =	$(this).text();
				$(self.element).trigger("selected",	{"uri":	uri, "label": label});
				return false;
			});
			// display URI in footer when mouse	passes over	link
			self.element.on("mouseover", "a", function() {
				var	uri	= $(this).attr('href');
				self.element.footer({text: uri});
			});
			self.element.on("mouseout",	"a", function()	{
				self.element.footer({text: ""});
			});

			self._refresh();
		},

		// put this.element	back to	how	it was
		destroy: function()	{
			this.element.remove(this.input);
			this.element.removeClass("usw-seneschal-topconcepts");
			this.element.removeClass("usw-seneschal");
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

			if (self.options.schemeURI === "") {
				return;
			}

			$(self.element).waitable({"waiting": true});
			$(self.element).html("");

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					schemeURI: self.options.schemeURI,
					offset:	 0,
					limit: 0
				},
				contentType: "application/javascript",
				cache: self.options.useCache,
				dataType: "jsonp",
				context: self,
				crossDomain: true,
				success: self.updateSuccess,
				error: self.updateError,
				complete: self.updateComplete
			});

			$(self.element).header({visible: self.options.displayHeader});
			$(self.element).footer({visible: self.options.displayFooter});
		},

		updateSuccess: function(data, textStatus, jqXHR) {
			var	self = this, list;

			// ensure element is cleared before	adding anything
			$(self.element).html("");

			list = $("<ul/>").appendTo(self.element)
				.css({
					"list-style-type": "disc",
					"padding-left":	"25px",
					margin:	"1px"
				});

			data.sort(function(a, b) {
				var lblA = $(a).attr("label"),
					lblB = $(b).attr("label");
				if (lblA < lblB) { return -1; }
				if (lblA > lblB) { return 1; }
				return 0;
			});



			$(data).each(function(obj) {
				var	uri	= $(this).attr("uri"),
					label =	$(this).attr("label") === "" ? uri : $(this).attr("label");
					//lang = $(this).attr("label lang");

				//if(lang == "en") //todo...
				$("<li><a href='" +	uri	+ "'>" + label + "</a></li>").appendTo(list);
			});

			// unblock the control
			$(self.element).waitable({"waiting": false});
		},

		updateError: function(jqXHR, textStatus, errorThrown) {
			var	self = this;
			//alert("error:" + textStatus	+ "	| "	+ errorThrown);
			$().log("updateError", textStatus);
			$(self.element).waitable({"waiting": false});
		},

		updateComplete:	function(jqXHR,	textStatus)	{
			var	self = this;
			$(self.element).waitable({"waiting": false});
		}

	});	// end of widget code

	// any elements of class usw-seneschal-topconcepts automatically become one
	// arbitrary default schemeURI is http://purl.org/heritagedata/schemes/mda_obj
	$(window).load(function(){
		$(".usw-seneschal-topconcepts").topconcepts();
	});

}(jQuery));	//end of main jquery closure
