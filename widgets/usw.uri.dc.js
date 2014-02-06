/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.dc
Summary	: Constants	for	namespace, entity and property URIs
Example	: usage: alert(usw.uri.dc.TITLE) | alert(usw.uri.dc["TITLE"])
// either call returns "http://purl.org/dc/elements/1.1/title"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific)
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.dc = {NS : "http://purl.org/dc/elements/1.1/"};
usw.uri.dc = {
	CONTRIBUTOR	: usw.uri.dc.NS	+ "contributor",
	COVERAGE	: usw.uri.dc.NS	+ "coverage",
	CREATOR		: usw.uri.dc.NS	+ "creator",
	DATE		: usw.uri.dc.NS	+ "date",
	DESCRIPTION	: usw.uri.dc.NS	+ "description",
	FORMAT		: usw.uri.dc.NS	+ "format",
	IDENTIFIER	: usw.uri.dc.NS	+ "identifier",
	LANGUAGE	: usw.uri.dc.NS	+ "language",
	PUBLISHER	: usw.uri.dc.NS	+ "publisher",
	RELATION	: usw.uri.dc.NS	+ "relation",
	RIGHTS		: usw.uri.dc.NS	+ "rights",
	SOURCE		: usw.uri.dc.NS	+ "source",
	SUBJECT		: usw.uri.dc.NS	+ "subject",
	TITLE		: usw.uri.dc.NS	+ "title",
	TYPE		: usw.uri.dc.NS	+ "type"
};
