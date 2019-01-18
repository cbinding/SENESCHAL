/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery)/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.dcterms
Summary	: Constants	for	namespace, entity and property URIs
Example	: usage: alert(usw.uri.dcterms.SUBJECTSCHEME) |	alert(usw.uri.dcterms["SUBJECTSCHEME"])
// either call returns "http://purl.org/dc/terms/SubjectScheme"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific) STAR.usw.uri.js
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.dcterms	= {NS :	"http://purl.org/dc/terms/"};
usw.uri.dcterms	= {
	ABSTRACT		: usw.uri.dcterms.NS + "abstract",
	ACCESSRIGHTS	: usw.uri.dcterms.NS + "accessRights",
	ACCRUALMETHOD	: usw.uri.dcterms.NS + "accrualMethod",
	ACCRUALPERIODICITY	: usw.uri.dcterms.NS + "accrualPeriodicity",
	ACCRUALPOLICY	: usw.uri.dcterms.NS + "accrualPolicy",
	ALTERNATIVE		: usw.uri.dcterms.NS + "alternative",
	AUDIENCE		: usw.uri.dcterms.NS + "audience",
	AVAILABLE		: usw.uri.dcterms.NS + "available",
	BIBLIOGRAPHICCITATION :	usw.uri.dcterms.NS + "bibliographicCitation",
	CONFORMSTO		: usw.uri.dcterms.NS + "conformsTo",
	CREATED			: usw.uri.dcterms.NS + "created",
	DATEACCEPTED	: usw.uri.dcterms.NS + "dateAccepted",
	DATECOPYRIGHTED	: usw.uri.dcterms.NS + "dateCopyrighted",
	DATESCHEME		: usw.uri.dcterms.NS + "DateScheme",
	DATESUBMITTED	: usw.uri.dcterms.NS + "dateSubmitted",
	DESCRIPTION		: usw.uri.dcterms.NS + "description",
	EDUCATIONLEVEL:	usw.uri.dcterms.NS + "educationLevel",
	EXTENT			: usw.uri.dcterms.NS + "extent",
	FORMATSCHEME	: usw.uri.dcterms.NS + "FormatScheme",
	HASFORMAT		: usw.uri.dcterms.NS + "hasFormat",
	HASPART			: usw.uri.dcterms.NS + "hasPart",
	HASVERSION		: usw.uri.dcterms.NS + "hasVersion",
	IDENTIFIERSCHEME	: usw.uri.dcterms.NS + "IdentifierScheme",
	INSTRUCTIONALMETHOD	: usw.uri.dcterms.NS + "instructionalMethod",
	ISFORMATOF		: usw.uri.dcterms.NS + "isFormatOf",
	ISPARTOF		: usw.uri.dcterms.NS + "isPartOf",
	ISREFERENCEDBY	: usw.uri.dcterms.NS + "isReferencedBy",
	ISREPLACEDBY	: usw.uri.dcterms.NS + "isReplacedBy",
	ISREQUIREDBY	: usw.uri.dcterms.NS + "isRequiredBy",
	ISSUED			: usw.uri.dcterms.NS + "issued",
	ISVERSIONOF		: usw.uri.dcterms.NS + "isVersionOf",
	LANGUAGESCHEME	: usw.uri.dcterms.NS + "LanguageScheme",
	LICENSE			: usw.uri.dcterms.NS + "license",
	MEDIATOR		: usw.uri.dcterms.NS + "mediator",
	MEDIUM			: usw.uri.dcterms.NS + "medium",
	MODIFIED		: usw.uri.dcterms.NS + "modified",
	PROVENANCE		: usw.uri.dcterms.NS + "provenance",
	REFERENCES		: usw.uri.dcterms.NS + "references",
	RELATIONSCHEME	: usw.uri.dcterms.NS + "RelationScheme",
	REPLACES		: usw.uri.dcterms.NS + "replaces",
	REQUIRES		: usw.uri.dcterms.NS + "requires",
	RIGHTSHOLDER	: usw.uri.dcterms.NS + "rightsHolder",
	SOURCESCHEME	: usw.uri.dcterms.NS + "SourceScheme",
	SPATIAL			: usw.uri.dcterms.NS + "spatial",
	SPATIALSCHEME	: usw.uri.dcterms.NS + "SpatialScheme",
	SUBJECTSCHEME	: usw.uri.dcterms.NS + "SubjectScheme",
	TABLEOFCONTENTS	: usw.uri.dcterms.NS + "tableOfContents",
	TEMPORAL		: usw.uri.dcterms.NS + "temporal",
	TEMPORALSCHEME	: usw.uri.dcterms.NS + "TemporalScheme",
	TITLE			: usw.uri.dcterms.NS + "title",
	TYPESCHEME		: usw.uri.dcterms.NS + "TypeScheme",
	VALID			: usw.uri.dcterms.NS + "valid"
};
/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.skos
Summary	: Constants	for	namespace, entity and property URIs
Example	: usage: alert(usw.uri.skos.CONCEPT) | alert(usw.uri.skos["CONCEPT"])
		  either call returns "http://www.w3.org/2004/02/skos/core#Concept"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific)
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.skos = {NS : "http://www.w3.org/2004/02/skos/core#"};
usw.uri.skos = {
	ALTLABEL			: usw.uri.skos.NS +	"altLabel",
	ALTSYMBOL			: usw.uri.skos.NS +	"altSymbol",
	BROADER				: usw.uri.skos.NS +	"broader",
	CHANGENOTE			: usw.uri.skos.NS +	"changeNote",
	COLLECTABLEPROPERTY	: usw.uri.skos.NS +	"CollectableProperty",
	COLLECTION			: usw.uri.skos.NS +	"Collection",
	CONCEPT				: usw.uri.skos.NS +	"Concept",
	CONCEPTSCHEME		: usw.uri.skos.NS +	"ConceptScheme",
	DEFINITION			: usw.uri.skos.NS +	"definition",
	EDITORIALNOTE		: usw.uri.skos.NS +	"editorialNote",
	EXAMPLE				: usw.uri.skos.NS +	"example",
	HASTOPCONCEPT		: usw.uri.skos.NS +	"hasTopConcept",
	HIDDENLABEL			: usw.uri.skos.NS +	"hiddenLabel",
	HISTORYNOTE			: usw.uri.skos.NS +	"historyNote",
	INSCHEME			: usw.uri.skos.NS +	"inScheme",
	ISPRIMARYSUBJECTOF	: usw.uri.skos.NS +	"isPrimarySubjectOf",
	ISSUBJECTOF			: usw.uri.skos.NS +	"isSubjectOf",
	MEMBER				: usw.uri.skos.NS +	"member",
	MEMBERLIST			: usw.uri.skos.NS +	"memberList",
	NARROWER			: usw.uri.skos.NS +	"narrower",
	NOTE				: usw.uri.skos.NS +	"note",
	ORDEREDCOLLECTION	: usw.uri.skos.NS +	"OrderedCollection",
	PREFLABEL			: usw.uri.skos.NS +	"prefLabel",
	PREFSYMBOL			: usw.uri.skos.NS +	"prefSymbol",
	PRIMARYSUBJECT		: usw.uri.skos.NS +	"primarySubject",
	RELATED				: usw.uri.skos.NS +	"related",
	SCOPENOTE			: usw.uri.skos.NS +	"scopeNote",
	SEMANTICRELATION	: usw.uri.skos.NS +	"semanticRelation",
	SUBJECT				: usw.uri.skos.NS +	"subject",
	SUBJECTINDICATOR	: usw.uri.skos.NS +	"subjectIndicator",
	SYMBOL				: usw.uri.skos.NS +	"symbol"
};
/*jslint browser: true, nomen: true, white: true */
/*global $, jQuery, alert*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.util
Summary	: General static utility functions
Example	: var degrees =	usw.seneschal.util.radians2degrees(3);
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Initiallty created script, checked with	jslint.com
===============================================================================
*/

