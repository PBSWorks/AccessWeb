<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>JobMonitoring-WithPreReq</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>e64c0152-92f0-4ea7-9afc-a3abb9bf7afc</testSuiteGuid>
   <testCaseLink>
      <guid>09316c6a-4551-4de4-894d-ce7fec709bad</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>false</isRun>
      <testCaseId>Test Cases/PreReq/Pre-Req-Script-For-JobMonitoring-Ops</testCaseId>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>07e6f513-a04f-4fe3-b70a-198f3f69be18</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>64007784-bca4-488a-8a51-9d250067468a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>1c87bd78-81b1-402b-ae17-375332c5d79c</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>9e1d0a01-35b1-4e4d-b5c8-bb176ad9c1bc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>8f94f9b9-3a18-4eca-b080-5ff2e6edd9b9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>b1c12b7f-deff-4bfd-b652-c2cc17ec0237</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>a1555019-a296-44e4-a236-ad82f1782e18</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/JobMonitoring/JobActions_ForJobStates</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>de3de7c4-8a67-4b96-9c3f-44b6f7372061</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/JobAction</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>de3de7c4-8a67-4b96-9c3f-44b6f7372061</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>JobState</value>
         <variableId>fa14e12e-5a6a-419f-8a7f-e37415e0594a</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de3de7c4-8a67-4b96-9c3f-44b6f7372061</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>JobAction</value>
         <variableId>733a2509-5f57-4bf7-83e2-b170d379821f</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>de3de7c4-8a67-4b96-9c3f-44b6f7372061</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>deeba42e-d802-4544-b79c-5f155f26e90d</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>b9a88c01-3e4a-42b5-8a6d-68ece165320d</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>928f535c-4e4e-4747-b20f-2cc7e54abf94</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/JobMonitoring/JobActions_ForJobStates -Topmenu_Icon</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>50abcf66-282e-49cf-93ce-a0412e658999</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/JobActionIcon</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>50abcf66-282e-49cf-93ce-a0412e658999</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>JobState</value>
         <variableId>199c3045-c7fc-450e-974a-df474d42b903</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>50abcf66-282e-49cf-93ce-a0412e658999</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>JobAction</value>
         <variableId>c10574d8-703c-4518-8bef-8cdfdaacda23</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>50abcf66-282e-49cf-93ce-a0412e658999</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>0974633c-cd4f-4eb4-87d0-82966292f7e9</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>5a0a29f5-383b-4668-be6a-281f8831eb45</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/JobMonitoring/JobFilters</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Sanity/JobFilters</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>TestCaseName</value>
         <variableId>ace71100-db45-4bac-9cf7-4e06beb3fcfb</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FilterCategory</value>
         <variableId>da517e3c-6f16-45ad-a631-1f8d0f1e7ad4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FilterValue</value>
         <variableId>85fe5725-d3b0-47ef-8404-aebd0ef7e59e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>FilterTitle</value>
         <variableId>6cb8d038-a65f-4a85-95f4-15ca8ef3b50e</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>8ea59f6d-67a7-4368-8cef-42e60d8ef3b0</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>dataAttribute</value>
         <variableId>add707ea-162f-4718-9997-8cb889c18040</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>54bc3327-1895-48a0-ab95-3335411c3aba</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
