SELECT DISTINCT
	lst.list_uid AS scheme_id,
	trim(lst.list_name) AS title,
	trim(lst.description) AS description,
	lst.owner_org AS attributionName,
	'http://data.ordnancesurvey.co.uk/id/7000000000041429' AS coverage,
	'http://www.rcahms.gov.uk' AS attributionURL,
	'http://reference.data.gov.uk/id/open-government-licence' AS licenseURL,
	'http://www.rcahms.gov.uk' AS publisher,
	SQLiteISO8601(lst.entered_dt) AS created,
	SQLiteISO8601(lst.updated_dt) AS modified,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM	rc_thesaurus_list AS lst
WHERE	lst.list_uid IN ('1');