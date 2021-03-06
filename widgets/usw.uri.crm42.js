/*jslint browser: true, nomen: true, white: true, unparam: true */
/*global $, jQuery, alert */
/*
===============================================================================
Creator	: Ceri Binding,	University of South	wales
Project	: Any
Classes	: usw.uri.crm42
Summary	: Constants	for	namespace, entity and property URIs
Example	: usage: alert(usw.uri.crm42.E1) | alert(usw.uri.crm42["E1"])
// either call returns "http://cidoc.ics.forth.gr/rdfs/cidoc_v4.2.rdfs#E1.CRM_Entity"
License	: http://creativecommons.org/licenses/by/3.0/
===============================================================================
History	:

15/01/2014	CFB	Adapted	from original (STAR	project	specific)
===============================================================================
*/

// set up base namespace
var	usw	= (this.usw	|| {});
usw.uri	= (usw.uri || {});

usw.uri.crm42 =	{NS	: "http://cidoc.ics.forth.gr/rdfs/cidoc_v4.2.rdfs#"};
usw.uri.crm42 =	{
	// entities
	E1		: usw.uri.crm42.NS + "E1.CRM_Entity",
	E2		: usw.uri.crm42.NS + "E2.Temporal_Entity",
	E3		: usw.uri.crm42.NS + "E3.Condition_State",
	E4		: usw.uri.crm42.NS + "E4.Period",
	E5		: usw.uri.crm42.NS + "E5.Event",
	E6		: usw.uri.crm42.NS + "E6.Destruction",
	E7		: usw.uri.crm42.NS + "E7.Activity",
	E8		: usw.uri.crm42.NS + "E8.Acquisition",
	E9		: usw.uri.crm42.NS + "E9.Move",
	E10		: usw.uri.crm42.NS + "E10.Transfer_of_Custody",
	E11		: usw.uri.crm42.NS + "E11.Modification",
	E12		: usw.uri.crm42.NS + "E12.Production",
	E13		: usw.uri.crm42.NS + "E13.Attribute_Assignment",
	E14		: usw.uri.crm42.NS + "E14.Condition_Assessment",
	E15		: usw.uri.crm42.NS + "E15.Identifier_Assignment",
	E16		: usw.uri.crm42.NS + "E16.Measurement",
	E17		: usw.uri.crm42.NS + "E17.Type_Assignment",
	E18		: usw.uri.crm42.NS + "E18.Physical_Thing",
	E19		: usw.uri.crm42.NS + "E19.Physical_Object",
	E20		: usw.uri.crm42.NS + "E20.Biological_Object",
	E21		: usw.uri.crm42.NS + "E21.Person",
	E22		: usw.uri.crm42.NS + "E22.Man-Made_Object",
	E24		: usw.uri.crm42.NS + "E24.Physical_Man-Made_Thing",
	E25		: usw.uri.crm42.NS + "E25.Man-Made_Feature",
	E26		: usw.uri.crm42.NS + "E26.Physical_Feature",
	E27		: usw.uri.crm42.NS + "E27.Site",
	E28		: usw.uri.crm42.NS + "E28.Conceptual_Object",
	E29		: usw.uri.crm42.NS + "E29.Design_or_Procedure",
	E30		: usw.uri.crm42.NS + "E30.Right",
	E31		: usw.uri.crm42.NS + "E31.Document",
	E32		: usw.uri.crm42.NS + "E32.Authority_Document",
	E33		: usw.uri.crm42.NS + "E33.Linguistic_Object",
	E34		: usw.uri.crm42.NS + "E34.Inscription",
	E35		: usw.uri.crm42.NS + "E35.Title",
	E36		: usw.uri.crm42.NS + "E36.Visual_Item",
	E37		: usw.uri.crm42.NS + "E37.Mark",
	E38		: usw.uri.crm42.NS + "E38.Image",
	E39		: usw.uri.crm42.NS + "E39.Actor",
	E40		: usw.uri.crm42.NS + "E40.Legal_Body",
	E41		: usw.uri.crm42.NS + "E41.Appellation",
	E42		: usw.uri.crm42.NS + "E42.Object_Identifier",
	E44		: usw.uri.crm42.NS + "E44.Place_Appellation",
	E45		: usw.uri.crm42.NS + "E45.Address",
	E46		: usw.uri.crm42.NS + "E46.Section_Definition",
	E47		: usw.uri.crm42.NS + "E47.Spatial_Coordinates",
	E48		: usw.uri.crm42.NS + "E48.Place_Name",
	E49		: usw.uri.crm42.NS + "E49.Time_Appellation",
	E50		: usw.uri.crm42.NS + "E50.Date",
	E51		: usw.uri.crm42.NS + "E51.Contact_Point",
	E52		: usw.uri.crm42.NS + "E52.Time-Span",
	E53		: usw.uri.crm42.NS + "E53.Place",
	E54		: usw.uri.crm42.NS + "E54.Dimension",
	E55		: usw.uri.crm42.NS + "E55.Type",
	E56		: usw.uri.crm42.NS + "E56.Language",
	E57		: usw.uri.crm42.NS + "E57.Material",
	E58		: usw.uri.crm42.NS + "E58.Measurement_Unit",
	E59		: usw.uri.crm42.NS + "E59.Primitive_Value",
	E60		: usw.uri.crm42.NS + "E60.Number",
	E61		: usw.uri.crm42.NS + "E61.Time_Primitive",
	E62		: usw.uri.crm42.NS + "E62.String",
	E63		: usw.uri.crm42.NS + "E63.Beginning_of_Existence",
	E64		: usw.uri.crm42.NS + "E64.End_of_Existence",
	E65		: usw.uri.crm42.NS + "E65.Creation",
	E66		: usw.uri.crm42.NS + "E66.Formation",
	E67		: usw.uri.crm42.NS + "E67.Birth",
	E68		: usw.uri.crm42.NS + "E68.Dissolution",
	E69		: usw.uri.crm42.NS + "E69.Death",
	E70		: usw.uri.crm42.NS + "E70.Thing",
	E71		: usw.uri.crm42.NS + "E71.Man-Made_Thing",
	E72		: usw.uri.crm42.NS + "E72.Legal_Object",
	E73		: usw.uri.crm42.NS + "E73.Information_Object",
	E74		: usw.uri.crm42.NS + "E74.Group",
	E75		: usw.uri.crm42.NS + "E75.Conceptual_Object_Appellation",
	E77		: usw.uri.crm42.NS + "E77.Persistent_Item",
	E78		: usw.uri.crm42.NS + "E78.Collection",
	E79		: usw.uri.crm42.NS + "E79.Part_Addition",
	E80		: usw.uri.crm42.NS + "E80.Part_Removal",
	E81		: usw.uri.crm42.NS + "E81.Transformation",
	E82		: usw.uri.crm42.NS + "E82.Actor_Appellation",
	E83		: usw.uri.crm42.NS + "E83.Type_Creation",
	E84		: usw.uri.crm42.NS + "E84.Information_Carrier",
	// properties
	P1F		: usw.uri.crm42.NS + "P1F.is_identified_by",
	P1B		: usw.uri.crm42.NS + "P1B.identifies",
	P2F		: usw.uri.crm42.NS + "P2F.has_type",
	P2B		: usw.uri.crm42.NS + "P2B.is_type_of",
	P3F		: usw.uri.crm42.NS + "P3F.has_note",
	P4F		: usw.uri.crm42.NS + "P4F.has_time-span",
	P4B		: usw.uri.crm42.NS + "P4B.is_time-span_of",
	P5F		: usw.uri.crm42.NS + "P5F.consists_of",
	P5B		: usw.uri.crm42.NS + "P5B.forms_part_of",
	P7F		: usw.uri.crm42.NS + "P7F.took_place_at",
	P7B		: usw.uri.crm42.NS + "P7B.witnessed",
	P8F		: usw.uri.crm42.NS + "P8F.took_place_on_or_within",
	P8B		: usw.uri.crm42.NS + "P8B.witnessed",
	P9F		: usw.uri.crm42.NS + "P9F.consists_of",
	P9B		: usw.uri.crm42.NS + "P9B.forms_part_of",
	P10F	: usw.uri.crm42.NS + "P10F.falls_within",
	P10B	: usw.uri.crm42.NS + "P10B.contains",
	P11F	: usw.uri.crm42.NS + "P11F.had_participant",
	P11B	: usw.uri.crm42.NS + "P11B.participated_in",
	P12F	: usw.uri.crm42.NS + "P12F.occurred_in_the_presence_of",
	P12B	: usw.uri.crm42.NS + "P12B.was_present_at",
	P13F	: usw.uri.crm42.NS + "P13F.destroyed",
	P13B	: usw.uri.crm42.NS + "P13B.was_destroyed_by",
	P14F	: usw.uri.crm42.NS + "P14F.carried_out_by",
	P14B	: usw.uri.crm42.NS + "P14B.performed",
	P15F	: usw.uri.crm42.NS + "P15F.was_influenced_by",
	P15B	: usw.uri.crm42.NS + "P15B.influenced",
	P16F	: usw.uri.crm42.NS + "P16F.used_specific_object",
	P16B	: usw.uri.crm42.NS + "P16B.was_used_for",
	P17F	: usw.uri.crm42.NS + "P17F.was_motivated_by",
	P17B	: usw.uri.crm42.NS + "P17B.motivated",
	P19F	: usw.uri.crm42.NS + "P19F.was_intended_use_of",
	P19B	: usw.uri.crm42.NS + "P19B.was_made_for",
	P20F	: usw.uri.crm42.NS + "P20F.had_specific_purpose",
	P20B	: usw.uri.crm42.NS + "P20B.was_purpose_of",
	P21F	: usw.uri.crm42.NS + "P21F.had_general_purpose",
	P21B	: usw.uri.crm42.NS + "P21B.was_purpose_of",
	P22F	: usw.uri.crm42.NS + "P22F.transferred_title_to",
	P22B	: usw.uri.crm42.NS + "P22B.acquired_title_through",
	P23F	: usw.uri.crm42.NS + "P23F.transferred_title_from",
	P23B	: usw.uri.crm42.NS + "P23B.surrendered_title_through",
	P24F	: usw.uri.crm42.NS + "P24F.transferred_title_of",
	P24B	: usw.uri.crm42.NS + "P24B.changed_ownership_through",
	P25F	: usw.uri.crm42.NS + "P25F.moved",
	P25B	: usw.uri.crm42.NS + "P25B.moved_by",
	P26F	: usw.uri.crm42.NS + "P26F.moved_to",
	P26B	: usw.uri.crm42.NS + "P26B.was_destination_of",
	P27F	: usw.uri.crm42.NS + "P27F.moved_from",
	P27B	: usw.uri.crm42.NS + "P27B.was_origin_of",
	P28F	: usw.uri.crm42.NS + "P28F.custody_surrendered_by",
	P28B	: usw.uri.crm42.NS + "P28B.surrendered_custody_through",
	P29F	: usw.uri.crm42.NS + "P29F.custody_received_by",
	P29B	: usw.uri.crm42.NS + "P29B.received_custody_through",
	P30F	: usw.uri.crm42.NS + "P30F.transferred_custody_of",
	P30B	: usw.uri.crm42.NS + "P30B.custody_transferred_through",
	P31F	: usw.uri.crm42.NS + "P31F.has_modified",
	P31B	: usw.uri.crm42.NS + "P31B.was_modified_by",
	P32F	: usw.uri.crm42.NS + "P32F.used_general_technique",
	P32B	: usw.uri.crm42.NS + "P32B.was_technique_of",
	P33F	: usw.uri.crm42.NS + "P33F.used_specific_technique",
	P33B	: usw.uri.crm42.NS + "P33B.was_used_by",
	P34F	: usw.uri.crm42.NS + "P34F.concerned",
	P34B	: usw.uri.crm42.NS + "P34B.was_assessed_by",
	P35F	: usw.uri.crm42.NS + "P35F.has_identified",
	P35B	: usw.uri.crm42.NS + "P35B.identified_by",
	P36F	: usw.uri.crm42.NS + "P36F.registered",
	P36B	: usw.uri.crm42.NS + "P36B.was_registered_by",
	P37F	: usw.uri.crm42.NS + "P37F.assigned",
	P37B	: usw.uri.crm42.NS + "P37B.was_assigned_by",
	P38F	: usw.uri.crm42.NS + "P38F.deassigned",
	P38B	: usw.uri.crm42.NS + "P38B.was_deassigned_by",
	P39F	: usw.uri.crm42.NS + "P39F.measured",
	P39B	: usw.uri.crm42.NS + "P39B.was_measured_by",
	P40F	: usw.uri.crm42.NS + "P40F.observed_dimension",
	P40B	: usw.uri.crm42.NS + "P40B.was_observed_in",
	P41F	: usw.uri.crm42.NS + "P41F.classified",
	P41B	: usw.uri.crm42.NS + "P41B.was_classified_by",
	P42F	: usw.uri.crm42.NS + "P42F.assigned",
	P42B	: usw.uri.crm42.NS + "P42B.was_assigned_by",
	P43F	: usw.uri.crm42.NS + "P43F.has_dimension",
	P43B	: usw.uri.crm42.NS + "P43B.is_dimension_of",
	P44F	: usw.uri.crm42.NS + "P44F.has_condition",
	P44B	: usw.uri.crm42.NS + "P44B.is_condition_of",
	P45F	: usw.uri.crm42.NS + "P45F.consists_of",
	P45B	: usw.uri.crm42.NS + "P45B.is_incorporated_in",
	P46F	: usw.uri.crm42.NS + "P46F.is_composed_of",
	P46B	: usw.uri.crm42.NS + "P46B.forms_part_of",
	P47F	: usw.uri.crm42.NS + "P47F.is_identified_by",
	P47B	: usw.uri.crm42.NS + "P47B.identifies",
	P48F	: usw.uri.crm42.NS + "P48F.has_preferred_identifier",
	P48B	: usw.uri.crm42.NS + "P48B.is_preferred_identifier_of",
	P49F	: usw.uri.crm42.NS + "P49F.has_former_or_current_keeper",
	P49B	: usw.uri.crm42.NS + "P49B.is_former_or_current_keeper_of",
	P50F	: usw.uri.crm42.NS + "P50F.has_current_keeper",
	P50B	: usw.uri.crm42.NS + "P50B.is_current_keeper_of",
	P51F	: usw.uri.crm42.NS + "P51F.has_former_or_current_owner",
	P51B	: usw.uri.crm42.NS + "P51B.is_former_or_current_owner_of",
	P52F	: usw.uri.crm42.NS + "P52F.has_current_owner",
	P52B	: usw.uri.crm42.NS + "P52B.is_current_owner_of",
	P53F	: usw.uri.crm42.NS + "P53F.has_former_or_current_location",
	P53B	: usw.uri.crm42.NS + "P53B.is_former_or_current_location_of",
	P54F	: usw.uri.crm42.NS + "P54F.has_current_permanent_location",
	P54B	: usw.uri.crm42.NS + "P54B.is_current_permanent_location_of",
	P55F	: usw.uri.crm42.NS + "P55F.has_current_location",
	P55B	: usw.uri.crm42.NS + "P55B.currently_holds",
	P56F	: usw.uri.crm42.NS + "P56F.bears_feature",
	P56B	: usw.uri.crm42.NS + "P56B.is_found_on",
	P57F	: usw.uri.crm42.NS + "P57F.has_number_of_parts",
	P58F	: usw.uri.crm42.NS + "P58F.has_section_definition",
	P58B	: usw.uri.crm42.NS + "P58B.defines_section",
	P59F	: usw.uri.crm42.NS + "P59F.has_section",
	P59B	: usw.uri.crm42.NS + "P59B.is_located_on_or_within",
	P62F	: usw.uri.crm42.NS + "P62F.depicts",
	P62B	: usw.uri.crm42.NS + "P62B.is_depicted_by",
	P65F	: usw.uri.crm42.NS + "P65F.shows_visual_item",
	P65B	: usw.uri.crm42.NS + "P65B.is_shown_by",
	P67F	: usw.uri.crm42.NS + "P67F.refers_to",
	P67B	: usw.uri.crm42.NS + "P67B.is_referred_to_by",
	P68F	: usw.uri.crm42.NS + "P68F.usually_employs",
	P68B	: usw.uri.crm42.NS + "P68B.is_usually_employed_by",
	P69F	: usw.uri.crm42.NS + "P69F.is_associated_with",
	P70F	: usw.uri.crm42.NS + "P70F.documents",
	P70B	: usw.uri.crm42.NS + "P70B.is_documented_in",
	P71F	: usw.uri.crm42.NS + "P71F.lists",
	P71B	: usw.uri.crm42.NS + "P71B.is_listed_in",
	P72F	: usw.uri.crm42.NS + "P72F.has_language",
	P72B	: usw.uri.crm42.NS + "P72B.is_language_of",
	P73F	: usw.uri.crm42.NS + "P73F.has_translation",
	P73B	: usw.uri.crm42.NS + "P73B.is_translation_of",
	P74F	: usw.uri.crm42.NS + "P74F.has_current_or_former_residence",
	P74B	: usw.uri.crm42.NS + "P74B.is_current_or_former_residence_of",
	P75F	: usw.uri.crm42.NS + "P75F.possesses",
	P75B	: usw.uri.crm42.NS + "P75B.is_possessed_by",
	P76F	: usw.uri.crm42.NS + "P76F.has_contact_point",
	P76B	: usw.uri.crm42.NS + "P76B.provides_access_to",
	P78F	: usw.uri.crm42.NS + "P78F.is_identified_by",
	P78B	: usw.uri.crm42.NS + "P78B.identifies",
	P79F	: usw.uri.crm42.NS + "P79F.beginning_is_qualified_by",
	P80F	: usw.uri.crm42.NS + "P80F.end_is_qualified_by",
	P81F	: usw.uri.crm42.NS + "P81F.ongoing_throughout",
	P82F	: usw.uri.crm42.NS + "P82F.at_some_time_within",
	P83F	: usw.uri.crm42.NS + "P83F.had_at_least_duration",
	P83B	: usw.uri.crm42.NS + "P83B.was_minimum_duration_of",
	P84F	: usw.uri.crm42.NS + "P84F.had_at_most_duration",
	P84B	: usw.uri.crm42.NS + "P84B.was_maximum_duration_of",
	P86F	: usw.uri.crm42.NS + "P86F.falls_within",
	P86B	: usw.uri.crm42.NS + "P86B.contains",
	P87F	: usw.uri.crm42.NS + "P87F.is_identified_by",
	P87B	: usw.uri.crm42.NS + "P87B.identifies",
	P88F	: usw.uri.crm42.NS + "P88F.consists_of",
	P88B	: usw.uri.crm42.NS + "P88B.forms_part_of",
	P89F	: usw.uri.crm42.NS + "P89F.falls_within",
	P89B	: usw.uri.crm42.NS + "P89B.contains",
	P90F	: usw.uri.crm42.NS + "P90F.has_value",
	P91F	: usw.uri.crm42.NS + "P91F.has_unit",
	P91B	: usw.uri.crm42.NS + "P91B.is_unit_of",
	P92F	: usw.uri.crm42.NS + "P92F.brought_into_existence",
	P92B	: usw.uri.crm42.NS + "P92B.was_brought_into_existence_by",
	P93F	: usw.uri.crm42.NS + "P93F.took_out_of_existence",
	P93B	: usw.uri.crm42.NS + "P93B.was_taken_out_of_existence_by",
	P94F	: usw.uri.crm42.NS + "P94F.has_created",
	P94B	: usw.uri.crm42.NS + "P94B.was_created_by",
	P95F	: usw.uri.crm42.NS + "P95F.has_formed",
	P95B	: usw.uri.crm42.NS + "P95B.was_formed_by",
	P96F	: usw.uri.crm42.NS + "P96F.by_mother",
	P96B	: usw.uri.crm42.NS + "P96B.gave_birth",
	P97F	: usw.uri.crm42.NS + "P97F.from_father",
	P97B	: usw.uri.crm42.NS + "P97B.was_father_for",
	P98F	: usw.uri.crm42.NS + "P98F.brought_into_life",
	P98B	: usw.uri.crm42.NS + "P98B.was_born",
	P99F	: usw.uri.crm42.NS + "P99F.dissolved",
	P99B	: usw.uri.crm42.NS + "P99B.was_dissolved_by",
	P100F	: usw.uri.crm42.NS + "P100F.was_death_of",
	P100B	: usw.uri.crm42.NS + "P100B.died_in",
	P101F	: usw.uri.crm42.NS + "P101F.had_as_general_use",
	P101B	: usw.uri.crm42.NS + "P101B.was_use_of",
	P102F	: usw.uri.crm42.NS + "P102F.has_title",
	P102B	: usw.uri.crm42.NS + "P102B.is_title_of",
	P103F	: usw.uri.crm42.NS + "P103F.was_intended_for",
	P103B	: usw.uri.crm42.NS + "P103B.was_intention_of",
	P104F	: usw.uri.crm42.NS + "P104F.is_subject_to",
	P104B	: usw.uri.crm42.NS + "P104B.applies_to",
	P105F	: usw.uri.crm42.NS + "P105F.right_held_by",
	P105B	: usw.uri.crm42.NS + "P105B.has_right_on",
	P106F	: usw.uri.crm42.NS + "P106F.is_composed_of",
	P106B	: usw.uri.crm42.NS + "P106B.forms_part_of",
	P107F	: usw.uri.crm42.NS + "P107F.has_current_or_former_member",
	P107B	: usw.uri.crm42.NS + "P107B.is_current_or_former_member_of",
	P108F	: usw.uri.crm42.NS + "P108F.has_produced",
	P108B	: usw.uri.crm42.NS + "P108B.was_produced_by",
	P109F	: usw.uri.crm42.NS + "P109F.has_current_or_former_curator",
	P109B	: usw.uri.crm42.NS + "P109B.is_current_or_former_curator_of",
	P110F	: usw.uri.crm42.NS + "P110F.augmented",
	P110B	: usw.uri.crm42.NS + "P110B.was_augmented_by",
	P111F	: usw.uri.crm42.NS + "P111F.added",
	P111B	: usw.uri.crm42.NS + "P111B.was_added_by",
	P112F	: usw.uri.crm42.NS + "P112F.diminished",
	P112B	: usw.uri.crm42.NS + "P112B.was_diminished_by",
	P113F	: usw.uri.crm42.NS + "P113F.removed",
	P113B	: usw.uri.crm42.NS + "P113B.was_removed_by",
	P114F	: usw.uri.crm42.NS + "P114F.is_equal_in_time_to",
	P115F	: usw.uri.crm42.NS + "P115F.finishes",
	P115B	: usw.uri.crm42.NS + "P115B.is_finished_by",
	P116F	: usw.uri.crm42.NS + "P116F.starts",
	P116B	: usw.uri.crm42.NS + "P116B.is_started_by",
	P117F	: usw.uri.crm42.NS + "P117F.occurs_during",
	P117B	: usw.uri.crm42.NS + "P117B.includes",
	P118F	: usw.uri.crm42.NS + "P118F.overlaps_in_time_with",
	P118B	: usw.uri.crm42.NS + "P118B.is_overlapped_in_time_by",
	P119F	: usw.uri.crm42.NS + "P119F.meets_in_time_with",
	P119B	: usw.uri.crm42.NS + "P119B.is_met_in_time_by",
	P120F	: usw.uri.crm42.NS + "P120F.occurs_before",
	P120B	: usw.uri.crm42.NS + "P120B.occurs_after",
	P121F	: usw.uri.crm42.NS + "P121F.overlaps_with",
	P122F	: usw.uri.crm42.NS + "P122F.borders_with",
	P123F	: usw.uri.crm42.NS + "P123F.resulted_in",
	P123B	: usw.uri.crm42.NS + "P123B.resulted_from",
	P124F	: usw.uri.crm42.NS + "P124F.transformed",
	P124B	: usw.uri.crm42.NS + "P124B.was_transformed_by",
	P125F	: usw.uri.crm42.NS + "P125F.used_object_of_type",
	P125B	: usw.uri.crm42.NS + "P125B.was_type_of_object_used_in",
	P126F	: usw.uri.crm42.NS + "P126F.employed",
	P126B	: usw.uri.crm42.NS + "P126B.was_employed_in",
	P127F	: usw.uri.crm42.NS + "P127F.has_broader_term",
	P127B	: usw.uri.crm42.NS + "P127B.has_narrower_term",
	P128F	: usw.uri.crm42.NS + "P128F.carries",
	P128B	: usw.uri.crm42.NS + "P128B.is_carried_by",
	P129F	: usw.uri.crm42.NS + "P129F.is_about",
	P129B	: usw.uri.crm42.NS + "P129B.is_subject_of",
	P130F	: usw.uri.crm42.NS + "P130F.shows_features_of",
	P130B	: usw.uri.crm42.NS + "P130B.features_are_also_found_on",
	P131F	: usw.uri.crm42.NS + "P131F.is_identified_by",
	P131B	: usw.uri.crm42.NS + "P131B.identifies",
	P132F	: usw.uri.crm42.NS + "P132F.overlaps_with",
	P133F	: usw.uri.crm42.NS + "P133F.is_separated_from",
	P134F	: usw.uri.crm42.NS + "P134F.continued",
	P134B	: usw.uri.crm42.NS + "P134B.was_continued_by",
	P135F	: usw.uri.crm42.NS + "P135F.created_type",
	P135B	: usw.uri.crm42.NS + "P135B.was_created_by",
	P136F	: usw.uri.crm42.NS + "P136F.was_based_on",
	P136B	: usw.uri.crm42.NS + "P136B.supported_type_creation",
	P137F	: usw.uri.crm42.NS + "P137F.is_exemplified_by",
	P137B	: usw.uri.crm42.NS + "P137B.exemplifies",
	P138F	: usw.uri.crm42.NS + "P138F.represents",
	P138B	: usw.uri.crm42.NS + "P138B.has_representation",
	P139F	: usw.uri.crm42.NS + "P139F.has_alternative_form",
	P140F	: usw.uri.crm42.NS + "P140F.assigned_attribute_to",
	P140B	: usw.uri.crm42.NS + "P140B.was_attributed_by",
	P141F	: usw.uri.crm42.NS + "P141F.assigned",
	P141B	: usw.uri.crm42.NS + "P141B.was_assigned_by"
};
