/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.owl
Summary	: Constants	for	namespace, entity and property URIs
Example	: alert(usw.uri.owl.ALLDIFFERENT) |	alert(usw.uri.owl["ALLDIFFERENT"])
// either call returns "http://www.w3.org/2002/07/owl#AllDifferent"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific) STAR.usw.uri.js
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.owl	= {NS :	"http://www.w3.org/2002/07/owl#"};
usw.uri.owl	= {
	// entities
	ALLDIFFERENT		: usw.uri.owl.NS + "AllDifferent",
	ANNOTATIONPROPERTY	: usw.uri.owl.NS + "AnnotationProperty",
	CLASS				: usw.uri.owl.NS + "Class",
	DATARANGE			: usw.uri.owl.NS + "DataRange",
	DATATYPEPROPERTY	: usw.uri.owl.NS + "DatatypeProperty",
	DEPRECATEDCLASS		: usw.uri.owl.NS + "DeprecatedClass",
	DEPRECATEDPROPERTY	: usw.uri.owl.NS + "DeprecatedProperty",
	FUNCTIONALPROPERTY	: usw.uri.owl.NS + "FunctionalProperty",
	INVERSEFUNCTIONALPROPERTY :	usw.uri.owl.NS + "InverseFunctionalProperty",
	NOTHING				: usw.uri.owl.NS + "Nothing",
	OBJECTPROPERTY		: usw.uri.owl.NS + "ObjectProperty",
	ONTOLOGY			: usw.uri.owl.NS + "Ontology",
	ONTOLOGYPROPERTY	: usw.uri.owl.NS + "OntologyProperty",
	RESTRICTION			: usw.uri.owl.NS + "Restriction",
	SYMMETRICPROPERTY	: usw.uri.owl.NS + "SymmetricProperty",
	THING				: usw.uri.owl.NS + "Thing",
	TRANSITIVEPROPERTY	: usw.uri.owl.NS + "TransitiveProperty",
	// properties
	ALLVALUESFROM		: usw.uri.owl.NS + "allValuesFrom",
	BACKWARDCOMPATIBLEWITH : usw.uri.owl.NS	+ "backwardCompatibleWith",
	CARDINALITY			: usw.uri.owl.NS + "cardinality",
	COMPLEMENTOF		: usw.uri.owl.NS + "complementOf",
	DIFFERENTFROM		: usw.uri.owl.NS + "differentFrom",
	DISJOINTWITH		: usw.uri.owl.NS + "disjointWith",
	DISTINCTMEMBERS		: usw.uri.owl.NS + "distinctMembers",
	EQUIVALENTCLASS		: usw.uri.owl.NS + "equivalentClass",
	EQUIVALENTPROPERTY	: usw.uri.owl.NS + "equivalentProperty",
	HASVALUE			: usw.uri.owl.NS + "hasValue",
	IMPORTS				: usw.uri.owl.NS + "imports",
	INCOMPATIBLEWITH	: usw.uri.owl.NS + "incompatibleWith",
	INTERSECTIONOF		: usw.uri.owl.NS + "intersectionOf",
	INVERSEOF			: usw.uri.owl.NS + "inverseOf",
	MAXCARDINALITY		: usw.uri.owl.NS + "maxCardinality",
	MINCARDINALITY		: usw.uri.owl.NS + "minCardinality",
	ONEOF				: usw.uri.owl.NS + "oneOf",
	ONPROPERTY			: usw.uri.owl.NS + "onProperty",
	PRIORVERSION		: usw.uri.owl.NS + "priorVersion",
	SAMEAS				: usw.uri.owl.NS + "sameAs",
	SOMEVALUESFROM		: usw.uri.owl.NS + "someValuesFrom",
	UNIONOF				: usw.uri.owl.NS + "unionOf",
	VERSIONINFO			: usw.uri.owl.NS + "versionInfo"
};
