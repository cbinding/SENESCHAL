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
