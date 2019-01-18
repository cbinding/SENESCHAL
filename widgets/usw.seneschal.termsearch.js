/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.termsearch.js
Summary	: Search for terms within specified	ConceptScheme
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	usw.seneschal.waitable.js
Example	: $("#div1").termsearch();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

19/11/2013 CFB Initially created script
17/01/2014 CFB Simplified - icons removed, submit search using enter key
19/06/2014 CFB any elements of class usw-seneschal-termsearch automatically become one
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget("seneschal.termsearch", { //start of widget code

		// default options
		options: {
			placeholder: "Search for...",
			title: "Concept	search",
			useCache: true,
			schemeURI: "http://purl.org/heritagedata/schemes/mda_obj",
			startsWith:	"",
			contains: "",
			limit: 0,
			offset:	0,
			//serviceURI: "http://localhost/heritagedata/getConceptLabelMatch.php"
			serviceURI:	"https://www.heritagedata.org/live/services/getConceptLabelMatch.php"
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this,
				w, h, formElement, searchElement;

			// override	default	options	with any passed	in
			self.options = $.extend(self.options, options);
			self.element
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-termsearch")
				.waitable({"waiting": false})
				.header({"text": self.options.title})
				.footer({"text": "0	results"})
				.css({
					//background: "white",
					//border: "1px solid gray",
					//"text-align":"left"
					"min-height": "150px"
				});

			// dimensions for proportioning	size of	elements
			w =	self.element.innerWidth();
			h =	self.element.innerHeight();

			// build the search	form
			formElement	= $("<form/>").appendTo(self.element);
			$("<select><option value='startswith' selected>Starts With</option><option value='contains'>Contains</option></select>")
				.appendTo(formElement)
				.css({
					cursor:"pointer",
					width: w / 100 * 25
				});
			searchElement =	$("<input type='search'	/>")
				//.val(self.options.placeholder)
				.attr("placeholder", self.options.placeholder) //default text when empty
				.attr("autocomplete", "on")
				.attr("results", 5)	// number of items to show in autocomplete drop-down
				.appendTo(formElement)
				.css({
					"margin-left": "2px",
					width: w / 100 * 60,
					border:	"1px solid lightgray"
				});
			$("<input type='submit'/>")
				.attr("value", "go") //	what to	display	on the button
				.appendTo(formElement)
				.css({
					width: w/100 * 10, //"30px",
					"margin-left": "2px",
					"text-align": "center"
				});

			self.results = $("<div class='results'></div>")
				.appendTo(self.element)
				.css({
					width: w,
					height:	h - $("form:first", self.element).outerHeight(),
					"text-align":"left",
					"overflow-y":"scroll"
				});

			// what	to do when form	is submitted
			$("form", self.element).submit(function() {
				var	startsWith = ($("form select	option:selected", self.element).val() === 'startswith'),
					searchText = $(searchElement).val().trim();
				if(searchText !== self.options.placeholder && searchText !== "")
				{
					if(startsWith) {
						self.options.contains =	"";
						self._setOption("startsWith", searchText);
					}
					else {
						self.options.startsWith	= "";
						self._setOption("contains",	searchText);
					}

					//trigger custom event for external	use.
					//Usage: $('.mysearchelement').bind(function(e,data){alert(data.searchFor);});
					$(self.element).trigger('searchRequest', {"searchFor": searchText, "startsWith": startsWith});
					//alert(x);
					return false;
				}
			});

			// fire	an event to	notify other controls when any result link is clicked
			self.results.on("click", "a", function() {
				var	uri	= $(this).attr('href'),
					label =	$(this).text();
				$(self.element).trigger("selected",	{"uri":	uri, "label": label});
				return false;
			});

			// display concept URI in footer when mouse	passes over	link
			self.element.on("mouseover", "a", function() {
				var	uri	= $(this).attr('href');
				self.element.footer({text: uri});
				return false;
			});
			// reinstate results count in footer after mouse has passed	over link
			self.element.on("mouseout",	"a", function()	{
				var	count =	$("div.results ul li", self.element).length;
				self.element.footer({text: count + " results"});
				return false;
			});
			self.element.on("mouseout",	self.element, function() {
				var	count =	$("div.results ul li", self.element).length;
				self.element.footer({text: count + " results"});
				return false;
			});
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

			// don't search	if there's nothing to search for...
			if (self.options.startsWith === "" && self.options.contains === "") {
				return;
			}

			$(self.element).waitable({"waiting": true});
			$(self.results).html("");
			$(self.element).footer({"text":	"Searching..."});
			//alert( "scheme is	'" + self.options.schemeURI	+ "'");
			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					schemeURI: self.options.schemeURI,
					startsWith:	self.options.startsWith,
					contains: self.options.contains,
					offset:	 self.options.offset,
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
			var	self = this,
				searchText = self.options.startsWith.length	> 0	? self.options.startsWith :	self.options.contains,
				list = $("<ul></ul>").appendTo(self.results)
					.css({
						"list-style-type": "none",
						margin:	"2px",
						padding: "2px"
					});

			// sort	results	alphabetically by label
			data.sort(function(a,b){
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

				// highlight to	show where the match occurs
				RegExp.escape =	function(str) {
					return str.replace(/[.*+?|()\[\]{}\\$^]/g, "\\$&");
				}
				regex =	new	RegExp("(" + RegExp.escape(searchText) + ")", "gi");
				label =	label.replace(regex, "<mark>$1</mark>");

				//if(lang == "en") // TODO - distinguish languages visually?
				txt	= ((lang ==="en" ||	lang === "") ? label : label + " <small>[" + lang +	"]</small>");
				$("<li><a href='" +	uri	+ "'>" + txt + "</a></li>").appendTo(list);
			});

			// unblock the control
			$(self.element).waitable({"waiting": false});
			$(self.element).footer({"text":	data.length	+ "	results"});
		},

		updateError: function(jqXHR, textStatus, errorThrown) {
			var	self = this;
			//alert("error:" + textStatus	+ "	| "	+ errorThrown);
			$(self.element).waitable({"waiting": false});
		},

		updateComplete:	function(jqXHR,	textStatus)	{
			var	self = this;
			$(self.element).waitable({"waiting": false});
		}

	});	// end of widget code

	// any elements with class usw-seneschal-termsearch automatically become one
	// arbitrary default schemeURI is http://purl.org/heritagedata/schemes/mda_obj
	$(window).load(function(){
		$(".usw-seneschal-termsearch").termsearch();
	});

})(jQuery);	//end of main jquery closure
