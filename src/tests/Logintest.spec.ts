import {test} from '../fixtures/BaseTest'
import {expect} from '@playwright/test';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';



test('verify login with valid credentials', async ({
    page,
    homepage,
    loginPage,
}) => {

    await page.goto('https://demowebshop.tricentis.com/');
    await homepage.clickLogin();
    await loginPage.Loginuser('haplap@gmail.com','hp@123');   
})

test('Invalid password', async({page,
    homepage,
    loginPage,})=>{
    await page.goto('https://demowebshop.tricentis.com/');

      

    await homepage.clickLogin();
    await loginPage.Loginuser('haplap@gmail.com', 'hp@1234');
    await page.waitForLoadState('networkidle');
    await loginPage.clickLogIn();

    await loginPage.getUnsuccessfulloginmsg();
    await ScreenshotUtil.captureScreenshot(page, 'InvalidPassword');
})

test('Blank Email', async({page,
    homepage,
    loginPage,})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await homepage.clickLogin();
    await loginPage.Loginuser('', 'hp@1234');
    await loginPage.clickLogIn();
    console.log(await loginPage.getUnsuccessfulloginmsg());
    await ScreenshotUtil.captureScreenshot(page, 'BlankEmail')
})

test('Forgot password navigation', async({page,
    homepage,
    loginPage,
    passwordRecovery,})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await homepage.clickLogin();
    await loginPage.clickForgotPassword();
    await page.waitForLoadState('networkidle');
    await passwordRecovery.enterEmailaddress('haplap@gmail.com');
    await passwordRecovery.clickRecoverButton();
    await page.waitForLoadState('networkidle');
    console.log(await passwordRecovery.getPasswordRecoverySuccessfulmsg());


})

test('Blank Password', async({page,
    homepage,
    loginPage,})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await homepage.clickLogin();
    await loginPage.Loginuser('haplap@gmail.com', '');
    await loginPage.clickLogIn();
    console.log(await loginPage.getUnsuccessfulloginmsg());
      
})

test('multiple tabs', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demowebshop.tricentis.com/');


})