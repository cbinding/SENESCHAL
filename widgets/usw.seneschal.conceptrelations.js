/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.conceptrelations
Version	: 20140619
Summary	: List of concepts related to the specified	concept
Require	: jquery-XXX.min.js, jquery.ui.widget.min.js, usw.seneschal.waitable.js,
		  usw.uri.skos.js
Example	: $("#div1").conceptrelations();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

19/11/2013 CFB Initially created script
19/06/2014 CFB elements of class usw-seneschal-conceptrelations automatically become one
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget("seneschal.conceptrelations", { //start of	widget code

		// stateful	defaults
		options: {
			useCache: true,
			serviceURI:	"https://www.heritagedata.org/live/services/getconceptrelations",
			conceptURI:	"http://purl.org/heritagedata/schemes/1/concepts/447"
			//serviceURI: "https://www.heritagedata.org/live/getconceptrelations.php"
			//serviceURI: "http://localhost/heritagedata/getconceptrelations.php"
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this;
			self.options = $.extend(self.options, options);

			self.element.addClass("usw-seneschal");
			self.element.addClass("usw-seneschal-conceptrelations");
			self.element.waitable({waiting:	false});
			self.element.css({
					"min-height": "100px",
					"text-align":"left",
					"overflow-y":"scroll"
				});


			// fire	an event when a	link is	clicked
			self.element.on("click", "a", function() {
				var	uri	= $(this).attr('href'),
					label =	$(this).text();
				self.options.conceptURI = uri;
				$(self.element).trigger("selected",	{"uri":	uri, "label": label});
				self._refresh();
				return false;
			});

			this._refresh();
		},

		// put this.element	back to	how	it was
		destroy: function()	{
			this.element.remove(this.input);
			this.element.removeClass("usw-seneschal-conceptrelations");
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

			// no point	proceeding if no URI
			if (self.options.conceptURI === "") {
				return;
			}

			$(self.element).waitable({"waiting": true});
			$(self.element).html("");

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					conceptURI:	self.options.conceptURI,
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
		},

		updateSuccess:	function(data, textStatus, jqXHR) {
			var	self = this,
				list = $("<ul/>").appendTo(self.element)
				.css({
					"list-style-type": "none",
					"padding": "0px",
					margin:	"1px"
				});

			// case	insensitive	sorting	based on value of both PROPERTY	and	LABEL
			// this	way	we get a sorted	list of	broader, followed by narrower, followed	by related
			data.sort(function(a,b){
				var	lblA = $(a).attr("property").toLowerCase() + $(a).attr("label").toLowerCase(),
					lblB = $(b).attr("property").toLowerCase() + $(b).attr("label").toLowerCase();
				if (lblA < lblB) { return -1; }
				if (lblA > lblB) { return 1; }
				return 0;
			});

			$(data).each(function(obj) {
				var	property = $(this).attr("property"),
					uri	= $(this).attr("uri"),
					label =	$(this).attr("label") === "" ? uri : $(this).attr("label"),
					lang = $(this).attr("label lang"),
					rel;

				if(lang	=== "en") {
					rel	= "";
					switch(property) {
						case usw.uri.skos.BROADER:
							rel	= "<abbr title='broader	term'>BT</abbr>";
							break;
						case usw.uri.skos.NARROWER:
							rel	= "<abbr title='narrower term'>NT</abbr>";
							break;
						case usw.uri.skos.RELATED:
							rel	= "<abbr title='related	term'>RT</abbr>";
							break;
					}
					$("<li>" + rel + " <a href='" +	uri	+ "'>" + label + "</a></li>").appendTo(list);
				}
			});
			//s	+= "</ul>";

			//$(self.element).html(s);
			$("ul",	self.element).css({
				"list-style-type": "none",
				"padding": "0px",
				"margin-left": "5px"
			});

			// unblock the control
			$(self.element).waitable({"waiting": false});
		},

		updateError: function(jqXHR, textStatus, errorThrown) {
			var	self = this;
			$(self.element).waitable({"waiting": false});
		},

		updateComplete: function(jqXHR, textStatus) {
			var	self = this;
			$(self.element).waitable({"waiting": false});
		}

	});	// end of seneschal.conceptrelations widget

	// any elements with class usw-seneschal-conceptrelations automatically become one
	// arbitrary default concept URI is "http://purl.org/heritagedata/schemes/1/concepts/447"
	$(window).load(function(){
		$(".usw-seneschal-conceptrelations").conceptrelations();
	});

}(jQuery));	//end of main jquery closure
