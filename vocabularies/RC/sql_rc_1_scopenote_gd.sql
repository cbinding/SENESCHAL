SELECT DISTINCT
	list_uid AS scheme_id,
	the_te_uid AS concept_id, 
	trim(scope_note_gd) AS scopenote, 
	'gd' AS language
FROM	workingcopy_13_03_07
WHERE	scope_note_gd IS NOT NULL 
AND  	scope_note_gd <> '';