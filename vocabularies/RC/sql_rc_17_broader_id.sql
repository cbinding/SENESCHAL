SELECT DISTINCT
	tu.list_uid AS scheme_id, 
	tu.the_te_uid AS concept_id, 
	tu2.the_te_uid AS broader_id
FROM 	rc_thesaurus_uses tu
INNER JOIN
	rc_thesaurus_uses tu2
ON	tu.broad_term_u_uid = tu2.the_t_u_uid
INNER JOIN
	rc_thesaurus_terms tt
ON	tu.the_te_uid = tt.the_te_uid
WHERE 	tt.status = 'Y' 
AND	tu.list_uid IN ('17');