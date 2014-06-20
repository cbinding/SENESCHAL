SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tt.the_te_uid AS concept_id,
	trim(tt.scope_note) AS scopenote
FROM	rc_thesaurus_terms tt
WHERE 	tt.status = 'Y' 
AND	tt.scope_note <> ''
AND	tt.list_uid IN ('10');