/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.skosxl
Summary	: Constants	for	namespace, entity and property URIs
Example	: alert(usw.uri.skosxl.PREFLABEL) |	alert(usw.uri.skosxl["PREFLABEL"])
		  either call returns "http://www.w3.org/2008/05/skos-xl#prefLabel"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific)
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.skosxl = {NS : "http://www.w3.org/2008/05/skos-xl#"};
usw.uri.skosxl = {
	ALTLABEL		: usw.uri.skosxl.NS	+ "altLabel",
	HIDDENLABEL		: usw.uri.skosxl.NS	+ "hiddenLabel",
	LABEL			: usw.uri.skosxl.NS	+ "Label",
	LABELRELATION	: usw.uri.skosxl.NS	+ "labelRelation",
	LITERALFORM		: usw.uri.skosxl.NS	+ "literalForm",
	PREFLABEL		: usw.uri.skosxl.NS	+ "prefLabel"
};
