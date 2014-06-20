--cleanup RC data after import to STELLAR
--to fix validation issues identified in 1st run
--and to modify data as appropriate for display

--Change 'MONUMENT THESAURUS (RCAHMS)'
UPDATE rc_thesaurus_list
SET	list_name = 'Monument Type Thesaurus (Scotland)',
	description = 'Monument types relating to the archaeological and built heritage of Scotland.',
	updated_dt = '04/12/2012 11:48:39'
WHERE	list_uid = '1';

--Change 'OBJECT THESAURUS (RCAHMS)'
UPDATE rc_thesaurus_list
SET	list_name = 'Archaeological Objects Thesaurus (Scotland)',
	description = 'Objects made by human activity.',
	updated_dt = '12/02/2013 10:12:29'
WHERE	list_uid = '2';

--Change 'MARITIME THESAURUS (RCAHMS)'
UPDATE rc_thesaurus_list
SET	list_name = 'Maritime Craft Thesaurus (Scotland)',
	description = 'Types of craft that survive as wrecks, or are documented as losses, in Scottish maritime waters.',
	updated_dt = '04/12/2012 11:48:39'
WHERE	list_uid = '3';

--Change 'MONUMENT THESAURUS (WALES)'
UPDATE rc_thesaurus_list
SET	list_name = 'MONUMENT TYPE THESAURUS (WALES)'
WHERE	list_uid = '10';

--501340 (GAME BOARD) PT to be 501332 (GAMING BOARD)
UPDATE	rc_thesaurus_preferences
SET	the_te_uid_2='501332',
	updated_dt='5/7/2013 15:00:00',
	updated_by='STELLAR'
WHERE	the_te_uid_1='501340';

--delete remaining preferred terms pointing to themselves (1 record)
DELETE 
FROM	rc_thesaurus_preferences
WHERE	the_te_uid_1 = the_te_uid_2;

--71214 (ROMAN CAMP) PT to be 68912 (MARCHING CAMP)
UPDATE	rc_thesaurus_preferences
SET	the_te_uid_2='68912',
	updated_dt='5/7/2013 15:00:00',
	updated_by='STELLAR'
WHERE	the_te_uid_1='71214';

--69973 (NON CONFORMIST CHAPEL) to become a preferred term
UPDATE	rc_thesaurus_terms
SET	index_term='Y',
	status='Y',
	updated_dt='5/7/2013 15:00:00',
	updated_by='STELLAR'
WHERE	the_te_uid = '69973';

--69973 (NON CONFORMIST CHAPEL) to become NT of 69967 (CHAPEL)
DELETE 
FROM	rc_thesaurus_preferences
WHERE	the_te_uid_1 = '69973';

INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900000',
	'69973',
	'10',
	'3804',
	'5095',
	datetime('now'),
	'STELLAR'
);

--68789 (FAIR) to become a preferred term
UPDATE	rc_thesaurus_terms
SET	index_term='Y',
	status='Y',
	updated_dt='24/6/2013 15:00:00',
	updated_by='STELLAR'
WHERE	the_te_uid = '68789';

--68789 (FAIR) to become NT of 91906 (FAIRGROUND)
DELETE 
FROM	rc_thesaurus_preferences
WHERE	the_te_uid_1 = '68789';

INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900001',
	'68789',
	'10',
	'4694',
	'3222',
	datetime('now'),
	'STELLAR'
);

--502144 HYDROPATHIC INSTITUTE to have BT 636 HOSPITAL (instead of RT)
DELETE 
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '502144' AND the_te_uid_2 = '636')
OR	(the_te_uid_2 = '502144' AND the_te_uid_1 = '636');

INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900002',
	'502144',
	'1',
	'736',
	'724',
	datetime('now'),
	'STELLAR'
);

--43 (CLEARANCE CAIRN) - remove BT of 42 (CAIRN)
DELETE
FROM	rc_thesaurus_uses
WHERE	the_t_u_uid = '1200';

--69451 (DOCK) - remove RT to 70292 (CANAL DOCK)
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '69451' AND the_te_uid_2 = '70292')
OR	(the_te_uid_2 = '69451' AND the_te_uid_1 = '70292');

--Changes advised by D Thomas (20130711) to resolve validation issues
--506745 (WATER VALVE) to have BT 93768 (WATER REGULATION INSTALLATION)
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900003',
	'506745',
	'10',
	'93768',
	'69438',
	datetime('now'),
	'STELLAR'
);


--68546 (ASH HOUSE) to have BT 68543 (AGRICULTURE AND SUBSISTENCE)
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900004',
	'68546',
	'10',
	'68543',
	'68543',
	datetime('now'),
	'STELLAR'
);

--68912 (MARCHING CAMP) to have BT 68895 (MILITARY CAMP)
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900005',
	'68912',
	'10',
	'68895',
	'68808',
	datetime('now'),
	'STELLAR'
);

--500172 (STONE  PROCESSING WORKS) to have BT 93442 (STONE EXTRACTION SITE) 
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900006',
	'500172',
	'10',
	'93442',
	'69047',
	datetime('now'),
	'STELLAR'
);

--504444 (MODIFIED NATURAL FEATURE) to have BT 78156 (FEATURE)
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900007',
	'504444',
	'10',
	'78156',
	'102872',
	datetime('now'),
	'STELLAR'
);

