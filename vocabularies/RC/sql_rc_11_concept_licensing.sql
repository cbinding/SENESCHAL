SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tt.the_te_uid AS concept_id,
	'RCAHMW' AS attributionName,
	'http://www.rcahmw.gov.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://www.rcahmw.gov.uk' AS publisher
FROM 	rc_thesaurus_terms tt
WHERE 	tt.status = 'Y' 
AND	tt.list_uid IN ('11');