<?php
/*
================================================================================
Creator		: Ceri Binding, University of South Wales
Project		: Any
Classes		: constants defined for URI_RDF, URI_RDFS, URI_OWL, URI_SKOS, 
				URI_SKOSXL, URI_DC, URI_DCTERMS, URI_CC, URI_CRM
Summary		: URI string constants for use in any RDF based projects
License		: Creative Commons CC0 - no rights reserved, just use as you please
================================================================================
Example		:
<?php
	echo URI_SKOS_CONCEPT;	// "http://www.w3.org/2004/02/skos/core#Concept"
	echo abbreviateURI(URI_SKOS_CONCEPT); // "skos:Concept"
?>
================================================================================
History	 :

08/03/2013	CFB created script
================================================================================
*/

// namespace
define ("URI_RDF","http://www.w3.org/1999/02/22-rdf-syntax-ns#"); 
// entities
define ("URI_RDF_ALT", URI_RDF . "Alt");
define ("URI_RDF_BAG", URI_RDF . "Bag");
define ("URI_RDF_LIST", URI_RDF . "List");
define ("URI_RDF_DESCRIPTION", URI_RDF . "Description");
define ("URI_RDF_PROPERTY", URI_RDF . "Property");
define ("URI_RDF_SEQ", URI_RDF . "Seq");
define ("URI_RDF_STATEMENT", URI_RDF . "Statement");
define ("URI_RDF_XMLLITERAL", URI_RDF . "XMLLiteral"); 
// properties
define ("URI_RDF_FIRST", URI_RDF . "first");
define ("URI_RDF_ID", URI_RDF . "ID");
define ("URI_RDF_OBJECT", URI_RDF . "object");
define ("URI_RDF_PREDICATE", URI_RDF . "predicate");
define ("URI_RDF_REST", URI_RDF . "rest");
define ("URI_RDF_SUBJECT", URI_RDF . "subject");
define ("URI_RDF_TYPE", URI_RDF . "type");
define ("URI_RDF_VALUE", URI_RDF . "value");

// namespace
define ("URI_RDFS","http://www.w3.org/2000/01/rdf-schema#"); 
// entities
define ("URI_RDFS_CLASS", URI_RDFS . "Class");
define ("URI_RDFS_CONTAINER", URI_RDFS . "Container");
define ("URI_RDFS_CONTAINERMEMBERSHIPPROPERTY", URI_RDFS . "ContainerMembershipProperty");
define ("URI_RDFS_DATATYPE", URI_RDFS . "Datatype");
define ("URI_RDFS_LITERAL", URI_RDFS . "Literal");
define ("URI_RDFS_RESOURCE", URI_RDFS . "Resource"); 
// properties
define ("URI_RDFS_COMMENT", URI_RDFS . "comment");
define ("URI_RDFS_DOMAIN", URI_RDFS . "domain");
define ("URI_RDFS_ISDEFINEDBY", URI_RDFS . "isDefinedBy");
define ("URI_RDFS_LABEL", URI_RDFS . "label");
define ("URI_RDFS_MEMBER", URI_RDFS . "member");
define ("URI_RDFS_RANGE", URI_RDFS . "range");
define ("URI_RDFS_SEEALSO", URI_RDFS . "seeAlso");
define ("URI_RDFS_SUBCLASSOF", URI_RDFS . "subClassOf");
define ("URI_RDFS_SUBPROPERTYOF", URI_RDFS . "subPropertyOf");

// namespace
define ("URI_OWL","http://www.w3.org/2002/07/owl#");
// entities
define ("URI_OWL_ANNOTATIONPROPERTY", URI_OWL . "AnnotationProperty");
define ("URI_OWL_CLASS", URI_OWL . "Class");
define ("URI_OWL_DATARANGE", URI_OWL . "DataRange");
define ("URI_OWL_DATATYPEPROPERTY", URI_OWL . "DatatypeProperty");
define ("URI_OWL_DEPRECATEDCLASS", URI_OWL . "DeprecatedClass");
define ("URI_OWL_DEPRECATEDPROPERTY", URI_OWL . "DeprecatedProperty");
define ("URI_OWL_FUNCTIONALPROPERTY", URI_OWL . "FunctionalProperty");
define ("URI_OWL_INVERSEFUNCTIONALPROPERTY", URI_OWL . "InverseFunctionalProperty");
define ("URI_OWL_NOTHING", URI_OWL . "Nothing");
define ("URI_OWL_OBJECTPROPERTY", URI_OWL . "ObjectProperty");
define ("URI_OWL_ONTOLOGY", URI_OWL . "Ontology");
define ("URI_OWL_ONTOLOGYPROPERTY", URI_OWL . "OntologyProperty");
define ("URI_OWL_RESTRICTION", URI_OWL . "Restriction");
define ("URI_OWL_SYMMETRICPROPERTY", URI_OWL . "SymmetricProperty");
define ("URI_OWL_THING", URI_OWL . "Thing");
define ("URI_OWL_TRANSITIVEPROPERTY", URI_OWL . "TransitiveProperty");
// properties
define ("URI_OWL_ALLDIFFERENT", URI_OWL . "AllDifferent");
define ("URI_OWL_ALLVALUESFROM", URI_OWL . "allValuesFrom");
define ("URI_OWL_BACKWARDCOMPATIBLEWITH", URI_OWL . "backwardCompatibleWith");
define ("URI_OWL_CARDINALITY", URI_OWL . "cardinality");
define ("URI_OWL_COMPLEMENTOF", URI_OWL . "complementOf");
define ("URI_OWL_DIFFERENTFROM", URI_OWL . "differentFrom");
define ("URI_OWL_DISJOINTWITH", URI_OWL . "disjointWith");
define ("URI_OWL_DISTINCTMEMBERS", URI_OWL . "distinctMembers");
define ("URI_OWL_EQUIVALENTCLASS", URI_OWL . "equivalentClass");
define ("URI_OWL_EQUIVALENTPROPERTY", URI_OWL . "equivalentProperty");
define ("URI_OWL_HASVALUE", URI_OWL . "hasValue");
define ("URI_OWL_IMPORTS", URI_OWL . "imports");
define ("URI_OWL_INCOMPATIBLEWITH", URI_OWL . "incompatibleWith");
define ("URI_OWL_INTERSECTIONOF", URI_OWL . "intersectionOf");
define ("URI_OWL_INVERSEOF", URI_OWL . "inverseOf");
define ("URI_OWL_MAXCARDINALITY", URI_OWL . "maxCardinality");
define ("URI_OWL_MINCARDINALITY", URI_OWL . "minCardinality");
define ("URI_OWL_ONEOF", URI_OWL . "oneOf");
define ("URI_OWL_ONPROPERTY", URI_OWL . "onProperty");
define ("URI_OWL_PRIORVERSION", URI_OWL . "priorVersion");
define ("URI_OWL_SAMEAS", URI_OWL . "sameAs");
define ("URI_OWL_SOMEVALUESFROM", URI_OWL . "someValuesFrom");
define ("URI_OWL_UNIONOF", URI_OWL . "unionOf");
define ("URI_OWL_VERSIONINFO", URI_OWL . "versionInfo");