// set up namespace
var	usw	= this.usw || {};
usw.seneschal =	(usw.seneschal || {});

(function () {	// start of	main javascript	closure

	"use strict"; // strict	mode pragma

	// general static utility functions
	usw.seneschal.util = {

		// Convert radians into	degrees.
		// Usage: degrees =	usw.seneschal.util.radians2degrees(3);
		radians2degrees: function (radians)	{
			return (parseFloat(radians || 0) * (180	/ Math.PI));
		},	// end function 'radianstodegrees'

		// Convert degrees into	radians.
		// Usage: radians =	usw.seneschal.degrees2radians(33);
		degrees2radians: function (degrees)	{
			return (parseFloat(degrees || 0) * (Math.PI	/ 180));
		},	// end function 'degreestoradians'

		// Confine value to	within a specified range
		// Usage: val =	usw.seneschal.confine(val, 1, 100);
		confine: function (val,	min, max) {
			if (val	< min) { return	min; }
			if (val	> max) { return	max; }
			return val;
		},	// end function 'confine'

		// from	"Javascript: The Good Parts" (Douglas Crockford)
		// allows functions to handle single values OR arrays of values
		isarray: function(value) {
			return value &&
				typeof value === 'object' &&
				typeof value.length	===	'number' &&
				typeof value.splice	===	'function' &&
				!(value.propertyIsEnumerable('length'));
		},	// end function 'isarray'

		// include css or js into web page.	Function obtained from web, origin uncertain
		// Ensure prerequisites will be present. Usage: usw.seneschal.util.include(myscript.js);
		include: function (url) {
			var element, head;

			switch(url.split(".").pop()) {
				case "css":
					element = document.createElement("link");
					element.setAttribute("rel", "stylesheet");
					element.setAttribute("type", "text/css");
					element.setAttribute("href", url);
					break;
				case "js":
					element = document.createElement("script");
					element.setAttribute("language", "javascript");
					element.setAttribute("src", url);
					break;
				default:
					if (window.console) {
						window.console.error("could not identify", url, "skip include");
					}
					return;
			}
			head = document.querySelector("head");
			if (head.innerHTML.indexOf(element.outerHTML )!== -1) {
				if (window.console) {
					 window.console.warn("Duplicate include, skipping: ", url);
				}
			}
			else {
				head.appendChild(element);
			}
		},	// end function 'include'

		// Generate	positive random	integer	up to specified	range
		// Usage: var x = usw.seneschal.util.random(50);
		random:	function (range) {
			return Math.floor(Math.random()	* parseInt(range, 10));
		},	// end function 'random'

		// Create log element and append text for display
		// Usage: usw.seneschal.util.log("hello	world");
		log: function (txt)	{
			var	element = document.getElementById('usw-seneschal-util-log'),
				msg	= document.createElement('div');

			if(!element) {
				// create div#usw-seneschal-util-log if it didn't already exist
				element	= document.createElement('div');
				element.setAttribute('id', 'usw-seneschal-util-log');
				element.style.border='thin solid gray';
				element.style.margin='3px';
				element.style.height='200px';
				element.style.background='lightyellow';
				element.style.overflow='scroll';
				element.appendChild(document.createTextNode('Log'));
				document.body.appendChild(element);
			}
			// append new timestamped message to div#usw-seneschal-util-log
			msg.style.borderTop='thin solid	lightgray';
			msg.appendChild(document.createTextNode(new	Date().toLocaleString()	+ '	' +	txt));
			element.appendChild(msg);
		}	// end function 'log'

	}; // end usw.seneschal.util

	// add trim, ltrim and rtrim functionality to String class
	// (but if using jquery	could just use $.trim(s) instead)
	String.prototype.trim =	function ()	{
		return (this.replace(/^\s+|\s+$/g, ""));
	};
	String.prototype.ltrim = function () {
		return (this.replace(/^\s+/, ""));
	};
	String.prototype.rtrim = function () {
		return (this.replace(/\s+$/, ""));
	};

	// Add max and min functionality to	Array class
	// get the maximum value from an array
	Array.prototype.max	= function () {
		return Math.max.apply(Math,	this);
	};
	// get the minimum value from an array
	Array.prototype.min	= function () {
		return Math.min.apply(Math,	this);
	};

}()); // end of	main javascript	closure
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
/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: Any
Classes	: usw.seneschal.header.js
Summary	: Adds a text header onto an element
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,
		  jquery.event.resize.js, img/collapse.gif,	img/expand.gif
