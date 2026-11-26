# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Logintest.spec.ts >> Invalid password
- Location: src\tests\Logintest.spec.ts:18:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: undefined
```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f3e7]
      - list [ref=f3e10]:
        - listitem [ref=f3e11]:
          - link "Register" [ref=f3e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f3e13]:
          - link "Log in" [ref=f3e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f3e15]:
          - link "Shopping cart (0)" [ref=f3e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (0)
        - listitem [ref=f3e19]:
          - link "Wishlist (0)" [ref=f3e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f3e21]: Wishlist
            - generic [ref=f3e22]: (0)
      - generic [ref=f3e24]:
        - status [ref=f3e25]
        - textbox [ref=f3e26]: Search store
        - button "Search" [ref=f3e27] [cursor=pointer]
    - list [ref=f3e29]:
      - listitem [ref=f3e30]:
        - link "Books" [ref=f3e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f3e32]:
        - link "Computers" [ref=f3e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f3e34]:
        - link "Electronics" [ref=f3e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f3e36]:
        - link "Apparel & Shoes" [ref=f3e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f3e38]:
        - link "Digital downloads" [ref=f3e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f3e40]:
        - link "Jewelry" [ref=f3e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f3e42]:
        - link "Gift Cards" [ref=f3e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f3e44]:
        - generic [ref=f3e45]:
          - strong [ref=f3e47]: Categories
          - list [ref=f3e49]:
            - listitem [ref=f3e50]:
              - link "Books" [ref=f3e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f3e52]:
              - link "Computers" [ref=f3e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f3e54]:
              - link "Electronics" [ref=f3e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f3e56]:
              - link "Apparel & Shoes" [ref=f3e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f3e58]:
              - link "Digital downloads" [ref=f3e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f3e60]:
              - link "Jewelry" [ref=f3e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f3e62]:
              - link "Gift Cards" [ref=f3e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f3e64]:
          - strong [ref=f3e66]: Manufacturers
          - list [ref=f3e68]:
            - listitem [ref=f3e69]:
              - link "Tricentis" [ref=f3e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f3e71]:
          - strong [ref=f3e73]: Newsletter
          - generic [ref=f3e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f3e77]
            - button "Subscribe" [ref=f3e79] [cursor=pointer]
      - generic [ref=f3e81]:
        - heading "Welcome, Please Sign In!" [level=1] [ref=f3e83]
        - generic [ref=f3e84]:
          - generic [ref=f3e85]:
            - generic [ref=f3e86]:
              - strong [ref=f3e88]: New Customer
              - generic [ref=f3e89]: By creating an account on our website you will be able to shop faster, be up to date on an orders status, and keep track of the orders you have previously made.
              - button "Register" [ref=f3e91] [cursor=pointer]
            - generic [ref=f3e92]:
              - strong [ref=f3e94]: Returning Customer
              - generic [ref=f3e96]:
                - generic [ref=f3e98]:
                  - text: Login was unsuccessful. Please correct the errors and try again.
                  - list [ref=f3e99]:
                    - listitem [ref=f3e100]: The credentials provided are incorrect
                - generic [ref=f3e101]:
                  - generic [ref=f3e102]: "Email:"
                  - textbox "Email:" [active] [ref=f3e103]: haplap@gmail.com
                - generic [ref=f3e104]:
                  - generic [ref=f3e105]: "Password:"
                  - textbox "Password:" [ref=f3e106]
                - generic [ref=f3e107]:
                  - checkbox "Remember me?" [ref=f3e108]
                  - generic [ref=f3e109]: Remember me?
                  - link "Forgot password?" [ref=f3e111] [cursor=pointer]:
                    - /url: /passwordrecovery
                - button "Log in" [ref=f3e113] [cursor=pointer]
          - generic [ref=f3e114]:
            - heading "About login / registration" [level=2] [ref=f3e116]
            - paragraph [ref=f3e118]: Put your login / registration information here. You can edit this in the admin site.
  - generic [ref=f3e119]:
    - generic [ref=f3e120]:
      - generic [ref=f3e121]:
        - heading "Information" [level=3] [ref=f3e122]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - link "Sitemap" [ref=f3e125] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f3e126]:
            - link "Shipping & Returns" [ref=f3e127] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f3e128]:
            - link "Privacy Notice" [ref=f3e129] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f3e130]:
            - link "Conditions of Use" [ref=f3e131] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f3e132]:
            - link "About us" [ref=f3e133] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f3e134]:
            - link "Contact us" [ref=f3e135] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f3e136]:
        - heading "Customer service" [level=3] [ref=f3e137]
        - list [ref=f3e138]:
          - listitem [ref=f3e139]:
            - link "Search" [ref=f3e140] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f3e141]:
            - link "News" [ref=f3e142] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f3e143]:
            - link "Blog" [ref=f3e144] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f3e145]:
            - link "Recently viewed products" [ref=f3e146] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e147]:
            - link "Compare products list" [ref=f3e148] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f3e149]:
            - link "New products" [ref=f3e150] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f3e151]:
        - heading "My account" [level=3] [ref=f3e152]
        - list [ref=f3e153]:
          - listitem [ref=f3e154]:
            - link "My account" [ref=f3e155] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f3e156]:
            - link "Orders" [ref=f3e157] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f3e158]:
            - link "Addresses" [ref=f3e159] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f3e160]:
            - link "Shopping cart" [ref=f3e161] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f3e162]:
            - link "Wishlist" [ref=f3e163] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f3e164]:
        - heading "Follow us" [level=3] [ref=f3e165]
        - list [ref=f3e166]:
          - listitem [ref=f3e167]:
            - link "Facebook" [ref=f3e168] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e169]:
            - link "Twitter" [ref=f3e170] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e171]:
            - link "RSS" [ref=f3e172] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f3e173]:
            - link "YouTube" [ref=f3e174] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e175]:
            - link "Google+" [ref=f3e176] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e177]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e178] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e179]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  11 | }) => {
  12 | 
  13 |     await page.goto('https://demowebshop.tricentis.com/');
  14 |     await homepage.clickLogin();
  15 |     await loginPage.Loginuser('haplap@gmail.com','hp@123');   
  16 | })
  17 | 
  18 | test('Invalid password', async({page,
  19 |     homepage,
  20 |     loginPage,})=>{
  21 |     await page.goto('https://demowebshop.tricentis.com/');
  22 | 
  23 |       
  24 | 
  25 |     await homepage.clickLogin();
  26 |     await loginPage.Loginuser('haplap@gmail.com', 'hp@1234');
  27 |     await page.waitForLoadState('networkidle');
  28 |     await loginPage.clickLogIn();
> 29 |     expect(await loginPage.clickLogIn()).toBeTruthy();
     |                                          ^ Error: expect(received).toBeTruthy()
  30 |     await loginPage.getUnsuccessfulloginmsg();
  31 |     await ScreenshotUtil.captureScreenshot(page, 'InvalidPassword');
  32 | })
  33 | 
  34 | test('Blank Email', async({page,
  35 |     homepage,
  36 |     loginPage,})=>{
  37 |     await page.goto('https://demowebshop.tricentis.com/');
  38 |     await homepage.clickLogin();
  39 |     await loginPage.Loginuser('', 'hp@1234');
  40 |     await loginPage.clickLogIn();
  41 |     console.log(await loginPage.getUnsuccessfulloginmsg());
  42 |     await ScreenshotUtil.captureScreenshot(page, 'BlankEmail')
  43 | })
  44 | 
  45 | test('Forgot password navigation', async({page,
  46 |     homepage,
  47 |     loginPage,
  48 |     passwordRecovery,})=>{
  49 | 
  50 |     await page.goto('https://demowebshop.tricentis.com/');
  51 |     await homepage.clickLogin();
  52 |     await loginPage.clickForgotPassword();
  53 |     await page.waitForLoadState('networkidle');
  54 |     await passwordRecovery.enterEmailaddress('haplap@gmail.com');
  55 |     await passwordRecovery.clickRecoverButton();
  56 |     await page.waitForLoadState('networkidle');
  57 |     console.log(await passwordRecovery.getPasswordRecoverySuccessfulmsg());
  58 | 
  59 | 
  60 | })
  61 | 
  62 | test('Blank Password', async({page,
  63 |     homepage,
  64 |     loginPage,})=>{
  65 |     await page.goto('https://demowebshop.tricentis.com/');
  66 |     await homepage.clickLogin();
  67 |     await loginPage.Loginuser('haplap@gmail.com', '');
  68 |     await loginPage.clickLogIn();
  69 |     console.log(await loginPage.getUnsuccessfulloginmsg());
  70 |       
  71 | })
  72 | 
  73 | test('multiple tabs', async({browser})=>{
  74 | 
  75 |     const context = await browser.newContext();
  76 |     const page = await context.newPage();
  77 | 
  78 |     await page.goto('https://demowebshop.tricentis.com/');
  79 | 
  80 | 
  81 | })
```