// namespace
define ("URI_SKOS","http://www.w3.org/2004/02/skos/core#"); 
// entities
define ("URI_SKOS_COLLECTION", URI_SKOS . "Collection");
define ("URI_SKOS_CONCEPT", URI_SKOS . "Concept");
define ("URI_SKOS_CONCEPTSCHEME", URI_SKOS . "ConceptScheme");
define ("URI_SKOS_ORDEREDCOLLECTION", URI_SKOS . "OrderedCollection");		
// properties
define ("URI_SKOS_ALTLABEL", URI_SKOS . "altLabel");
define ("URI_SKOS_BROADMATCH", URI_SKOS . "broadMatch");
define ("URI_SKOS_BROADER", URI_SKOS . "broader");
define ("URI_SKOS_BROADERTRANSITIVE", URI_SKOS . "broaderTransitive");
define ("URI_SKOS_CHANGENOTE", URI_SKOS . "changeNote");
define ("URI_SKOS_CLOSEMATCH", URI_SKOS . "closeMatch");
define ("URI_SKOS_DEFINITION", URI_SKOS . "definition");
define ("URI_SKOS_EDITORIALNOTE", URI_SKOS . "editorialNote");
define ("URI_SKOS_EXACTMATCH", URI_SKOS . "exactMatch");
define ("URI_SKOS_EXAMPLE", URI_SKOS . "example");
define ("URI_SKOS_HASTOPCONCEPT", URI_SKOS . "hasTopConcept");
define ("URI_SKOS_HIDDENLABEL", URI_SKOS . "hiddenLabel");
define ("URI_SKOS_HISTORYNOTE", URI_SKOS . "historyNote");
define ("URI_SKOS_INSCHEME", URI_SKOS . "inScheme");
define ("URI_SKOS_MAPPINGRELATION", URI_SKOS . "mappingRelation");
define ("URI_SKOS_MEMBER", URI_SKOS . "member");
define ("URI_SKOS_MEMBERLIST", URI_SKOS . "memberList");
define ("URI_SKOS_NARROWMATCH", URI_SKOS . "narrowMatch");
define ("URI_SKOS_NARROWER", URI_SKOS . "narrower");
define ("URI_SKOS_NARROWERTRANSITIVE", URI_SKOS . "narrowerTransitive");
define ("URI_SKOS_NOTATION", URI_SKOS . "notation");
define ("URI_SKOS_NOTE", URI_SKOS . "note");
define ("URI_SKOS_PREFLABEL", URI_SKOS . "prefLabel");
define ("URI_SKOS_RELATED", URI_SKOS . "related");
define ("URI_SKOS_RELATEDMATCH", URI_SKOS . "relatedMatch");
define ("URI_SKOS_SCOPENOTE", URI_SKOS . "scopeNote");
define ("URI_SKOS_SEMANTICRELATION", URI_SKOS . "semanticRelation");
define ("URI_SKOS_TOPCONCEPTOF", URI_SKOS . "topConceptOf");

// namespace
define ("URI_SKOSXL", "http://www.w3.org/2008/05/skos-xl#"); 
// entities
define ("URI_SKOSXL_LABEL", URI_SKOSXL . "Label");	
// properties
define ("URI_SKOSXL_ALTLABEL", URI_SKOSXL . "altLabel");
define ("URI_SKOSXL_HIDDENLABEL", URI_SKOSXL . "hiddenLabel");
define ("URI_SKOSXL_LABELRELATION", URI_SKOSXL . "labelRelation");
define ("URI_SKOSXL_LITERALFORM", URI_SKOSXL . "literalForm");
define ("URI_SKOSXL_PREFLABEL", URI_SKOSXL . "prefLabel");

// namespace
define ("URI_CC", "http://creativecommons.org/ns#");
// entities
// properties
define ("URI_CC_LICENSE", URI_CC . "license");	
define ("URI_CC_ATTRIBUTIONURL", URI_CC . "attributionURL");	
define ("URI_CC_ATTRIBUTIONNAME", URI_CC . "attributionName");
//cc incomplete...

// namespace
define ("URI_DC", "http://purl.org/dc/elements/1.1/"); 
// properties
define ("URI_DC_CONTRIBUTOR", URI_DC . "contributor");
define ("URI_DC_COVERAGE", URI_DC . "coverage");
define ("URI_DC_CREATOR", URI_DC . "creator");
define ("URI_DC_DATE", URI_DC . "date");
define ("URI_DC_DESCRIPTION", URI_DC . "description");
define ("URI_DC_FORMAT", URI_DC . "format");
define ("URI_DC_IDENTIFIER", URI_DC . "identifier");
define ("URI_DC_LANGUAGE", URI_DC . "language");
define ("URI_DC_PUBLISHER", URI_DC . "publisher");
define ("URI_DC_RELATION", URI_DC . "relation");
define ("URI_DC_RIGHTS", URI_DC . "rights");
define ("URI_DC_SOURCE", URI_DC . "source");
define ("URI_DC_SUBJECT", URI_DC . "subject");
define ("URI_DC_TITLE", URI_DC . "title");
define ("URI_DC_TYPE", URI_DC . "type");

