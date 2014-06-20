SELECT DISTINCT
	tt.cla_gr_uid AS scheme_id,
	tt.the_te_uid AS topconcept_id
FROM 	thesaurus_terms tt 
INNER JOIN 
	thesaurus_term_uses tu
ON	tt.cla_gr_uid = tu.cla_gr_uid 
AND	tt.term = tu.term
WHERE 	tu.th_t_u_uid = tu.top_term_u_uid
AND	tt.cla_gr_uid IN ('560');
