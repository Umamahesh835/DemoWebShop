# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> checkout process
- Location: src\tests\Checkout.spec.ts:8:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
```

# Test source

```ts
  1  | 
  2  | import { expect } from 'playwright/test';
  3  | import {test} from '../fixtures/BaseTest';
  4  | import { common } from '../utils/common';
  5  | import { ScreenshotUtil } from '../utils/ScreenshotUtil';
  6  | 
  7  | 
  8  | test('checkout process', async({page,homepage,electronics,contextMenu,loginPage,cellPhones,shoppingcart,billingAddress,shippingAddress,shippingMethod,paymentMethod,paymentInformation,confirmOrder,
  9  | 
  10 |     })=>{
  11 | 
  12 |         await page.goto('https://demowebshop.tricentis.com/');
  13 |         await homepage.clickLogin();
  14 |         await loginPage.Loginuser('haplap@gmail.com','hp@123');
  15 |         await loginPage.clickLogIn();
  16 |         await contextMenu.clickElectronics();
  17 |         await electronics.clickCellPhones();
  18 |         await cellPhones.clickProductNames('Smartphone');
> 19 |         await page.waitForURL('https://demowebshop.tricentis.com/smartphone');
     |                    ^ Error: page.waitForURL: Target page, context or browser has been closed
  20 |         await cellPhones.clickAddToCart();
  21 |         await cellPhones.getCarttext();
  22 |         await cellPhones.clickShoppingcart();
  23 |         await page.waitForURL('https://demowebshop.tricentis.com/cart');
  24 |         await shoppingcart.clickTermsOfService();
  25 |         await expect(shoppingcart.termsOfService).toBeChecked();
  26 |         await shoppingcart.clickCheckOut();
  27 |         await page.waitForURL('https://demowebshop.tricentis.com/onepagecheckout');
  28 |         //await page.waitForTimeout(2000);
  29 |         await ScreenshotUtil.captureScreenshot(page,'biiling');
  30 |         await page.waitForTimeout(2000);
  31 |         await shippingMethod.clickGround();
  32 |         await page.waitForTimeout(2000);
  33 |         await common.clickContinue(page);
  34 |         await paymentMethod.clickCashOnDelivery();
  35 |         await common.clickContinue(page);
  36 |         await paymentInformation.getCodText();
  37 |         await common.clickContinue(page);
  38 |         await confirmOrder.getPrice();
  39 |         await confirmOrder.getQuantity();
  40 |         await confirmOrder.getTotal();
  41 |         await confirmOrder.clickConfirm();
  42 |     });
```