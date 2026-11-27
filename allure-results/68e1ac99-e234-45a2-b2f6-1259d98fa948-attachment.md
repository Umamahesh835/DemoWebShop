# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.ts >> verify login with valid credentials
- Location: src\tests\Logintest.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Log out' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Log out' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Log out' })

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Categories
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- strong: Manufacturers
- list:
  - listitem:
    - link "Tricentis":
      - /url: /tricentis
- strong: Newsletter
- text: "Sign up for our newsletter:"
- textbox
- button "Subscribe"
- heading "Welcome, Please Sign In!" [level=1]
- strong: New Customer
- text: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
- button "Register"
- strong: Returning Customer
- text: "Email:"
- textbox "Email:": haplap@gmail.com
- text: "Password:"
- textbox "Password:": hp@123
- checkbox "Remember me?"
- text: Remember me?
- link "Forgot password?":
  - /url: /passwordrecovery
- button "Log in"
- heading "About login / registration" [level=2]
- paragraph: Put your login / registration information here. You can edit this in the admin site.
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {test} from '../fixtures/BaseTest'
  2  | import {expect} from '@playwright/test';
  3  | import { ScreenshotUtil } from '../utils/ScreenshotUtil';
  4  | 
  5  | 
  6  | 
  7  | test('verify login with valid credentials', async ({
  8  |     page,
  9  |     homepage,
  10 |     loginPage,
  11 |     topcontextMenu,
  12 | }) => {
  13 | 
  14 |     await page.goto('https://demowebshop.tricentis.com/');
  15 |     await homepage.clickLogin();
  16 |     await loginPage.Loginuser('haplap@gmail.com','hp@123'); 
> 17 |     await expect(topcontextMenu.LogOut).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 | })
  20 | 
  21 | test('Invalid password', async({page,
  22 |     homepage,
  23 |     loginPage,})=>{
  24 |     await page.goto('https://demowebshop.tricentis.com/');
  25 |     await homepage.clickLogin();
  26 |     await loginPage.Loginuser('haplap@gmail.com', 'hp@1234');
  27 |     await page.waitForLoadState('networkidle');
  28 |     await loginPage.clickLogIn();
  29 |     await loginPage.getUnsuccessfulloginmsg();
  30 |     await ScreenshotUtil.captureScreenshot(page, 'InvalidPassword');
  31 | })
  32 | 
  33 | test('Blank Email', async({page,
  34 |     homepage,
  35 |     loginPage,})=>{
  36 |     await page.goto('https://demowebshop.tricentis.com/');
  37 |     await homepage.clickLogin();
  38 |     await loginPage.Loginuser('', 'hp@1234');
  39 |     await loginPage.clickLogIn();
  40 |     console.log(await loginPage.getUnsuccessfulloginmsg());
  41 |     await ScreenshotUtil.captureScreenshot(page, 'BlankEmail')
  42 | })
  43 | 
  44 | test('Forgot password navigation', async({page,
  45 |     homepage,
  46 |     loginPage,
  47 |     passwordRecovery,})=>{
  48 | 
  49 |     await page.goto('https://demowebshop.tricentis.com/');
  50 |     await homepage.clickLogin();
  51 |     await loginPage.clickForgotPassword();
  52 |     await page.waitForLoadState('networkidle');
  53 |     await passwordRecovery.enterEmailaddress('haplap@gmail.com');
  54 |     await passwordRecovery.clickRecoverButton();
  55 |     await page.waitForLoadState('networkidle');
  56 |     console.log(await passwordRecovery.getPasswordRecoverySuccessfulmsg());
  57 | 
  58 | 
  59 | })
  60 | 
  61 | test('Blank Password', async({page,
  62 |     homepage,
  63 |     loginPage,})=>{
  64 |     await page.goto('https://demowebshop.tricentis.com/');
  65 |     await homepage.clickLogin();
  66 |     await loginPage.Loginuser('haplap@gmail.com', '');
  67 |     await loginPage.clickLogIn();
  68 |     console.log(await loginPage.getUnsuccessfulloginmsg());
  69 |       
  70 | })
  71 | 
  72 | 
```