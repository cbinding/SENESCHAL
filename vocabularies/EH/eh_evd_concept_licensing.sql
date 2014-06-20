SELECT DISTINCT
	tt.cla_gr_uid AS scheme_id,
	tt.the_te_uid AS concept_id,	
	'English Heritage' AS attributionName,
	'http://www.english-heritage.org.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://www.english-heritage.org.uk' AS publisher
FROM 	thesaurus_terms tt
WHERE 	tt.status = 'P' 
AND	tt.cla_gr_uid IN ('eh_evd');
