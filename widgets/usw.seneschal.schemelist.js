/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.schemelist.js
Summary	: Selectable drop down list	of seneschal concept schemes
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	usw.seneschal.waitable.js
Example	: $("#div1").schemelist();
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

15/01/2014 CFB Initially created script
19/06/2014 CFB any elements of class usw-seneschal-schemelist automatically become one
===============================================================================
*/
(function ($) {	//start	of main	jquery closure
	"use strict"; // strict	mode pragma

	 $.support.cors	= true;

	$.widget("seneschal.schemelist", { //start of widget code

		// stateful	defaults
		options: {
			useCache: true,
			title: "Concept	schemes",
			serviceURI:	"http://www.heritagedata.org/live/services/getSchemes",
			displayHeader: true
		},

		// initialization code (runs once only)
		_create: function (options)	{
			var	self = this;
			self.options = $.extend(self.options, options);

			self.element
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-schemelist")
				.waitable({waiting:	false})
				.header({text: self.options.title, visible:	self.options.displayHeader});

			self.schemes = $("<select class='schemes'/>")
				.appendTo(self.element)
				.css({
					width: $(self.element).innerWidth(),
					background:	self.element.css("background"),
					color: "dimgray"
				});

			//what to do when new value	is selected
			$(self.schemes).change(function() {
				//get details of the selected item
				var	uri	= $(this).val(),
					label =	this.options[this.selectedIndex].text;

				//trigger custom event to notify external controls of selection
				$(self.element).trigger('selected',	{"uri":	uri, "label": label});
				return false;
			});

			this._refresh();
		},

		// put this.element	back to	how	it was
		destroy: function () {
			this.element.remove(this.input);
			this.element.removeClass("usw-seneschal-schemelist");
			this.element.removeClass("usw-seneschal");
			//$.Widget.prototype.destroy.call(this);
		},

		// set an option after control has loaded
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

		// redraw the control
		_refresh: function () {
			var	self = this;

			$(".schemes", self.element).html("");
			$(self.element).header({visible: self.options.displayHeader});
			$(self.element).waitable({waiting: true});

			$.ajax({
			   type: "GET",
			   url:	self.options.serviceURI,
			   data: {
					offset:	0,
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

		// data	returned from service call is an array:
		// [{uri: "x", label: "y", attribution:"z"}]
		updateSuccess:	function (data) {
			var	self = this, schemeList = {}, s, key, scheme, uri, label, attribution, description;

			// sort	data items by label
			data.sort(function (a,b){
				var	lblA = $(a).attr("label"),
					lblB = $(b).attr("label");

				if(lblA	< lblB)	{ return -1; }
				if(lblA	> lblB)	{ return 1;	}
				return 0;
			});

			// group data items	by attribution
			$(data).each(function (obj)	{
				uri	= $(this).attr("uri");
				label =	$(this).attr("label") === "" ? uri : $(this).attr("label");
				attribution	= $(this).attr("attribution");
				description	= $(this).attr("description");

				if(!schemeList[attribution]) { schemeList[attribution] = {}; }
				schemeList[attribution][uri] = {"label": label, "description": description};
				//schemeList[attribution][uri] = label;
			});

			// create nested options to	populate select	control
			s =	"";
			for	(key in	schemeList)
			{
				if (schemeList.hasOwnProperty(key)) {
					s += "<optgroup	label =	'" + key + "'>";
					for(scheme in schemeList[key]) {
						if (schemeList[key].hasOwnProperty(scheme)) {
							s += "<option value='" + scheme	+
								"' title='" + schemeList[key][scheme].description + "'>" +
								schemeList[key][scheme].label + "</option>";
						}
					}
					s += "</optgroup>";
				}
			}

			// populate	select control with	the	options
			$(".schemes", self.element).html(s);

			// 'selected' event	announces currently	selected item
			uri	= $("select", self.element).val();
			label =	$("select option:selected",	self.element).html();
			$(self.element).trigger('selected',	{"uri":	uri, "label": label});

			// unblock the control if it's blocked
			$(self.element).waitable({waiting: false});
		},

		updateError: function (jqXHR, textStatus, errorThrown)	{
			var	self = this;
			alert("error:" + textStatus	+ "	| "	+ errorThrown);
			$(self.element).waitable({waiting: false});
		},

		updateComplete: function (jqXHR, textStatus) {
			var	self = this;
			$(self.element).waitable({waiting: false});
		}

	});	// end of widget code

	// any elements with class usw-seneschal-schemelist automatically become one
	$(window).load(function(){
		$(".usw-seneschal-schemelist").schemelist();
	});

}(jQuery));	//end of main jquery closure