Example	:$('.tmp1').header({text: 'my header', collapsible:	true});
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

Ref	Who	Date		Details
===	===	====		=======
001	CFB	06/06/2013	Initially created script, adapted from older STAR.UI script
===============================================================================
*/
(function($) { //start of main jQuery closure
	"use strict"; // strict	mode pragma

	$.widget('widget.header', {

		// stateful	defaults
		options: {
			text: "header",
			collapsible: false,
			visible: true
		},

		// initialization code (runs once only)
		_create: function(options) {
			var	self = this, ctlCollapse;
			self.options = $.extend(self.options, options);

			//Create and style elements	representing header
			self.header	= $("<div></div>")
				.addClass("usw-seneschal")
				.addClass("usw-seneschal-header")
				.insertBefore(self.element)
				.css({
					"width"	: $(self.element).innerWidth(),
					//"color" :	"ghostwhite",
					//"background-color" : "dimgray",
					"padding-left" : "2px",
					"margin-top" : $(self.element).css("margin-top"),
					"margin-left" :	$(self.element).css("margin-left"),
					"margin-right" : $(self.element).css("margin-right"),
					"margin-bottom"	: "0px",
					"height" : "25px"
				});

			self.element.css({
				"margin-top" : "0px"
				//height: self.element.height -	25,
				//top: self.element.top	+ 25
				});

			$("<span class='usw-seneschal-header-text'>" + self.options.txt	+ "</span>")
				.css({
					"margin" : "3px",
					"float"	: "left",
					"color"	:  "ghostwhite"
				}).appendTo(self.header);

			ctlCollapse	= $("<span class='usw-seneschal-header-ctl'></span>")
				.css({
					"margin" : "3px",
					"float"	: "right",
					"vertical-align" : "middle"
				}).appendTo(self.header);

			$("<img	class='usw-seneschal-header-ctl-img' src='img/collapse.gif'></img>")
				.appendTo(ctlCollapse);

			if(self.options.collapsible) {
				$(ctlCollapse).css("display", "inline");
				$(self.header)
					.css("cursor", "pointer")
					.click(function() {
						$(this).next().slideToggle('fast');
						var	x =	$(this).next().height(),
						img	= (x <=	1 ?	'img/collapse.gif' : 'img/expand.gif');
						$(".usw-seneschal-header-ctl-img", self.header).attr("src",	img);
					});
			}
			else {
				$(ctlCollapse).css("display","none");
				$(self.header).css("cursor", "default");
			}

			$(self.element).resize(function() {
				self._refresh();
			});

			self._refresh();
		},	// end function '_create'

		// any option set after	control	loads
		// causes control to refresh itself
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
			$(self.header).width($(self.element).width());

			if (self.options.text) {
				 $(".usw-seneschal-header-text:first", self.header).html(self.options.text);
			}

			if (self.options.visible) {
				$(self.header).show();
			}
			else {
				$(self.header).hide();
			}
		}	// end function '_refresh'

	});	// end widget usw.seneschal.header

}(jQuery));	//end of main jQuery closure
/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: Any
Classes	: usw.seneschal.footer.js
Summary	: Adds a text footer onto an element
Require	: jquery-1.7.2.min.js, jquery.ui.widget.min.js,	jquery.event.resize.js
Example	:$('.tmp1').footer({text: 'my footer'});
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History

