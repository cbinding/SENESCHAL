SELECT DISTINCT
	tt.cla_gr_uid AS scheme_id,
	tt.the_te_uid AS concept_id,	
	trim(tt.term) AS preflabel,
	strftime('%Y-%m-%dT%H:%M:%S', datetime('now')) AS issued
FROM 	thesaurus_terms tt
WHERE 	tt.status = 'P' 
AND	tt.cla_gr_uid IN ('560');
