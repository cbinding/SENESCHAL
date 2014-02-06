/*jslint browser: true, nomen: true, white: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.conceptdetails
Version	: 20140117
Summary	: display details of a single concept based	on conceptURI
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	usw.seneschal.waitable.js
Example	: $("#div1").conceptdetails();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

17/01/2014	CFB	Extracted and adapted from original STAR.UI controls script
===============================================================================
*/
(function ($) {	// start of	main jQuery	closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget('seneschal.conceptdetails', {

		//Default options
		options: {
			version: "20140117",
			serviceURI:	"http://www.heritagedata.org/live/services/getResource.php",
			conceptURI:	"",
			useCache: true
		},

		// Called on initialization
		_create: function (options)	{
			var	self = this;

			// override	default	options	with any passed	in
			self.options = $.extend(self.options, options);

			$(self.element)
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-conceptdetails")
				//.waitable({"waiting":	false})
				.css({
					"overflow-y": "scroll",
					"text-align": "left"
					//padding: "0px",
					//margin: "0px"
				});

			$("<div	class='prefLabels'/>").appendTo(self.element).css({"font-weight" : "bold"});
			$("<div	class='altLabels'/>").appendTo(self.element).css({"font-style" : "italic", "margin-top": "2px"});
			$("<div	class='scopeNotes'/>").appendTo(self.element).css({"margin-top"	: "2px"});

			self._refresh();
		},

		// React to	option changes after initialization
		_setOption:	function (key, value) {
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

		_refresh: function () {
			var	self = this;

			// no point	proceeding if no URI
			if (self.options.conceptURI	===	"")	{
				return;
			}

			$(self.element).waitable({"waiting": true});

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					uri: self.options.conceptURI
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

		updateSuccess:	function (data,	textStatus,	jqXHR) {
			var	self = this, concept = data[self.options.conceptURI],
				prefLabels = [], altLabels = [], scopeNotes	= [],
				property, obj1, obj2, key1, value, lang, s;

			for	(property in concept) {
				if (concept.hasOwnProperty(property)) {
					obj1 = concept[property];
					for(key1 in	obj1) {
						if (obj1.hasOwnProperty(key1))	{
							obj2 = obj1[key1];

							if(property	===	usw.uri.skos.PREFLABEL ||
								property === usw.uri.skos.ALTLABEL ||
								property === usw.uri.skos.SCOPENOTE) {

								value =	(obj2.value || "");
								lang = (obj2.lang || "");
								s =	value +	((lang === "en" || lang === "") ? "" : " <small>[" + lang + "]</small>");
								switch(property) {
									case usw.uri.skos.PREFLABEL:
										prefLabels.push(s);break;
									case usw.uri.skos.ALTLABEL:
										altLabels.push(s);break;
									case usw.uri.skos.SCOPENOTE:
										scopeNotes.push(s);break;
								}
							}
						}
					}
				}
			}

			//$("#identifier:first", self.element).html(self.options.conceptURI);
			$("div.prefLabels:first", self.element).html(prefLabels.length === 0 ? "" : prefLabels.join("<br>"));
			$("div.altLabels:first", self.element).html(altLabels.length === 0 ? "" : altLabels.join("<br>"));
			$("div.scopeNotes:first", self.element).html(scopeNotes.length === 0 ? "" : scopeNotes.join("<br>"));

			$(self.element).waitable({"waiting": false});
		},

		updateError: function (jqXHR, textStatus, errorThrown)	{
			var	self = this;
			alert("error:" + textStatus	+ "	| "	+ errorThrown);
			//$().log("refreshError", status);
			$(self.results).waitable({"waiting": false});
		},

		updateComplete:	function (jqXHR, textStatus) {
			var	self = this;
			//alert("complete");
			$(self.element).waitable({"waiting": false});
		}
	});	//end of usw.seneschal.conceptdetails

}(jQuery));	//end of main jQuery closure
