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
