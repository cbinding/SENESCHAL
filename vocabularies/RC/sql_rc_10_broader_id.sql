SELECT DISTINCT
	tu1.list_uid AS scheme_id, 
	tu1.the_te_uid AS concept_id, 
	tu2.the_te_uid AS broader_id
FROM 	rc_thesaurus_uses tu1
INNER JOIN
	rc_thesaurus_uses tu2
ON	tu1.broad_term_u_uid = tu2.the_t_u_uid
INNER JOIN
	rc_thesaurus_terms tt
ON	tu1.the_te_uid = tt.the_te_uid
WHERE 	tt.status = 'Y'
AND	tt.list_uid IN ('10');