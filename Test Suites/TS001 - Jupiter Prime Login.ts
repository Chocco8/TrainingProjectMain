<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS001 - Jupiter Prime Login</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>6d5026ec-48c1-435c-989b-075d9d2742e0</testSuiteGuid>
   <testCaseLink>
      <guid>4552bf7a-972b-47c3-a2db-6b6b6090cc26</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Jupiter Prime/TC001 - Login Successfull - Data Driven Variable</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>65f2a892-9b0b-4490-b557-0a579f48a4c2</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login Data (1)</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>a62394b1-1515-41ca-99db-1ab1e89b0a49</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>65f2a892-9b0b-4490-b557-0a579f48a4c2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>1a4ad519-d6d6-4be5-9e98-e1b151379cbc</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>65f2a892-9b0b-4490-b557-0a579f48a4c2</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>ece204bf-7763-42ad-b36a-014851b2cd5b</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
