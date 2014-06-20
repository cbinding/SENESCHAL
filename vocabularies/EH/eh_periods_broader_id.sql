SELECT DISTINCT
	'eh_period' as scheme_id,
	p1.period_code AS concept_id,
	p2.period_code AS broader_id	
FROM 	eh_periods_list p1
INNER JOIN
	eh_periods_list p2
ON p1.parent_uid = p2.period_uid
WHERE	p1.parent_uid <> "";