// namespace
define ("URI_DCTERMS", "http://purl.org/dc/terms/");
// entities
define ("URI_DCTERMS_SUBJECTSCHEME", URI_DCTERMS . "SubjectScheme");
define ("URI_DCTERMS_DATESCHEME", URI_DCTERMS . "DateScheme");
define ("URI_DCTERMS_FORMATSCHEME", URI_DCTERMS . "FormatScheme");
define ("URI_DCTERMS_LANGUAGESCHEME", URI_DCTERMS . "LanguageScheme");
define ("URI_DCTERMS_SPATIALSCHEME", URI_DCTERMS . "SpatialScheme");
define ("URI_DCTERMS_TEMPORALSCHEME", URI_DCTERMS . "TemporalScheme");
define ("URI_DCTERMS_TYPESCHEME", URI_DCTERMS . "TypeScheme");
define ("URI_DCTERMS_IDENTIFIERSCHEME", URI_DCTERMS . "IdentifierScheme");
define ("URI_DCTERMS_RELATIONSCHEME", URI_DCTERMS . "RelationScheme");
define ("URI_DCTERMS_SOURCESCHEME", URI_DCTERMS . "SourceScheme");
// properties 
define ("URI_DCTERMS_ABSTRACT", URI_DCTERMS . "abstract");
define ("URI_DCTERMS_ACCESSRIGHTS", URI_DCTERMS . "accessRights");
define ("URI_DCTERMS_ACCRUALMETHOD", URI_DCTERMS . "accrualMethod");
define ("URI_DCTERMS_ACCRUALPERIODICITY", URI_DCTERMS . "accrualPeriodicity");
define ("URI_DCTERMS_ACCRUALPOLICY", URI_DCTERMS . "accrualPolicy");
define ("URI_DCTERMS_ALTERNATIVE", URI_DCTERMS . "alternative");
define ("URI_DCTERMS_AUDIENCE", URI_DCTERMS . "audience");
define ("URI_DCTERMS_AVAILABLE", URI_DCTERMS . "available");
define ("URI_DCTERMS_BIBLIOGRAPHICCITATION", URI_DCTERMS . "bibliographicCitation");
define ("URI_DCTERMS_CONFORMSTO", URI_DCTERMS . "conformsTo");
define ("URI_DCTERMS_CONTRIBUTOR", URI_DCTERMS . "contributor");
define ("URI_DCTERMS_COVERAGE", URI_DCTERMS . "coverage");
define ("URI_DCTERMS_CREATED", URI_DCTERMS . "created");
define ("URI_DCTERMS_CREATOR", URI_DCTERMS . "creator");
define ("URI_DCTERMS_DATE", URI_DCTERMS . "date");
define ("URI_DCTERMS_DATEACCEPTED", URI_DCTERMS . "dateAccepted");
define ("URI_DCTERMS_DATECOPYRIGHTED", URI_DCTERMS . "dateCopyrighted");
define ("URI_DCTERMS_DATESUBMITTED", URI_DCTERMS . "dateSubmitted");
define ("URI_DCTERMS_DESCRIPTION", URI_DCTERMS . "description");
define ("URI_DCTERMS_EDUCATIONLEVEL", URI_DCTERMS . "educationLevel");
define ("URI_DCTERMS_EXTENT", URI_DCTERMS . "extent");
define ("URI_DCTERMS_FORMAT", URI_DCTERMS . "format");
define ("URI_DCTERMS_HASFORMAT", URI_DCTERMS . "hasFormat");
define ("URI_DCTERMS_HASPART", URI_DCTERMS . "hasPart");
define ("URI_DCTERMS_HASVERSION", URI_DCTERMS . "hasVersion");
define ("URI_DCTERMS_IDENTIFIER", URI_DCTERMS . "identifier");
define ("URI_DCTERMS_INSTRUCTIONALMETHOD", URI_DCTERMS . "instructionalMethod");
define ("URI_DCTERMS_ISFORMATOF", URI_DCTERMS . "isFormatOf");
define ("URI_DCTERMS_ISPARTOF", URI_DCTERMS . "isPartOf");
define ("URI_DCTERMS_ISREFERENCEDBY", URI_DCTERMS . "isReferencedBy");
define ("URI_DCTERMS_ISREPLACEDBY", URI_DCTERMS . "isReplacedBy");
define ("URI_DCTERMS_ISREQUIREDBY", URI_DCTERMS . "isRequiredBy");
define ("URI_DCTERMS_ISSUED", URI_DCTERMS . "issued");
define ("URI_DCTERMS_ISVERSIONOF", URI_DCTERMS . "isVersionOf");
define ("URI_DCTERMS_LANGUAGE", URI_DCTERMS . "language");
define ("URI_DCTERMS_LICENSE", URI_DCTERMS . "license");
define ("URI_DCTERMS_MEDIATOR", URI_DCTERMS . "mediator");
define ("URI_DCTERMS_MEDIUM", URI_DCTERMS . "medium");
define ("URI_DCTERMS_MODIFIED", URI_DCTERMS . "modified");
define ("URI_DCTERMS_PROVENANCE", URI_DCTERMS . "provenance");
define ("URI_DCTERMS_PUBLISHER", URI_DCTERMS . "publisher");
define ("URI_DCTERMS_REFERENCES", URI_DCTERMS . "references");
define ("URI_DCTERMS_RELATION", URI_DCTERMS . "relation");
define ("URI_DCTERMS_REPLACES", URI_DCTERMS . "replaces");
define ("URI_DCTERMS_REQUIRES", URI_DCTERMS . "requires");
define ("URI_DCTERMS_RIGHTS", URI_DCTERMS . "rights");
define ("URI_DCTERMS_RIGHTSHOLDER", URI_DCTERMS . "rightsHolder");
define ("URI_DCTERMS_SOURCE", URI_DCTERMS . "source");
define ("URI_DCTERMS_SPATIAL", URI_DCTERMS . "spatial");
define ("URI_DCTERMS_SUBJECT", URI_DCTERMS . "subject");
define ("URI_DCTERMS_TABLEOFCONTENTS", URI_DCTERMS . "tableOfContents");	
define ("URI_DCTERMS_TEMPORAL", URI_DCTERMS . "temporal");
define ("URI_DCTERMS_TITLE", URI_DCTERMS . "title");
define ("URI_DCTERMS_TYPE", URI_DCTERMS . "type");
define ("URI_DCTERMS_VALID", URI_DCTERMS . "valid");

