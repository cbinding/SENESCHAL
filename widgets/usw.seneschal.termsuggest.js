/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.termsuggest.js
Summary	: Suggest terms originating from specified ConceptScheme as user types
Require	: jquery-1.11.0.min.js, jquery.ui.widget.min.js
Example	: $("#div1").termsuggest();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

04/02/2014 CFB Initially created script
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget("seneschal.termsuggest", { //start of widget code

		// default options
		options: {
			searchFor: "",
			useCache: true,
			schemeURI: "http://purl.org/heritagedata/schemes/mda_obj",
			serviceURI:	"http://www.heritagedata.org/live/services/getConceptLabelMatch",
			limit: 10, // max number of items to show in drop down results box
			minLength: 3 // minimum length user input before service call is made
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this,
			w = self.element.innerWidth(),
			h = self.element.innerHeight();

			// override	default	options	with any passed	in
			self.options = $.extend(self.options, options);

			self.element
				.addClass("usw-seneschal-termsuggest")
				.keyup(function(){
					self._setOption("searchFor", $.trim($(this).val()));
				});

			self.results = $("<div class='results'/>")
				.addClass("usw-seneschal")
				.insertAfter(self.element)
				.css({
					position: "absolute",
					left: self.element.position().left,
					top: self.element.position().top + self.element.outerHeight(),
					width: self.element.innerWidth(),
					height: "100px",
					"text-align":"left",
					"overflow-y":"scroll"
				}).hide();

			// fire	an event to	notify other controls when any result link is clicked
			$(self.results).on("click", "a", function() {
				var	uri	= $(this).attr('href'),	label =	$(this).text();
				$(self.element).trigger("selected",	{"uri":	uri, "label": label});
				$(self.element).val(label);
				$(self.results).hide();
				return false;
			});

			$(self.results).focusout(function(){ $(this).hide(); })
		},

		// put this.element	back to	how	it was
		destroy: function()	{
			var	self = this;
			self.element.removeClass("usw-seneschal-termsearch");
			self.element.removeClass("usw-seneschal");
			//$.Widget.prototype.destroy.call(this);
		},

		// set an option after control has loaded
		_setOption:	function(key, value) {
			var	self = this;

			//clean	up input values
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

			// don't search	if there's nothing to search for...
			if(self.options.searchFor.length < self.options.minLength) {
				$(self.results).html("").hide();
				return;
			}

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					schemeURI: self.options.schemeURI,
					startsWith:	self.options.searchFor,
					offset:	 0,
					limit: self.options.limit
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
		},

		updateSuccess:	function(data, textStatus, jqXHR) {
			var	self = this;
			$(self.results).html("");

			var list = $("<ul></ul>").appendTo(self.results)
					.css({
						"list-style-type": "none",
						margin:	"2px",
						padding: "2px"
					});

			// sort	results	alphabetically by label
			data.sort(function(a, b){
				var	lblA = $(a).attr("label"),
					lblB = $(b).attr("label");
				if(lblA	< lblB)	{ return -1; }
				if(lblA > lblB) { return 1; }
				return 0;
			});

			// populate	the	UL results list	element
			$(data).each(function(index, obj) {

				var	uri	= $(this).attr("uri"),
					label =	$(this).attr("label") === "" ? uri : $(this).attr("label"),
					lang = $(this).attr("label lang"), regex, txt;

				//if(lang == "en") // TODO - distinguish languages visually?
				txt	= ((lang ==="en" ||	lang === "") ? label : label + " <small>[" + lang +	"]</small>");
				$("<li><a href='" +	uri	+ "'>" + txt + "</a></li>").appendTo(list);
			});

			self.results.show();
		},

		updateError: function(jqXHR, textStatus, errorThrown) { self.results.hide(); },
		updateComplete:	function(jqXHR,	textStatus)	{}

	});	// end of widget code

	// any elements of class usw-seneschal-termsuggest automatically become one
	// arbitrary default schemeURI is http://purl.org/heritagedata/schemes/mda_obj
	$(window).load(function(){
		$("input.usw-seneschal-termsuggest").termsuggest();
	});

})(jQuery);	//end of main jquery closure
