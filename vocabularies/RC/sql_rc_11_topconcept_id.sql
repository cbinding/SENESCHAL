SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tt.the_te_uid AS topconcept_id,
	tt.term AS preflabel
FROM	rc_thesaurus_uses tu
INNER JOIN
	rc_thesaurus_terms tt
ON	tu.list_uid = tt.list_uid
AND	tu.the_te_uid = tt.the_te_uid
WHERE 	tu.the_t_u_uid = tu.top_term_u_uid
AND	tt.status = 'Y' 
AND	tu.list_uid IN ('11')
ORDER BY preflabel;