06/06/2013	CFB	Initially created script, adapted from older STAR.UI script
===============================================================================
*/
(function($) { //start of main jQuery closure
	"use strict"; // strict	mode pragma

	 $.widget('widget.footer', {

			// stateful	defaults
			options: {
				text: "footer",
				collapsible: false,
				visible: true
			},

			// initialization code (runs once only)
			_create: function(options) {
				var	self = this;
				self.options = $.extend(self.options, options);

				// create and style	footer element
				self.footer	= $("<div></div>")
					.addClass("usw-seneschal")
					.addClass("usw-seneschal-footer")
					.insertAfter(self.element)
					.css({
						"width"	: $(self.element).width(),
						"margin-top" : "0px",
						"margin-left" :	$(self.element).css("margin-left"),
						"margin-right" : $(self.element).css("margin-right"),
						"margin-bottom"	: $(self.element).css("margin-bottom"),
						"font" : $(self.element).css("font"),
						"padding" :	"0px",
						"border-top" : "0px",
						"height" : "25px",
						"cursor" : "default"
					});
				$(self.element)
					.css({
					"margin-bottom": "0px"
					//"border-bottom": "0px"
				});


				$("<span class='usw-seneschal-footer-text'>" + self.options.text + "</span>")
					.appendTo(self.footer)
					.css({
						"margin" : "3px",
						"float"	: "left"
					});

				$(self.element).resize(function() {
					self._refresh();
				});

				self._refresh();
			},	// end function '_create'


			// set an option after control has loaded
			_setOption:	function(key, value) {
				var	self = this;

				//clean	up input
				key	= $.trim(key ||	'');
				value =	$.trim(value ||	'');

				// do nothing if same value	is passed
				if(value === self.options[key])	{
					return;
				}

				// change the option value and refresh the widget
				self.options[key] =	value;
				self._refresh();
			},	// end function '_setOption'

			_refresh: function() {
				var	self = this;
				$(self.footer).width($(self.element).width());

				$(".usw-seneschal-footer-text:first", self.footer).html(self.options.text);

				if(self.options.visible) {
					$(self.footer).show();
				}
				else {
					$(self.footer).hide();
				}
			},	// end function '_refresh'

			destroy: function()	{
				var	self = this;
				self.element.removeClass("usw-seneschal-footer");
			}
		});	// end widget widget.footer

}(jQuery));	//end of main jQuery closure
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
			serviceURI:	"https://www.heritagedata.org/live/services/getSchemes",
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
License	: https://creativecommons.org/licenses/by/3.0/
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
			serviceURI:	"https://www.heritagedata.org/live/services/getTopConceptsForScheme",
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
			//serviceURI:	"http://heritagedata.localhost/live/services/getResource.php",
			serviceURI:	"https://www.heritagedata.org/live/services/getResource.php",
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
/*jslint browser: true, nomen: true, white: true */
/*global $, jQuery, alert, usw*/
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: SENESCHAL
Classes	: usw.seneschal.conceptdetails
Version	: 20140619
Summary	: display details of a single concept based	on conceptURI
Require	: jquery-XXX.min.js, jquery.ui.widget.min.js, usw.seneschal.waitable.js, usw.uri.skos.js
Example	: $("#div1").conceptdetails(); OR <div class='usw-seneschal-conceptdetails'></div>
License	: https://creativecommons.org/licenses/by/3.0/
===============================================================================
History

