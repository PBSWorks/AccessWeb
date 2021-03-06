import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable


WebUI.callTestCase(findTestCase('Obsolete/Login'), [('username') : GlobalVariable.G_AdminUser, ('password') : GlobalVariable.G_AdminPasswd], FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('ServerManagement/Icon_ServerSettings'))

WebUI.verifyElementPresent(findTestObject('ServerManagement/div_Sever92'), 5)

WebUI.rightClick(findTestObject('ServerManagement/div_Sever92'))

WebUI.click(findTestObject('ServerManagement/ContextMn_DeleteServer'))

WebUI.verifyElementPresent(findTestObject('ServerManagement/PopUp_Delete Service'), 9)

WebUI.click(findTestObject('GenericObjects/btn_No'))

