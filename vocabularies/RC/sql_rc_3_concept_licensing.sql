SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tt.the_te_uid AS concept_id,
	'RCAHMS' AS attributionName,
	'http://www.rcahms.gov.uk' AS attributionURL,
	'http://reference.data.gov.uk/id/open-government-licence' AS licenseURL,
	'http://www.rcahms.gov.uk' AS publisher
FROM 	rc_thesaurus_terms tt
WHERE 	tt.status = 'Y' 
AND	tt.list_uid IN ('3');