17/01/2014	CFB	Extracted and adapted from original STAR.UI controls script
19/06/2014	CFB elements with class usw-seneschal-conceptdetails automatically become one
===============================================================================
*/
(function ($) {	// start of	main jQuery	closure
	"use strict"; // strict	mode pragma

	$.support.cors = true;

	$.widget('seneschal.conceptdetails', {

		//Default options
		options: {
			version: "20140619",
			serviceURI:	"https://www.heritagedata.org/live/services/getResource.php",
			conceptURI:	"http://purl.org/heritagedata/schemes/1/concepts/449", // an arbitrary default
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

	// any elements with class usw-seneschal-conceptdetails automatically become one
	// default concept URI is "http://purl.org/heritagedata/schemes/1/concepts/447"
	$(window).load(function(){
		$(".usw-seneschal-conceptdetails").conceptdetails();
	});

}(jQuery));	//end of main jQuery closure
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
License	: https://creativecommons.org/licenses/by/3.0/
===============================================================================
History

20/01/2014 CFB Initially created script
19/06/2014 CFB Elements with class usw-seneschal-conceptdetailscomposite automatically become one
===============================================================================
*/
(function($) { //start of main jquery closure
	"use strict"; // strict	mode pragma

	$.support.cors	= true;

	$.widget("seneschal.conceptdetailscomposite", {	//start	of widget code

		// stateful	defaults
		options: {
			conceptURI:	"http://purl.org/heritagedata/schemes/mda_obj/concepts/96662", //arbitrary default
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

	// any elements with class usw-seneschal-conceptdetailscomposite automatically become one
	// arbitrary default concept URI is "http://purl.org/heritagedata/schemes/1/concepts/447"
	$(window).load(function(){
		$(".usw-seneschal-conceptdetailscomposite").conceptdetailscomposite();
	});

}(jQuery));	//end of main jquery closure
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
License	: https://creativecommons.org/licenses/by/3.0/
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
			serviceURI:	"https://www.heritagedata.org/live/services/getConceptLabelMatch",
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
