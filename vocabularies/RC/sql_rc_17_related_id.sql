SELECT DISTINCT
	tr.list_uid AS scheme_id,
	tr.the_te_uid_1 AS concept_id,
	tr.the_te_uid_2 AS related_id
FROM 	rc_thesaurus_term_relations tr
INNER JOIN
	rc_thesaurus_terms tt1
ON	tr.the_te_uid_1 = tt1.the_te_uid
INNER JOIN
	rc_thesaurus_terms tt2
ON	tr.the_te_uid_2 = tt2.the_te_uid
WHERE	tt1.status = 'Y'
AND	tt2.status = 'Y'
AND	tr.list_uid IN ('17');