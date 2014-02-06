REM combine and minify seneschal widgets script
REM echo off

REM get timestamp for naming the output files
set yyyy=%date:~6,4%
set mm=%date:~3,2%
set dd=%date:~0,2%
set hh=%time:~0,2%
if %hh% lss 10 (set hh=0%time:~1,1%)
set nn=%time:~3,2%
set ss=%time:~6,2%
set datestamp=%yyyy%%mm%%dd%
set timestamp=%yyyy%%mm%%dd%

REM combine scripts into single (datestamped) file
REM done in stages as longer command fell over (256 char limit??)
copy jquery.ui.widget.min.js +^
 usw.uri.dcterms.js +^
 usw.uri.skos.js +^
 usw.seneschal.util.js +^
 usw.seneschal.waitable.js +^
 usw.seneschal.header.js +^
 usw.seneschal.footer.js ^
 usw.seneschal.%datestamp%-1.js

copy usw.seneschal.schemelist.js +^
 usw.seneschal.topconcepts.js +^
 usw.seneschal.schemedetails.js +^
 usw.seneschal.schemedetailscomposite.js ^
 usw.seneschal.%datestamp%-2.js

copy usw.seneschal.conceptdetails.js +^
 usw.seneschal.conceptrelations.js +^
 usw.seneschal.conceptdetailscomposite.js +^
 usw.seneschal.termsearch.js +^
 usw.seneschal.termsuggest.js ^
 usw.seneschal.%datestamp%-3.js

copy usw.seneschal.%datestamp%-1.js +^
 usw.seneschal.%datestamp%-2.js +^
 usw.seneschal.%datestamp%-3.js ^
 usw.seneschal.%datestamp%.js

REM remove intermediate files
del usw.seneschal.%datestamp%-1.js
del usw.seneschal.%datestamp%-2.js
del usw.seneschal.%datestamp%-3.js

REM minify combined scripts
jsmin.exe < usw.seneschal.%datestamp%.js > usw.seneschal.%datestamp%-min.js
