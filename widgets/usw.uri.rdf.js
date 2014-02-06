/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: Any
Classes	: usw.uri.rdf
Summary	: Constants	for	namespace, entity and property URIs
Example	: alert(usw.uri.rdf.TYPE) |	alert(usw.uri.rdf["TYPE"])
		  either call returns "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific) STAR.URI.js
===============================================================================
*/

// set up namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.rdf	= {NS: "http://www.w3.org/1999/02/22-rdf-syntax-ns#"};
usw.uri.rdf	= {
	ALT			: usw.uri.rdf.NS + "Alt",
	BAG			: usw.uri.rdf.NS + "Bag",
	FIRST		: usw.uri.rdf.NS + "first",
	ID			: usw.uri.rdf.NS + "ID",
	LIST		: usw.uri.rdf.NS + "List",
	OBJECT		: usw.uri.rdf.NS + "object",
	PREDICATE	: usw.uri.rdf.NS + "predicate",
	PROPERTY	: usw.uri.rdf.NS + "Property",
	REST		: usw.uri.rdf.NS + "rest",
	SEQ			: usw.uri.rdf.NS + "Seq",
	STATEMENT	: usw.uri.rdf.NS + "Statement",
	SUBJECT		: usw.uri.rdf.NS + "subject",
	TYPE		: usw.uri.rdf.NS + "type",
	VALUE		: usw.uri.rdf.NS + "value",
	XMLLITERAL	: usw.uri.rdf.NS + "XMLLiteral"
};
