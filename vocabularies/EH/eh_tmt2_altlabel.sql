SELECT DISTINCT
	tt.cla_gr_uid AS scheme_id,
	tp.the_te_uid_2 AS concept_id,
	trim(tt.term) AS altlabel
FROM 	thesaurus_term_preferences tp
INNER JOIN 
	thesaurus_terms tt	
ON 	tp.the_te_uid_1 = tt.the_te_uid
INNER JOIN
	thesaurus_terms tt2
ON	tp.the_te_uid_2 = tt2.the_te_uid
WHERE	tt.status = 'N' 
AND	tt2.status = 'P'
AND	tt.cla_gr_uid IN ('eh_tmt2');
