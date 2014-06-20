SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tt.the_te_uid AS concept_id,
	trim(term) AS preflabel,
	SQLiteISO8601(tt.entered_dt) AS created,
	SQLiteISO8601(tt.updated_dt) AS modified,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM 	rc_thesaurus_terms tt
WHERE 	tt.status = 'Y' 
AND	tt.list_uid IN ('2');