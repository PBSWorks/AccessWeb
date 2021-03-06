<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>ProfileModule-WithPreReq</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>92eb12a2-0884-4ff9-8f18-927c3a3e4492</testSuiteGuid>
   <testCaseLink>
      <guid>5ca6b327-9bda-4e0f-9d23-aef929650558</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/PreReq/Pre-Req-Script-For-Profiles</testCaseId>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>5e91b7d7-7df2-4077-95ee-936d61d69f6f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>21d284ab-4779-401a-af91-2c9c796d8744</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>abed14a1-632c-4271-83a5-40182be8ea2a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>aa6db84f-eac4-4a1e-8437-ddfb1a7454c9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>0e35f4df-c494-49c6-8777-66810b0b1f04</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>f3afd7ad-f022-4d5d-829a-6fddb1585535</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/ProfileModule/CreateProfile</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>c333685e-7b4b-4361-b092-197fb39456a2</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/ProfileCreation</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>proName</value>
         <variableId>9d2bae20-a478-4749-8ac6-272295f8a53c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AppName</value>
         <variableId>50871651-4438-4afa-a3d1-e015def75e60</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>449134c1-4ff3-4836-9e8f-ac89476b1ec7</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>InputFile</value>
         <variableId>796b0670-b2f1-427e-a522-2cb840506286</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>RemoteFile</value>
         <variableId>3e8a665b-3dc0-4e3d-8db8-1309dd903104</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>fileArg</value>
         <variableId>e06a756c-3750-4d42-9a5b-69da9cc7d2bd</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>c333685e-7b4b-4361-b092-197fb39456a2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>ProfileType</value>
         <variableId>b4c0253a-b76c-4b00-b4c9-d3db25c231c4</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>fde5d0fe-3587-4913-87b0-ccf3ae6a342f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/ProfileModule/JobSubmissionThroughProfileContextMenuAllProfiles</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>eedb66fb-27b8-4868-afc1-ca297ee58312</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/ProfileSubmissions</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>eedb66fb-27b8-4868-afc1-ca297ee58312</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>afcc287f-4303-437c-84a7-54c5f609e3a4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>eedb66fb-27b8-4868-afc1-ca297ee58312</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>proName</value>
         <variableId>a351aa0e-0046-484d-9538-a9879262f15f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>eedb66fb-27b8-4868-afc1-ca297ee58312</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AppName</value>
         <variableId>d233c01a-dff0-4e91-b5de-c116b3c8b088</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>eedb66fb-27b8-4868-afc1-ca297ee58312</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>fileName</value>
         <variableId>b896bcd9-8f58-4e35-bd91-3ba246a3c920</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>336e1ad1-9d38-4bf3-abb8-536d2b40cab2</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>9c97d509-5dcb-4ac6-86a9-60bbc4cf8b75</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>b87bddd6-5727-428e-9a6f-70dd1c831285</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/ProfileModule/DeleteProfile</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>33cc5c11-5370-4800-aa58-58e44a51b974</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/ProfileCreation</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>4343b31b-60fa-4ed8-9029-52a057e6f17f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>33cc5c11-5370-4800-aa58-58e44a51b974</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>proName</value>
         <variableId>0300cf62-3068-4779-b99e-ee7267d531f1</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>33cc5c11-5370-4800-aa58-58e44a51b974</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>AppName</value>
         <variableId>d45d70d8-f2f8-48b4-94fb-152c1a5ecfc0</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
