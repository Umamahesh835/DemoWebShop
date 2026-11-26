
import { expect } from 'playwright/test';
import {test} from '../fixtures/BaseTest';
import { common } from '../utils/common';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';


test('checkout process', async({page,homepage,electronics,contextMenu,loginPage,cellPhones,shoppingcart,billingAddress,shippingAddress,shippingMethod,paymentMethod,paymentInformation,confirmOrder,

    })=>{

        await page.goto('https://demowebshop.tricentis.com/');
        await homepage.clickLogin();
        await loginPage.Loginuser('haplap@gmail.com','hp@123');
        await loginPage.clickLogIn();
        await contextMenu.clickElectronics();
        await electronics.clickCellPhones();
        await cellPhones.clickProductNames('Smartphone');
        await page.waitForURL('https://demowebshop.tricentis.com/smartphone');
        await cellPhones.clickAddToCart();
        await cellPhones.getCarttext();
        await cellPhones.clickShoppingcart();
        await page.waitForURL('https://demowebshop.tricentis.com/cart');
        await shoppingcart.clickTermsOfService();
        await expect(shoppingcart.termsOfService).toBeChecked();
        await shoppingcart.clickCheckOut();
        await page.waitForURL('https://demowebshop.tricentis.com/onepagecheckout');
        //await page.waitForTimeout(2000);
        await ScreenshotUtil.captureScreenshot(page,'biiling');
        await page.waitForTimeout(2000);
        await common.clickContinue(page);
        await page.waitForTimeout(2000);
        await common.clickContinue(page);
        await shippingMethod.clickGround();
        await page.waitForTimeout(2000);
        await common.clickContinue(page);
        await paymentMethod.clickCashOnDelivery();
        await common.clickContinue(page);
        await paymentInformation.getCodText();
        await common.clickContinue(page);
        await confirmOrder.getPrice();
        await confirmOrder.getQuantity();
        await confirmOrder.getTotal();
        await confirmOrder.clickConfirm();
    });