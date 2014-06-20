SELECT DISTINCT
	'eh_period' as scheme_id,
	period_code AS concept_id,
	trim(name) AS preflabel,
	trim(period_code) AS notation,
	'English Heritage' AS attributionName,
	'http://www.english-heritage.org.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://www.english-heritage.org.uk' AS publisher,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM 	eh_periods_list;
	