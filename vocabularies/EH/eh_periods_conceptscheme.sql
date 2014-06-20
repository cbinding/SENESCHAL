SELECT DISTINCT 
	'eh_period' as scheme_id,
	'PERIOD (EH)' AS title,
	'English Heritage Periods List' AS description,
	'English Heritage' AS attributionName,
	'http://www.english-heritage.org.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://data.ordnancesurvey.co.uk/id/country/england' AS coverage,
	'http://www.english-heritage.org.uk' AS publisher,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
	