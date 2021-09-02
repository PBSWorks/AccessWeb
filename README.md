**Steps to prepare Access Setup** 

1. Clean up the stage area for the users - not required on Dockers 
2. PBS Jobs Needs to cleaned  - not required on Dockers
3. Cluster needs to be registered 
4. Download the pre requisites folder ( Pre-Requisites.zip )
5. Copy  Pre-Requisites folder to the head node and Unzip 
6. Navigate into unzipped folder
	 - Change permissions for the contents of Pre-Requisites folder  
	   - chmod 777 * 
	   - chmod 777 TestData/* 
	   - chmod 777 ToCopy/* 
	   - chmod 777 PrePost/* 

7. Update the list of available user in userlist.txt
8. Run the following scripts  ( in the same order ) 
	  -  configureAppDefs.sh
      - runForAllusers.sh

**Steps to prepare for KRE run** 

1. Download the repo 
2. Copy the entire Project ( AccessWeb ) to host ( from where the test are to be run ) 
3. Replace BASE_URL in the following file with access URL 
   -    AccessWeb\Profiles\FireFox_adminuser.glbl
   -    AccessWeb\Profiles\FireFox_david.glbl
   -  AccessWeb\Profiles\FireFox_raju.glbl
   -  AccessWeb\Profiles\FireFox_serviceuser.glbl
4. Update the project location in KRE.sh
5. Copy the KRE – ( Katalon_Studio_Engine_Linux_64-8.1.0.tar.gz ) Linux tar to host 
6. Untar the KRE tar 
7. Copy KRE.sh into untarred folder
8. Run KRE.sh once the Access Setup is ready.
    -   For the trial runs we are running the testRun suite on Firefox headless mode . 
   -   This suite has 9 test cases and runs for David user .
   -   The reports will be available in - $KATALON-PROJECT-LOCATON/AccessWeb/ExtentReports  folder.