/*jslint browser: true, nomen: true, white: true, continue: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.widget-seneschal.schemedetails
Version	: 20140117
Summary	: display details of a single concept base on conceptURI
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	usw.seneschal.waitable.js
Example	: $("#div1").schemedetails();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

19/12/2010 CFB Extracted and adapted from original STAR.UI controls script
19/06/2014 CFB elements with class usw-seneschal-schemedetails automatically become one
===============================================================================
*/
(function($) { // start	of main	jQuery closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget('seneschal.schemedetails',	{

		//Default options
		options: {
			version: "20140117",
			serviceURI:	"http://www.heritagedata.org/live/services/getResource.php",
			schemeURI: "http://purl.org/heritagedata/schemes/1",
			useCache: true
		},

		// Called on initialization
		_create: function(options) {
			var	self = this;

			// override	default	options	with any passed	in
			self.options = $.extend(self.options, options);
			$(self.element).addClass("usw-seneschal");
			$(self.element).addClass("usw-seneschal-schemedetails");
			self.element.waitable({"waiting": false});

			self.element.css({
				//width: "100%",
				//height: "100%",
				//background: "lightyellow",
				//border: "1px solid gray",
				"text-align":"left",
				//padding: "3px",
				"overflow-y": "scroll"
			});

			$("<div	class='title'/>").appendTo(self.element).css({"font-weight"	: "bold"});
			$("<div	class='description'/>").appendTo(self.element).css({"margin-top" : "2px"});

			self._refresh();
		},	// end function '_create'

		// React to	option changes after initialization
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

			// no point	proceeding if no URI
			if (self.options.schemeURI === "") { return; }

			$(self.element).waitable({"waiting": true});

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					uri: self.options.schemeURI
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
		},	// end function '_refresh'

		updateSuccess:	function(data) {
			var	self = this,
				scheme = data[self.options.schemeURI],
				titles = [],
				descriptions = [],
				property, obj1, key1, obj2, value, lang, s;

			for	(property in scheme) {
				if(scheme.hasOwnProperty(property)) {
					obj1 = scheme[property];
					for(key1 in obj1) {
						if(obj1.hasOwnProperty(key1)) {
							obj2 = obj1[key1];

							if(property	===	usw.uri.dcterms.TITLE ||
								property === usw.uri.dcterms.DESCRIPTION) {
								value =	(obj2.value || "");
								lang = (obj2.lang || "");
								s =	value +	(lang === "en" ? "" : " [" + lang + "]");
								switch(property) {
									case usw.uri.dcterms.TITLE:
										titles.push(s);break;
									case usw.uri.dcterms.DESCRIPTION:
										descriptions.push(s);break;
								}
							}
						}
					}
				}
			}

			//$("#identifier:first", self.element).html(self.options.conceptURI);
			$("div.title:first", self.element).html(titles.join("<br>"));
			$("div.description:first", self.element).html(descriptions.join("<br>"));

			$(self.element).waitable({"waiting": false});
		},	// end function 'updateSuccess

		updateError: function(jqXHR, textStatus, errorThrown) {
			var	self = this;
			alert("error:" + textStatus	+ "	| "	+ errorThrown);
			//$().log("refreshError", status);
			$(self.results).waitable({"waiting": false});
		},	// end function 'updateError'

		updateComplete:	function(jqXHR,	textStatus)	{
			var	self = this;
			//alert("complete");
			$(self.element).waitable({"waiting": false});
		}	// end function 'updateComplete'

	});	//end of usw.seneschal.schemedetails

	// any elements with class usw-seneschal-schemedetails automatically become one
	// arbitrary default scheme URI is "http://purl.org/heritagedata/schemes/1"
	$(window).load(function(){
		$(".usw-seneschal-schemedetails").schemedetails();
	});

}(jQuery));	//end of main jQuery closure
