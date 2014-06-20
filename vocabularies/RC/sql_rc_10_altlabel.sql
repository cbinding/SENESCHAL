SELECT DISTINCT
	tt.list_uid AS scheme_id,
	tp.the_te_uid_2 AS concept_id,
	trim(tt.term) AS altlabel
FROM 	rc_thesaurus_preferences tp
INNER JOIN
	rc_thesaurus_terms tt
ON	tp.the_te_uid_1 = tt.the_te_uid
INNER JOIN
	rc_thesaurus_terms tt2
ON	tp.the_te_uid_2 = tt2.the_te_uid
WHERE	tt.status = 'N' 
AND	tt2.status != 'P' 
AND	tt.list_uid IN ('10');