// namespace
define ("URI_CRM", "http://www.cidoc-crm.org/cidoc-crm/");
// entities
define ("URI_CRM_E1", URI_CRM . "E1_CRM_Entity");
define ("URI_CRM_E2", URI_CRM . "E2_Temporal_Entity");
define ("URI_CRM_E3", URI_CRM . "E3_Condition_State");
define ("URI_CRM_E4", URI_CRM . "E4_Period");
define ("URI_CRM_E5", URI_CRM . "E5_Event");
define ("URI_CRM_E6", URI_CRM . "E6_Destruction");
define ("URI_CRM_E7", URI_CRM . "E7_Activity");
define ("URI_CRM_E8", URI_CRM . "E8_Acquisition");
define ("URI_CRM_E9", URI_CRM . "E9_Move");
define ("URI_CRM_E10", URI_CRM . "E10_Transfer_of_Custody");
define ("URI_CRM_E11", URI_CRM . "E11_Modification");
define ("URI_CRM_E12", URI_CRM . "E12_Production");
define ("URI_CRM_E13", URI_CRM . "E13_Attribute_Assignment");
define ("URI_CRM_E14", URI_CRM . "E14_Condition_Assessment");
define ("URI_CRM_E15", URI_CRM . "E15_Identifier_Assignment");
define ("URI_CRM_E16", URI_CRM . "E16_Measurement");
define ("URI_CRM_E17", URI_CRM . "E17_Type_Assignment");
define ("URI_CRM_E18", URI_CRM . "E18_Physical_Thing");
define ("URI_CRM_E19", URI_CRM . "E19_Physical_Object");
define ("URI_CRM_E20", URI_CRM . "E20_Biological_Object");
define ("URI_CRM_E21", URI_CRM . "E21_Person");
define ("URI_CRM_E22", URI_CRM . "E22_Man-Made_Object");
define ("URI_CRM_E24", URI_CRM . "E24_Physical_Man-Made_Thing");
define ("URI_CRM_E25", URI_CRM . "E25_Man-Made_Feature");
define ("URI_CRM_E26", URI_CRM . "E26_Physical_Feature");
define ("URI_CRM_E27", URI_CRM . "E27_Site");
define ("URI_CRM_E28", URI_CRM . "E28_Conceptual_Object");
define ("URI_CRM_E29", URI_CRM . "E29_Design_or_Procedure");
define ("URI_CRM_E30", URI_CRM . "E30_Right");
define ("URI_CRM_E31", URI_CRM . "E31_Document");
define ("URI_CRM_E32", URI_CRM . "E32_Authority_Document");
define ("URI_CRM_E33", URI_CRM . "E33_Linguistic_Object");
define ("URI_CRM_E34", URI_CRM . "E34_Inscription");
define ("URI_CRM_E35", URI_CRM . "E35_Title");
define ("URI_CRM_E36", URI_CRM . "E36_Visual_Item");
define ("URI_CRM_E37", URI_CRM . "E37_Mark");
define ("URI_CRM_E38", URI_CRM . "E38_Image");
define ("URI_CRM_E39", URI_CRM . "E39_Actor");
define ("URI_CRM_E40", URI_CRM . "E40_Legal_Body");
define ("URI_CRM_E41", URI_CRM . "E41_Appellation");
define ("URI_CRM_E42", URI_CRM . "E42_Identifier");
define ("URI_CRM_E44", URI_CRM . "E44_Place_Appellation");
define ("URI_CRM_E45", URI_CRM . "E45_Address");
define ("URI_CRM_E46", URI_CRM . "E46_Section_Definition");
define ("URI_CRM_E47", URI_CRM . "E47_Spatial_Coordinates");
define ("URI_CRM_E48", URI_CRM . "E48_Place_Name");
define ("URI_CRM_E49", URI_CRM . "E49_Time_Appellation");
define ("URI_CRM_E50", URI_CRM . "E50_Date");
define ("URI_CRM_E51", URI_CRM . "E51_Contact_Point");
define ("URI_CRM_E52", URI_CRM . "E52_Time-Span");
define ("URI_CRM_E53", URI_CRM . "E53_Place");
define ("URI_CRM_E54", URI_CRM . "E54_Dimension");
define ("URI_CRM_E55", URI_CRM . "E55_Type");
define ("URI_CRM_E56", URI_CRM . "E56_Language");
define ("URI_CRM_E57", URI_CRM . "E57_Material");
define ("URI_CRM_E58", URI_CRM . "E58_Measurement_Unit");
define ("URI_CRM_E59", URI_CRM . "E59_PrimitiveValue");
define ("URI_CRM_E60", URI_CRM . "E60_Number");
define ("URI_CRM_E61", URI_CRM . "E61_Time_Primitive");
define ("URI_CRM_E62", URI_CRM . "E62_String");
define ("URI_CRM_E63", URI_CRM . "E63_Beginning_of_Existence");
define ("URI_CRM_E64", URI_CRM . "E64_End_of_Existence");
define ("URI_CRM_E65", URI_CRM . "E65_Creation");
define ("URI_CRM_E66", URI_CRM . "E66_Formation");
define ("URI_CRM_E67", URI_CRM . "E67_Birth");
define ("URI_CRM_E68", URI_CRM . "E68_Dissolution");
define ("URI_CRM_E69", URI_CRM . "E69_Death");
define ("URI_CRM_E70", URI_CRM . "E70_Thing");
define ("URI_CRM_E71", URI_CRM . "E71_Man-Made_Thing");
define ("URI_CRM_E72", URI_CRM . "E72_Legal_Object");
define ("URI_CRM_E73", URI_CRM . "E73_Information_Object");
define ("URI_CRM_E74", URI_CRM . "E74_Group");
define ("URI_CRM_E75", URI_CRM . "E75_Conceptual_Object_Appellation");
define ("URI_CRM_E77", URI_CRM . "E77_Persistent_Item");
define ("URI_CRM_E78", URI_CRM . "E78_Collection");
define ("URI_CRM_E79", URI_CRM . "E79_Part_Addition");
define ("URI_CRM_E80", URI_CRM . "E80_Part_Removal");
define ("URI_CRM_E81", URI_CRM . "E81_Transformation");
define ("URI_CRM_E82", URI_CRM . "E82_Actor_Appellation");
define ("URI_CRM_E83", URI_CRM . "E83_Type_Creation");
define ("URI_CRM_E84", URI_CRM . "E84_Information_Carrier");
define ("URI_CRM_E85", URI_CRM . "E85_Joining");
define ("URI_CRM_E86", URI_CRM . "E86_Leaving");
define ("URI_CRM_E87", URI_CRM . "E87_Curation_Activity");
define ("URI_CRM_E89", URI_CRM . "E89_Propositional_Object");
define ("URI_CRM_E90", URI_CRM . "E90_Symbolic_Object");
	// properties
