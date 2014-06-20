SELECT DISTINCT
	list_uid AS scheme_id,
	the_te_uid AS concept_id, 
	trim(term_gd) AS preflabel, 
	'gd' AS language
FROM	workingcopy_13_03_07
WHERE	term_gd IS NOT NULL AND term_gd <> '';
