SELECT DISTINCT the_te_uid, term, list_uid FROM rc_thesaurus_terms tt
WHERE tt.status = 'Y'
AND NOT EXISTS
(SELECT 1 FROM rc_thesaurus_preferences tp WHERE tp.list_uid = tt.list_uid AND tp.the_te_uid_1 = tt.the_te_uid)
AND NOT EXISTS
(SELECT 1 FROM rc_thesaurus_preferences tp WHERE tp.list_uid = tt.list_uid AND tp.the_te_uid_2 = tt.the_te_uid)
AND NOT EXISTS
(SELECT 1 FROM rc_thesaurus_term_relations tr WHERE tr.list_uid = tt.list_uid AND tr.the_te_uid_1 = tt.the_te_uid)
AND NOT EXISTS
(SELECT 1 FROM rc_thesaurus_term_relations tr WHERE tr.list_uid = tt.list_uid AND tr.the_te_uid_2 = tt.the_te_uid)
AND NOT EXISTS
(SELECT 1 FROM rc_thesaurus_uses tu WHERE tu.list_uid = tt.list_uid AND tu.the_te_uid= tt.the_te_uid)


SELECT list_uid, the_te_uid, term FROM rc_thesaurus_terms tt WHERE tt.status = 'Y'
AND tt.the_te_uid NOT IN (SELECT the_te_uid_1 FROM rc_thesaurus_preferences)
AND tt.the_te_uid NOT IN (SELECT the_te_uid_2 FROM rc_thesaurus_preferences)
AND tt.the_te_uid NOT IN (SELECT the_te_uid_1 FROM rc_thesaurus_term_relations)
AND tt.the_te_uid NOT IN (SELECT the_te_uid_2 FROM rc_thesaurus_term_relations)
AND tt.the_te_uid NOT IN (SELECT the_te_uid FROM rc_thesaurus_uses)
