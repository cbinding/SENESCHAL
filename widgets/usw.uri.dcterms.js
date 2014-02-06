/*jslint browser: true, nomen: true, white: true, unparam: true */
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
