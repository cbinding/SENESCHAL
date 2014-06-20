--use MIDAS identifiers for schemes
UPDATE 	classification_groups
SET 	cla_gr_uid = 
(SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = classification_groups.cla_gr_uid)
WHERE EXISTS (SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = classification_groups.cla_gr_uid);

UPDATE 	thesaurus_terms 
SET 	cla_gr_uid = 
(SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = thesaurus_terms.cla_gr_uid)
WHERE EXISTS (SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = thesaurus_terms.cla_gr_uid);

UPDATE 	thesaurus_term_uses
SET 	cla_gr_uid = 
(SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = thesaurus_term_uses.cla_gr_uid)
WHERE EXISTS (SELECT mv.midas_id FROM amie_midasvocabularies mv WHERE mv.cla_gr_uid = thesaurus_term_uses.cla_gr_uid);

-- Update descriptions for EVIDENCE + COMPONENTS from P Carlisle email 12/07/2013
UPDATE 	classification_groups
SET	description = 'Terminology covering divisions and structural elements of a building or monument'
WHERE	cla_gr_uid = 'eh_com';

UPDATE 	classification_groups
SET	description = 'Terminology covering the existing physical remains of a monument, or the means by which a monument has been identified where no physical remains exist'
WHERE	cla_gr_uid = 'eh_evd';

-- Update name and description for objects (email from P Carlisle 16/07/2013 11:53)
UPDATE 	classification_groups
SET	name = 'FISH Archaeological Objects Thesaurus',
	description = 'Originally developed by the Archaeological Objects Working Party and published by the mda. It provides guidance for the recording of archaeological objects in Britain and Ireland covering all historical periods. Now maintained by FISH on behalf of the heritage sector'
WHERE	cla_gr_uid = 'mda_obj';

-- Update description for event types (email from P Carlisle 16/07/2013 11:53)
UPDATE 	classification_groups
SET	description = 'Terminology used for recording archaeological and architectural investigative, data collection exercises; from intrusive interventions to non damaging surveys'
WHERE	cla_gr_uid = 'agl_et';

-- Update description for maritime craft (email from P Carlisle 16/07/2013 11:53)
UPDATE 	classification_groups
SET	description = 'A thesaurus of craft types which survive as wrecks in English Heritages maritime record'
WHERE	cla_gr_uid = 'eh_tmc';

-- Change name of 'main building materials' to 'building materials' (email from P Carlisle 16/07/2013 11:53)
UPDATE 	classification_groups
SET	name = 'BUILDING MATERIALS'
WHERE	cla_gr_uid = 'eh_tbm';

--Update names of thesauri to have 'EH' suffix
UPDATE 	classification_groups
SET	name = name || ' (EH)'
WHERE	cla_gr_uid != 'mda_obj';

--actions requested by P Carlisle 11/07/2013 11:32 to resolve validation issues
--delete the related term of open air theatre from theatre
DELETE
FROM	thesaurus_term_relation 
WHERE	(th_t_u_uid_1 = '133640' AND th_t_u_uid_2 = '135200')
OR	(th_t_u_uid_2 = '133640' AND th_t_u_uid_1 = '135200');

--remove the instance of THATCH where its BT is PLANT
DELETE
FROM	thesaurus_term_relation 
WHERE	th_t_u_uid_1 = '139991';

DELETE
FROM	thesaurus_term_uses
WHERE	th_t_u_uid = '139991';

--this deletes the association between plant and THATCH altogether
DELETE	
FROM	thesaurus_term_relation 
WHERE	(th_t_u_uid_1 = '140084' AND th_t_u_uid_2 = '139985')
OR	(th_t_u_uid_2 = '140084' AND th_t_u_uid_1 = '139985');
--end actions requested by P Carlisle 11/07/2013 11:32

--changes advised by P Carlisle 12/07/2013 16:32
DELETE
FROM	thesaurus_term_relation
WHERE	(th_t_u_uid_1 = '202855' AND th_t_u_uid_2 = '139302')
OR	(th_t_u_uid_2 = '202855' AND th_t_u_uid_1 = '139302');

DELETE
FROM	thesaurus_term_relation
WHERE	(th_t_u_uid_1 = '135483' AND th_t_u_uid_2 = '132738')
OR	(th_t_u_uid_2 = '135483' AND th_t_u_uid_1 = '132738');

DELETE
FROM	thesaurus_term_relation
WHERE	(th_t_u_uid_1 = '132950' AND th_t_u_uid_2 = '133057')
OR	(th_t_u_uid_2 = '132950' AND th_t_u_uid_1 = '133057');

--end changes advised by P Carlisle 12/07/2013 16:32

--remove RT between SHINGLE and TILE (already BT/NT)
DELETE
FROM	thesaurus_term_relation
WHERE	(th_t_u_uid_1 = '140090' AND th_t_u_uid_2 = '140099')
OR	(th_t_u_uid_2 = '140090' AND th_t_u_uid_1 = '140099');

--remove RT between SHINGLE and TIMBER (already BT/NT)
DELETE
FROM	thesaurus_term_relation
WHERE	(th_t_u_uid_1 = '140097' AND th_t_u_uid_2 = '140095')
OR	(th_t_u_uid_2 = '140097' AND th_t_u_uid_1 = '140095');