define ("URI_CRM_P1", URI_CRM . "P1_is_identified_by");
define ("URI_CRM_P1i", URI_CRM . "P1i_identifies");
define ("URI_CRM_P2", URI_CRM . "P2_has_type");
define ("URI_CRM_P2i", URI_CRM . "P2i_is_type_of");
define ("URI_CRM_P3", URI_CRM . "P3_has_note");
define ("URI_CRM_P4", URI_CRM . "P4_has_time-span");
define ("URI_CRM_P4i", URI_CRM . "P4i_is_time-span_of");
define ("URI_CRM_P5", URI_CRM . "P5_consists_of");
define ("URI_CRM_P5i", URI_CRM . "P5i_forms_part_of");
define ("URI_CRM_P7", URI_CRM . "P7_took_place_at");
define ("URI_CRM_P7i", URI_CRM . "P7i_witnessed");
define ("URI_CRM_P8", URI_CRM . "P8_took_place_on_or_within");
define ("URI_CRM_P8i", URI_CRM . "P8i_witnessed");
define ("URI_CRM_P9", URI_CRM . "P9_consists_of");
define ("URI_CRM_P9i", URI_CRM . "P9i_forms_part_of");
define ("URI_CRM_P10", URI_CRM . "P10_falls_within");
define ("URI_CRM_P10i", URI_CRM . "P10i_contains");
define ("URI_CRM_P11", URI_CRM . "P11_had_participant");
define ("URI_CRM_P11i", URI_CRM . "P11i_participated_in");
define ("URI_CRM_P12", URI_CRM . "P12_occurred_in_the_presence_of");
define ("URI_CRM_P12i", URI_CRM . "P12i_was_present_at");
define ("URI_CRM_P13", URI_CRM . "P13_destroyed");
define ("URI_CRM_P13i", URI_CRM . "P13i_was_destroyed_by");
define ("URI_CRM_P14", URI_CRM . "P14_carried_out_by");
define ("URI_CRM_P14i", URI_CRM . "P14i_performed");
define ("URI_CRM_P15", URI_CRM . "P15_was_influenced_by");
define ("URI_CRM_P15i", URI_CRM . "P15i_influenced");
define ("URI_CRM_P16", URI_CRM . "P16_used_specific_object");
define ("URI_CRM_P16i", URI_CRM . "P16i_was_used_for");
define ("URI_CRM_P17", URI_CRM . "P17_was_motivated_by");
define ("URI_CRM_P17i", URI_CRM . "P17i_motivated");
define ("URI_CRM_P19", URI_CRM . "P19_was_intended_use_of");
define ("URI_CRM_P19i", URI_CRM . "P19i_was_made_for");
define ("URI_CRM_P20", URI_CRM . "P20_had_specific_purpose");
define ("URI_CRM_P20i", URI_CRM . "P20i_was_purpose_of");
define ("URI_CRM_P21", URI_CRM . "P21_had_general_purpose");
define ("URI_CRM_P21i", URI_CRM . "P21i_was_purpose_of");
define ("URI_CRM_P22", URI_CRM . "P22_transferred_title_to");
define ("URI_CRM_P22i", URI_CRM . "P22i_acquired_title_through");
define ("URI_CRM_P23", URI_CRM . "P23_transferred_title_from");
define ("URI_CRM_P23i", URI_CRM . "P23i_surrendered_title_through");
define ("URI_CRM_P24", URI_CRM . "P24_transferred_title_of");
define ("URI_CRM_P24i", URI_CRM . "P24i_changed_ownership_through");
define ("URI_CRM_P25", URI_CRM . "P25_moved");
define ("URI_CRM_P25i", URI_CRM . "P25i_moved_by");
define ("URI_CRM_P26", URI_CRM . "P26_moved_to");
define ("URI_CRM_P26i", URI_CRM . "P26i_was_destination_of");
define ("URI_CRM_P27", URI_CRM . "P27_moved_from");
define ("URI_CRM_P27i", URI_CRM . "P27i_was_origin_of");
define ("URI_CRM_P28", URI_CRM . "P28_custody_surrendered_by");
define ("URI_CRM_P28i", URI_CRM . "P28i_surrendered_custody_through");
define ("URI_CRM_P29", URI_CRM . "P29_custody_received_by");
define ("URI_CRM_P29i", URI_CRM . "P29i_received_custody_through");
define ("URI_CRM_P30", URI_CRM . "P30_transferred_custody_of");
define ("URI_CRM_P30i", URI_CRM . "P30i_custody_transferred_through");
define ("URI_CRM_P31", URI_CRM . "P31_has_modified");
define ("URI_CRM_P31i", URI_CRM . "P31i_was_modified_by");
define ("URI_CRM_P32", URI_CRM . "P32_used_general_technique");
define ("URI_CRM_P32i", URI_CRM . "P32i_was_technique_of");
define ("URI_CRM_P33", URI_CRM . "P33_used_specific_technique");
define ("URI_CRM_P33i", URI_CRM . "P33i_was_used_by");
define ("URI_CRM_P34", URI_CRM . "P34_concerned");
define ("URI_CRM_P34i", URI_CRM . "P34i_was_assessed_by");
define ("URI_CRM_P35", URI_CRM . "P35_has_identified");
define ("URI_CRM_P35i", URI_CRM . "P35i_was_identified_by");
define ("URI_CRM_P37", URI_CRM . "P37_assigned");
define ("URI_CRM_P37i", URI_CRM . "P37i_was_assigned_by");
define ("URI_CRM_P38", URI_CRM . "P38_deassigned");
define ("URI_CRM_P38i", URI_CRM . "P38i_was_deassigned_by");
define ("URI_CRM_P39", URI_CRM . "P39_measured");
define ("URI_CRM_P39i", URI_CRM . "P39i_was_measured_by");
define ("URI_CRM_P40", URI_CRM . "P40_observed_dimension");
define ("URI_CRM_P40i", URI_CRM . "P40i_was_observed_in");
define ("URI_CRM_P41", URI_CRM . "P41_classified");
define ("URI_CRM_P41i", URI_CRM . "P41i_was_classified_by");
define ("URI_CRM_P42", URI_CRM . "P42_assigned");
define ("URI_CRM_P42i", URI_CRM . "P42i_was_assigned_by");
define ("URI_CRM_P43", URI_CRM . "P43_has_dimension");
define ("URI_CRM_P43i", URI_CRM . "P43i_is_dimension_of");
define ("URI_CRM_P44", URI_CRM . "P44_has_condition");
define ("URI_CRM_P44i", URI_CRM . "P44i_condition_of");
define ("URI_CRM_P45", URI_CRM . "P45_consists_of");
define ("URI_CRM_P45i", URI_CRM . "P45i_is_incorporated_in");
define ("URI_CRM_P46", URI_CRM . "P46_is_composed_of");
define ("URI_CRM_P46i", URI_CRM . "P46i_forms_part_of");
define ("URI_CRM_P48", URI_CRM . "P48_has_preferred_identifier");
define ("URI_CRM_P48i", URI_CRM . "P48i_is_preferred_identifier_of");
define ("URI_CRM_P49", URI_CRM . "P49_has_former_or_current_keeper");
define ("URI_CRM_P49i", URI_CRM . "P49i_is_former_or_current_keeper_of");
define ("URI_CRM_P50", URI_CRM . "P50_has_current_keeper");
define ("URI_CRM_P50i", URI_CRM . "P50i_is_current_keeper_of");
define ("URI_CRM_P51", URI_CRM . "P51_has_former_or_current_owner");
define ("URI_CRM_P51i", URI_CRM . "P51i_is_former_or_current_owner_of");
define ("URI_CRM_P52", URI_CRM . "P52_has_current_owner");
define ("URI_CRM_P52i", URI_CRM . "P52i_is_current_owner_of");
define ("URI_CRM_P53", URI_CRM . "P53_has_former_or_current_location");
define ("URI_CRM_P53i", URI_CRM . "P53i_is_former_or_current_location_of");
define ("URI_CRM_P54", URI_CRM . "P54_has_current_permanent_location");
define ("URI_CRM_P54i", URI_CRM . "P54i_is_current_permanent_location_of");
define ("URI_CRM_P55", URI_CRM . "P55_has_current_location");
define ("URI_CRM_P55i", URI_CRM . "P55i_currently_holds");
define ("URI_CRM_P56", URI_CRM . "P56_bears_feature");
define ("URI_CRM_P56i", URI_CRM . "P56i_is_found_on");
define ("URI_CRM_P57", URI_CRM . "P57_has_number_of_parts");
define ("URI_CRM_P58", URI_CRM . "P58_has_section_definition");
define ("URI_CRM_P58i", URI_CRM . "P58i_defines_section");
define ("URI_CRM_P59", URI_CRM . "P59_has_section");
define ("URI_CRM_P59i", URI_CRM . "P59i_is_located_on_or_within");
define ("URI_CRM_P62", URI_CRM . "P62_depicts");
define ("URI_CRM_P62i", URI_CRM . "P62i_is_depicted_by");
define ("URI_CRM_P65", URI_CRM . "P65_shows_visual_item");
define ("URI_CRM_P65i", URI_CRM . "P65i_is_shown_by");
define ("URI_CRM_P67", URI_CRM . "P67_refers_to");
define ("URI_CRM_P67i", URI_CRM . "P67i_is_referred_to_by");
define ("URI_CRM_P68", URI_CRM . "P68_foresees_use_of");
define ("URI_CRM_P68i", URI_CRM . "P68i_use_foreseen_by");
define ("URI_CRM_P69", URI_CRM . "P69_is_associated_with");
define ("URI_CRM_P70", URI_CRM . "P70_documents");
define ("URI_CRM_P70i", URI_CRM . "P70i_is_documented_in");
define ("URI_CRM_P71", URI_CRM . "P71_lists");
define ("URI_CRM_P71i", URI_CRM . "P71i_is_listed_in");
define ("URI_CRM_P72", URI_CRM . "P72_has_language");
define ("URI_CRM_P72i", URI_CRM . "P72i_is_language_of");
define ("URI_CRM_P73", URI_CRM . "P73_has_translation");
define ("URI_CRM_P73i", URI_CRM . "P73i_is_translation_of");
define ("URI_CRM_P74", URI_CRM . "P74_has_current_or_former_residence");
define ("URI_CRM_P74i", URI_CRM . "P74i_is_current_or_former_residence_of");
define ("URI_CRM_P75", URI_CRM . "P75_possesses");
define ("URI_CRM_P75i", URI_CRM . "P75i_is_possessed_by");
define ("URI_CRM_P76", URI_CRM . "P76_has_contact_point");
define ("URI_CRM_P76i", URI_CRM . "P76i_provides_access_to");
define ("URI_CRM_P78", URI_CRM . "P78_is_identified_by");
define ("URI_CRM_P78i", URI_CRM . "P78i_identifies");
define ("URI_CRM_P79", URI_CRM . "P79_beginning_is_qualified_by");
define ("URI_CRM_P80", URI_CRM . "P80_end_is_qualified_by");
define ("URI_CRM_P81", URI_CRM . "P81_ongoing_throughout");
define ("URI_CRM_P82", URI_CRM . "P82_at_some_time_within");
define ("URI_CRM_P83", URI_CRM . "P83_had_at_least_duration");
define ("URI_CRM_P83i", URI_CRM . "P83i_was_minimum_duration_of");
define ("URI_CRM_P84", URI_CRM . "P84_had_at_most_duration");
define ("URI_CRM_P84i", URI_CRM . "P84i_was_maximum_duration_of");
define ("URI_CRM_P86", URI_CRM . "P86_falls_within");
define ("URI_CRM_P86i", URI_CRM . "P86i_contains");
define ("URI_CRM_P87", URI_CRM . "P87_is_identified_by");
define ("URI_CRM_P87i", URI_CRM . "P87i_identifies");
define ("URI_CRM_P88", URI_CRM . "P88_consists_of");
define ("URI_CRM_P88i", URI_CRM . "P88i_forms_part_of");
define ("URI_CRM_P89", URI_CRM . "P89_falls_within");
define ("URI_CRM_P89i", URI_CRM . "P89i_contains");
define ("URI_CRM_P90", URI_CRM . "P90_has_value");
define ("URI_CRM_P91", URI_CRM . "P91_has_unit");
define ("URI_CRM_P91i", URI_CRM . "P91i_is_unit_of");
define ("URI_CRM_P92", URI_CRM . "P92_brought_into_existence");
define ("URI_CRM_P92i", URI_CRM . "P92i_was_brought_into_existence_by");
define ("URI_CRM_P93", URI_CRM . "P93_took_out_of_existence");
define ("URI_CRM_P93i", URI_CRM . "P93i_was_taken_out_of_existence_by");
define ("URI_CRM_P94", URI_CRM . "P94_has_created");
define ("URI_CRM_P94i", URI_CRM . "P94i_was_created_by");
define ("URI_CRM_P95", URI_CRM . "P95_has_formed");
define ("URI_CRM_P95i", URI_CRM . "P95i_was_formed_by");
define ("URI_CRM_P96 ", URI_CRM . "P96_by_mother");
define ("URI_CRM_P96i", URI_CRM . "P96i_gave_birth");
define ("URI_CRM_P97", URI_CRM . "P97_from_father");
define ("URI_CRM_P97i", URI_CRM . "P97i_was_father_for");
define ("URI_CRM_P98", URI_CRM . "P98_brought_into_life");
define ("URI_CRM_P98i", URI_CRM . "P98i_was_born");
define ("URI_CRM_P99", URI_CRM . "P99_dissolved");
define ("URI_CRM_P99i", URI_CRM . "P99i_was_dissolved_by");
define ("URI_CRM_P100", URI_CRM . "P100_was_death_of");
define ("URI_CRM_P100i", URI_CRM . "P100i_died_in");
define ("URI_CRM_P101", URI_CRM . "P101_had_as_general_use");
define ("URI_CRM_P101i", URI_CRM . "P101i_was_use_of");
define ("URI_CRM_P102", URI_CRM . "P102_has_title");
define ("URI_CRM_P102i", URI_CRM . "P102i_is_title_of");
define ("URI_CRM_P103", URI_CRM . "P103_was_intended_for");
define ("URI_CRM_P103i", URI_CRM . "P103i_was_intention_of");
define ("URI_CRM_P104", URI_CRM . "P104_is_subject_to");
define ("URI_CRM_P104i", URI_CRM . "P104i_applies_to");
define ("URI_CRM_P105", URI_CRM . "P105_right_held_by");
define ("URI_CRM_P105i", URI_CRM . "P105i_has_right_on");
define ("URI_CRM_P106", URI_CRM . "P106_is_composed_of");
define ("URI_CRM_P106i", URI_CRM . "P106i_forms_part_of");
define ("URI_CRM_P107", URI_CRM . "P107_has_current_or_former_member");
define ("URI_CRM_P107i", URI_CRM . "P107i_is_current_or_former_member_of");
define ("URI_CRM_P108", URI_CRM . "P108_has_produced");
define ("URI_CRM_P108i", URI_CRM . "P108i_was_produced_by");
define ("URI_CRM_P109", URI_CRM . "P109_has_current_or_former_curator");
define ("URI_CRM_P109i", URI_CRM . "P109i_is_current_or_former_curator_of");
define ("URI_CRM_P110", URI_CRM . "P110_augmented");
define ("URI_CRM_P110i", URI_CRM . "P110i_was_augmented_by");
define ("URI_CRM_P111", URI_CRM . "P111_added");
define ("URI_CRM_P111i", URI_CRM . "P111i_was_added_by");
define ("URI_CRM_P112", URI_CRM . "P112_diminished");
define ("URI_CRM_P112i", URI_CRM . "P112i_was_diminished_by");
define ("URI_CRM_P113", URI_CRM . "P113_removed");
define ("URI_CRM_P113i", URI_CRM . "P113i_was_removed_by");
define ("URI_CRM_P114", URI_CRM . "P114_is_equal_in_time_to");
define ("URI_CRM_P115", URI_CRM . "P115_finishes");
define ("URI_CRM_P115i", URI_CRM . "P115i_is_finished_by");
define ("URI_CRM_P116", URI_CRM . "P116_starts");
define ("URI_CRM_P116i", URI_CRM . "P116i_is_started_by");
define ("URI_CRM_P117", URI_CRM . "P117_occurs_during");
define ("URI_CRM_P117i", URI_CRM . "P117i_includes");
define ("URI_CRM_P118", URI_CRM . "P118_overlaps_in_time_with");
define ("URI_CRM_P118i", URI_CRM . "P118i_is_overlapped_in_time_by");
define ("URI_CRM_P119", URI_CRM . "P119_meets_in_time_with");
define ("URI_CRM_P119i", URI_CRM . "P119i_is_met_in_time_by");
define ("URI_CRM_P120", URI_CRM . "P120_occurs_before");
define ("URI_CRM_P120i", URI_CRM . "P120i_occurs_after");
define ("URI_CRM_P121", URI_CRM . "P121_overlaps_with");
define ("URI_CRM_P122", URI_CRM . "P122_borders_with");
define ("URI_CRM_P123", URI_CRM . "P123_resulted_in");
define ("URI_CRM_P123i", URI_CRM . "P123i_resulted_from");
define ("URI_CRM_P124", URI_CRM . "P124_transformed");
define ("URI_CRM_P124i", URI_CRM . "P124i_was_transformed_by");
define ("URI_CRM_P125", URI_CRM . "P125_used_object_of_type");
define ("URI_CRM_P125i", URI_CRM . "P125i_was_type_of_object_used_in");
define ("URI_CRM_P126", URI_CRM . "P126_employed");
define ("URI_CRM_P126i", URI_CRM . "P126i_was_employed_in");
define ("URI_CRM_P127", URI_CRM . "P127_has_broader_term");
define ("URI_CRM_P127i", URI_CRM . "P127i_has_narrower_term");
define ("URI_CRM_P128", URI_CRM . "P128_carries");
define ("URI_CRM_P128i", URI_CRM . "P128i_is_carried_by");
define ("URI_CRM_P129", URI_CRM . "P129_is_about");
define ("URI_CRM_P129i", URI_CRM . "P129i_is_subject_of");
define ("URI_CRM_P130", URI_CRM . "P130_shows_features_of");
define ("URI_CRM_P130i", URI_CRM . "P130i_features_are_also_found_on");
define ("URI_CRM_P131", URI_CRM . "P131_is_identified_by");
define ("URI_CRM_P131i", URI_CRM . "P131i_identifies");
define ("URI_CRM_P132", URI_CRM . "P132_overlaps_with");
define ("URI_CRM_P133", URI_CRM . "P133_is_separated_from");
define ("URI_CRM_P134", URI_CRM . "P134_continued");
define ("URI_CRM_P134i", URI_CRM . "P134i_was_continued_by");
define ("URI_CRM_P135", URI_CRM . "P135_created_type");
define ("URI_CRM_P135i", URI_CRM . "P135i_was_created_by");
define ("URI_CRM_P136", URI_CRM . "P136_was_based_on");
define ("URI_CRM_P136i", URI_CRM . "P136i_supported_type_creation");
define ("URI_CRM_P137", URI_CRM . "P137_exemplifies");
define ("URI_CRM_P137i", URI_CRM . "P137i_is_exemplified_by");
define ("URI_CRM_P138", URI_CRM . "P138_represents");
define ("URI_CRM_P138i", URI_CRM . "P138i_has_representation");
define ("URI_CRM_P139", URI_CRM . "P139_has_alternative_form");
define ("URI_CRM_P140", URI_CRM . "P140_assigned_attribute_to");
define ("URI_CRM_P140i", URI_CRM . "P140i_was_attributed_by");
define ("URI_CRM_P141", URI_CRM . "P141_assigned");
define ("URI_CRM_P141i", URI_CRM . "P141i_was_assigned_by");
define ("URI_CRM_P142", URI_CRM . "P142_used_constituent");
define ("URI_CRM_P142i", URI_CRM . "P142i_was_used_in");
define ("URI_CRM_P143", URI_CRM . "P143_joined");
define ("URI_CRM_P143i", URI_CRM . "P143i_was_joined_by");
define ("URI_CRM_P144", URI_CRM . "P144_joined_with");
define ("URI_CRM_P144i", URI_CRM . "P144i_gained_member_by");
define ("URI_CRM_P145", URI_CRM . "P145_separated");
define ("URI_CRM_P145i", URI_CRM . "P145i_left_by");
define ("URI_CRM_P146", URI_CRM . "P146_separated_from");
define ("URI_CRM_P146i", URI_CRM . "P146i_lost_member_by");
define ("URI_CRM_P147", URI_CRM . "P147_curated");
define ("URI_CRM_P147i", URI_CRM . "P147i_was_curated_by");
define ("URI_CRM_P148", URI_CRM . "P148_has_component");
define ("URI_CRM_P148i", URI_CRM . "P148i_is_component_of");

// shorten URI using common namespace prefix alias where possible
// e.g. "http://www.w3.org/2000/01/rdf-schema#label" becomes "rdfs:label"
function abbreviateURI($value)
{	
	$search = array(
			URI_RDF, 
			URI_RDFS, 
			URI_OWL, 
			URI_SKOS, 
			URI_SKOSXL, 
			URI_CC, 
			URI_DC, 
			URI_DCTERMS, 
			URI_CRM			
		);
		$replace = array(
			'rdf:',
			'rdfs:',
			'owl:',
			'skos:',
			'skosxl:',
			'cc:',
			'dc:',
			'dct:',
			'crm:'
		);
		$value = str_replace($search, $replace, $value);
		return $value;




}

?>