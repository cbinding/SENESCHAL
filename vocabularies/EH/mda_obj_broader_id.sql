SELECT DISTINCT 
	tt1.cla_gr_uid AS scheme_id,
	tt1.the_te_uid AS concept_id, 
	tt2.the_te_uid AS broader_id	
FROM (((thesaurus_term_uses tu1 
INNER JOIN thesaurus_term_uses tu2 
ON (tu1.broad_term_u_uid = tu2.th_t_u_uid) 
AND (tu1.cla_gr_uid = tu2.cla_gr_uid))
INNER JOIN thesaurus_terms tt1 
ON (tu1.cla_gr_uid = tt1.cla_gr_uid) AND (tu1.term = tt1.term))
INNER JOIN thesaurus_terms tt2 
ON (tu2.cla_gr_uid = tt2.cla_gr_uid) AND (tu2.term = tt2.term))
WHERE 	tt1.status = 'P' 
AND	tt2.status = 'P' 
AND	tu1.cla_gr_uid IN ('mda_obj');