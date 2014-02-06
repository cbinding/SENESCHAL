/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	Wales
Project	: Any
Classes	: usw.uri.rdfs
Summary	: Constants	for	namespace, entity and property URIs
Example	: alert(usw.uri.rdfs.LABEL)	| alert(usw.uri.rdfs["LABEL"])
		  either call returns "http://www.w3.org/2000/01/rdf-schema#label"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific) STAR.URI.js
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.rdfs = {NS : "http://www.w3.org/2000/01/rdf-schema#"};
usw.uri.rdfs = {
	CLASS		: usw.uri.rdfs.NS +	"Class",
	COMMENT		: usw.uri.rdfs.NS +	"comment",
	CONTAINER	:usw.uri.rdfs.NS + "Container",
	CONTAINERMEMBERSHIPPROPERTY	: usw.uri.rdfs.NS +	"ContainerMembershipProperty",
	DATATYPE	: usw.uri.rdfs.NS +	"Datatype",
	DOMAIN		: usw.uri.rdfs.NS +	"domain",
	ISDEFINEDBY	: usw.uri.rdfs.NS +	"isDefinedBy",
	LABEL		: usw.uri.rdfs.NS +	"label",
	LITERAL		: usw.uri.rdfs.NS +	"Literal",
	MEMBER		: usw.uri.rdfs.NS +	"member",
	RANGE		: usw.uri.rdfs.NS +	"range",
	RESOURCE	: usw.uri.rdfs.NS +	"Resource",
	SEEALSO		: usw.uri.rdfs.NS +	"seeAlso",
	SUBCLASSOF	: usw.uri.rdfs.NS +	"subClassOf",
	SUBPROPERTYOF: usw.uri.rdfs.NS + "subPropertyOf"
};