--503191 (LIMEBURNERS HUT) to have BT 91002 (AGRICULTURAL CHEMICAL SITE)
INSERT INTO rc_thesaurus_uses
(
	the_t_u_uid, 
	the_te_uid, 
	list_uid, 
	broad_term_u_uid, 
	top_term_u_uid,
	entered_dt, 
	entered_by
)
VALUES
(
	'900008',
	'503191',
	'10',
	'91002',
	'69047',
	datetime('now'),
	'STELLAR'
);

--2439 (TEST TERM 06) to be removed
--2441 (TEST TERM 07) to be removed
--2443 (TEST TERM 08) to be removed
DELETE
FROM	rc_thesaurus_terms
WHERE	the_te_uid IN ('2439', '2441', '2443')
AND	list_uid = '10';

DELETE
FROM	rc_thesaurus_uses
WHERE	the_te_uid IN ('2439', '2441', '2443')
AND	list_uid = '10';

DELETE
FROM	rc_thesaurus_preferences
WHERE	(the_te_uid_1 IN ('2439', '2441', '2443') OR the_te_uid_2 IN ('2439', '2441', '2443'))
AND	list_uid = '10';

DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 IN ('2439', '2441', '2443') OR the_te_uid_2 IN ('2439', '2441', '2443'))
AND	list_uid = '10';

--End of changes advised by D Thomas (20130711) to resolve validation issues

-- P McKeague 12/07/2013 16:08 - 122 (POLICIES) BT to be 552 (GARDENS PARKS & URBAN SPACES)
UPDATE	rc_thesaurus_uses
SET	broad_term_u_uid = '652', 
	top_term_u_uid = '652'
WHERE	the_t_u_uid = '222';

-- P McKeague 12/07/2013 16:38 - 1487 BURIAL CAIRN to have BT 1442 MONUMENT BY TYPE, not 42 CAIRN
--UPDATE	rc_thesaurus_uses
--SET	broad_term_u_uid = '1146', 
--top_term_u_uid = '1146'
--WHERE	the_t_u_uid = '1191';

-- P McKeague 12/07/2013 16:38 - 502108 CONSUMPTION CAIRN to have BT 1442 MONUMENT BY TYPE, not 42 CAIRN
--UPDATE	rc_thesaurus_uses
--SET	broad_term_u_uid = '1146', 
--top_term_u_uid = '1146'
--WHERE	the_t_u_uid = '7798';

-- P McKeague 15/07/2013 - 1487 BURIAL CAIRN remove RT 42 CAIRN (it is already BT)
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '1487' AND the_te_uid_2 = '42')
OR	(the_te_uid_2 = '1487' AND the_te_uid_1 = '42');

-- P McKeague 15/07/2013 - 502108 CONSUMPTION CAIRN remove RT 42 CAIRN (it is already BT)
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '502108' AND the_te_uid_2 = '42')
OR	(the_te_uid_2 = '502108' AND the_te_uid_1 = '42');

--RC1 loose concept 131 PEAT HAG (from Gaelic translations) - assign to 130 PEAT CUTTING
UPDATE	workingcopy_13_03_07
SET	the_te_uid = '130',
	term_gd = ''
WHERE	the_te_uid = '131';

--D Thomas 17/07/2013 phone call - changes to allow correct validation of MONUMENT TYPE (WALES) thesaurus

-- 69340 (MILL RACE) remove RT 70395 (WATERCOURSE) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '69340' AND the_te_uid_2 = '70395')
OR	(the_te_uid_2 = '69340' AND the_te_uid_1 = '70395');

-- 70442 (DRAINAGE DITCH) remove RT 70441 (DITCH) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '70442' AND the_te_uid_2 = '70441')
OR	(the_te_uid_2 = '70442' AND the_te_uid_1 = '70441');

-- 68603 (KENNELS) remove RT 68585 (HUNTING SITE) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '68603' AND the_te_uid_2 = '68585')
OR	(the_te_uid_2 = '68603' AND the_te_uid_1 = '68585');

-- 100514 (HARD) remove RT 92446 (LANDING POINT) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '100514' AND the_te_uid_2 = '92446')
OR	(the_te_uid_2 = '100514' AND the_te_uid_1 = '92446');

-- 69292 (SLAG HEAP) remove RT 69386 (SPOIL HEAP) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '69292' AND the_te_uid_2 = '69386')
OR	(the_te_uid_2 = '69292' AND the_te_uid_1 = '69386');

-- 71836 (FITTERS WORKSHOP) remove RT 69224 (ENGINEERING WORKSHOP) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '71836' AND the_te_uid_2 = '69224')
OR	(the_te_uid_2 = '71836' AND the_te_uid_1 = '69224');

-- 87142 (SPIGOT MORTAR REPLACEMENT) remove RT 68886 (GUN EMPLACEMENT) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '87142' AND the_te_uid_2 = '68886')
OR	(the_te_uid_2 = '87142' AND the_te_uid_1 = '68886');

-- 71361 (CATTLE SHELTER) remove RT 70411 (SHELTER) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '71361' AND the_te_uid_2 = '70411')
OR	(the_te_uid_2 = '71361' AND the_te_uid_1 = '70411');

-- 506521 (CLAWDD) remove RT 500073 (HEAD DYKE) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '506521' AND the_te_uid_2 = '500073')
OR	(the_te_uid_2 = '506521' AND the_te_uid_1 = '500073');

-- 506706 (KEEP) remove RT 68874 (FORTIFICATION) - already related hierarchically
DELETE
FROM	rc_thesaurus_term_relations
WHERE	(the_te_uid_1 = '506706' AND the_te_uid_2 = '68874')
OR	(the_te_uid_2 = '506706' AND the_te_uid_1 = '68874');

--End D Thomas 17/07/2013
