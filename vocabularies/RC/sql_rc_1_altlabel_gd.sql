SELECT DISTINCT
	'1' AS scheme_id,
	the_te_uid AS concept_id, 
	trim(keywords_gd) AS altlabel, 
	'gd' AS language
FROM	workingcopy_13_03_07_keywords_gd_split
WHERE	keywords_gd IS NOT NULL 
AND 	keywords_gd <> '';