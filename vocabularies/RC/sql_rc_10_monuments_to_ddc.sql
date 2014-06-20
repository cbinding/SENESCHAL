SELECT DISTINCT 
	tt.list_uid AS scheme_id, 
	tt.the_te_uid AS concept_id, 
	dm.Column2 AS ddcno	
FROM	rc_thesaurus_terms tt
INNER JOIN
	monument_type_dewey_mapping dm
ON	tt.term = dm.Column1
WHERE	tt.list_uid='10'
AND	tt.status='Y'
AND	dm.Column2 <> ''
UNION
SELECT DISTINCT 
	tt.list_uid AS scheme_id, 
	tt.the_te_uid AS concept_id, 
	dm.Column4 AS ddcno	
FROM	rc_thesaurus_terms tt
INNER JOIN
	monument_type_dewey_mapping dm
ON	tt.term = dm.Column1
WHERE	tt.list_uid='10'
AND	tt.status='Y'
AND	dm.Column4 <> ''
UNION
SELECT DISTINCT 
	tt.list_uid AS scheme_id, 
	tt.the_te_uid AS concept_id, 
	dm.Column6 AS ddcno	
FROM	rc_thesaurus_terms tt
INNER JOIN
	monument_type_dewey_mapping dm
ON	tt.term = dm.Column1
WHERE	tt.list_uid='10'
AND	tt.status='Y'
AND	dm.Column6 <> '';