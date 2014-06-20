SELECT DISTINCT
	'eh_period' as scheme_id,
	period_code AS concept_id,
	trim(description) AS scopenote	
FROM 	eh_periods_list;
	