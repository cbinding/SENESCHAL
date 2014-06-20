SELECT DISTINCT
	tt.cla_gr_uid AS scheme_id,
	tt.the_te_uid AS concept_id,
	trim(tt.scope_note) AS scopenote
FROM 	thesaurus_terms tt
WHERE 	tt.status = 'P' 
AND	tt.scope_note <> ''
AND	tt.cla_gr_uid IN ('agl_et');
