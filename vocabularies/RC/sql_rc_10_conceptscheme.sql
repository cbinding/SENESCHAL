SELECT DISTINCT
	lst.list_uid AS scheme_id,
	trim(lst.list_name) AS title,
	trim(lst.description) AS description,
	lst.owner_org AS attributionName,
	'http://data.ordnancesurvey.co.uk/id/7000000000041424' AS coverage,
	'http://www.rcahmw.gov.uk' AS attributionURL,
	'http://creativecommons.org/licenses/by/3.0' AS licenseURL,
	'http://www.rcahmw.gov.uk' AS publisher,
	SQLiteISO8601(lst.entered_dt) AS created,
	SQLiteISO8601(lst.updated_dt) AS modified,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM	rc_thesaurus_list AS lst
WHERE	lst.list_uid IN ('10');