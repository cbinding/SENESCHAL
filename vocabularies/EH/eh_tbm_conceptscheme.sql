SELECT DISTINCT
	cg.cla_gr_uid AS scheme_id,
	trim(cg.name) AS title,
	trim(cg.description) AS description,
	'English Heritage' AS attributionName,
	'http://www.english-heritage.org.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://data.ordnancesurvey.co.uk/id/country/england' AS coverage,
	'http://www.english-heritage.org.uk' AS publisher,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM	classification_groups cg
WHERE	cg.cla_gr_uid IN ('eh_tbm');