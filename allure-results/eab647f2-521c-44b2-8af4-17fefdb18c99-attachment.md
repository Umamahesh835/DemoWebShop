# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> checkout process
- Location: src\tests\Checkout.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'checkbox' }).first()
    - waiting for "https://demowebshop.tricentis.com/cart" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/cart"
    - waiting for "https://demowebshop.tricentis.com/camera-photo" navigation to finish...
    - navigated to "https://demowebshop.tricentis.com/camera-photo"

```

# Page snapshot

```yaml
- generic [ref=f8e2]:
  - generic [ref=f8e3]:
    - generic [ref=f8e4]:
      - link [ref=f8e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f8e7]
      - list [ref=f8e10]:
        - listitem [ref=f8e11]:
          - link "haplap@gmail.com" [ref=f8e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f8e13]:
          - link "Log out" [ref=f8e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f8e15]:
          - link "Shopping cart (0)" [ref=f8e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f8e17]: Shopping cart
            - generic [ref=f8e18]: (0)
        - listitem [ref=f8e19]:
          - link "Wishlist (0)" [ref=f8e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f8e21]: Wishlist
            - generic [ref=f8e22]: (0)
      - generic [ref=f8e24]:
        - status [ref=f8e25]
        - textbox [ref=f8e26]: Search store
        - button "Search" [ref=f8e27] [cursor=pointer]
    - list [ref=f8e29]:
      - listitem [ref=f8e30]:
        - link "Books" [ref=f8e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f8e32]:
        - link "Computers" [ref=f8e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f8e34]:
        - link "Electronics" [ref=f8e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f8e36]:
        - link "Apparel & Shoes" [ref=f8e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f8e38]:
        - link "Digital downloads" [ref=f8e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f8e40]:
        - link "Jewelry" [ref=f8e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f8e42]:
        - link "Gift Cards" [ref=f8e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f8e44]:
        - generic [ref=f8e45]:
          - strong [ref=f8e47]: Categories
          - list [ref=f8e49]:
            - listitem [ref=f8e50]:
              - link "Books" [ref=f8e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f8e52]:
              - link "Computers" [ref=f8e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f8e54]:
              - link "Electronics" [ref=f8e55] [cursor=pointer]:
                - /url: /electronics
              - list [ref=f8e56]:
                - listitem [ref=f8e57]:
                  - link "Camera, photo" [ref=f8e58] [cursor=pointer]:
                    - /url: /camera-photo
                - listitem [ref=f8e59]:
                  - link "Cell phones" [ref=f8e60] [cursor=pointer]:
                    - /url: /cell-phones
            - listitem [ref=f8e61]:
              - link "Apparel & Shoes" [ref=f8e62] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f8e63]:
              - link "Digital downloads" [ref=f8e64] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f8e65]:
              - link "Jewelry" [ref=f8e66] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f8e67]:
              - link "Gift Cards" [ref=f8e68] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f8e69]:
          - strong [ref=f8e71]: Manufacturers
          - list [ref=f8e73]:
            - listitem [ref=f8e74]:
              - link "Tricentis" [ref=f8e75] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f8e76]:
          - strong [ref=f8e78]: Newsletter
          - generic [ref=f8e80]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f8e82]
            - button "Subscribe" [ref=f8e84] [cursor=pointer]
      - generic [ref=f8e85]:
        - list [ref=f8e87]:
          - listitem [ref=f8e88]:
            - link "Home" [ref=f8e89] [cursor=pointer]:
              - /url: /
            - text: /
          - listitem [ref=f8e90]:
            - link "Electronics" [ref=f8e91] [cursor=pointer]:
              - /url: /electronics
            - text: /
          - listitem [ref=f8e92]:
            - strong [ref=f8e93]: Camera, photo
        - generic [ref=f8e94]:
          - heading "Camera, photo" [level=1] [ref=f8e96]
          - generic [ref=f8e97]:
            - generic [ref=f8e98]:
              - generic [ref=f8e99]:
                - text: View as
                - combobox [ref=f8e100]:
                  - option "Grid" [selected]
                  - option "List"
              - generic [ref=f8e101]:
                - text: Sort by
                - combobox [ref=f8e102]:
                  - option "Position" [selected]
                  - 'option "Name: A to Z"'
                  - 'option "Name: Z to A"'
                  - 'option "Price: Low to High"'
                  - 'option "Price: High to Low"'
                  - option "Created on"
              - generic [ref=f8e103]:
                - text: Display
                - combobox [ref=f8e104]:
                  - option "4"
                  - option "8" [selected]
                  - option "12"
                - text: per page
            - generic [ref=f8e106]:
              - strong [ref=f8e108]: Filter by price
              - list [ref=f8e110]:
                - listitem [ref=f8e111]:
                  - link "Under 500.00" [ref=f8e112] [cursor=pointer]:
                    - /url: https://demowebshop.tricentis.com/camera-photo?price=-500
                - listitem [ref=f8e113]:
                  - link "Over 500.00" [ref=f8e114] [cursor=pointer]:
                    - /url: https://demowebshop.tricentis.com/camera-photo?price=500-
            - generic [ref=f8e115]:
              - generic [ref=f8e117]:
                - link [ref=f8e119] [cursor=pointer]:
                  - /url: /hard-drive-handycam-camcorder
                  - img "Picture of 1MP 60GB Hard Drive Handycam Camcorder" [ref=f8e120]
                - generic [ref=f8e121]:
                  - heading [level=2] [ref=f8e122]:
                    - link "1MP 60GB Hard Drive Handycam Camcorder" [ref=f8e123] [cursor=pointer]:
                      - /url: /hard-drive-handycam-camcorder
                  - generic "511 review(s)" [ref=f8e124]
                  - generic [ref=f8e127]: "349.00"
              - generic [ref=f8e131]:
                - link [ref=f8e133] [cursor=pointer]:
                  - /url: /camcorder
                  - img "Picture of Camcorder" [ref=f8e134]
                - generic [ref=f8e135]:
                  - heading [level=2] [ref=f8e136]:
                    - link "Camcorder" [ref=f8e137] [cursor=pointer]:
                      - /url: /camcorder
                  - generic "520 review(s)" [ref=f8e138]
                  - generic [ref=f8e141]: "530.00"
              - generic [ref=f8e145]:
                - link [ref=f8e147] [cursor=pointer]:
                  - /url: /digital-slr-camera
                  - img "Picture of Digital SLR Camera 12.2 Mpixel" [ref=f8e148]
                - generic [ref=f8e149]:
                  - heading [level=2] [ref=f8e150]:
                    - link "Digital SLR Camera 12.2 Mpixel" [ref=f8e151] [cursor=pointer]:
                      - /url: /digital-slr-camera
                  - generic "447 review(s)" [ref=f8e152]
                  - generic [ref=f8e155]: From 500.00
              - generic [ref=f8e159]:
                - link [ref=f8e161] [cursor=pointer]:
                  - /url: /3d-camcorder
                  - img "Picture of High Definition 3D Camcorder" [ref=f8e162]
                - generic [ref=f8e163]:
                  - heading [level=2] [ref=f8e164]:
                    - link "High Definition 3D Camcorder" [ref=f8e165] [cursor=pointer]:
                      - /url: /3d-camcorder
                  - generic "276 review(s)" [ref=f8e166]
                  - generic [ref=f8e169]: "1300.00"
  - generic [ref=f8e172]:
    - generic [ref=f8e173]:
      - generic [ref=f8e174]:
        - heading "Information" [level=3] [ref=f8e175]
        - list [ref=f8e176]:
          - listitem [ref=f8e177]:
            - link "Sitemap" [ref=f8e178] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f8e179]:
            - link "Shipping & Returns" [ref=f8e180] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f8e181]:
            - link "Privacy Notice" [ref=f8e182] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f8e183]:
            - link "Conditions of Use" [ref=f8e184] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f8e185]:
            - link "About us" [ref=f8e186] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f8e187]:
            - link "Contact us" [ref=f8e188] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f8e189]:
        - heading "Customer service" [level=3] [ref=f8e190]
        - list [ref=f8e191]:
          - listitem [ref=f8e192]:
            - link "Search" [ref=f8e193] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f8e194]:
            - link "News" [ref=f8e195] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f8e196]:
            - link "Blog" [ref=f8e197] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f8e198]:
            - link "Recently viewed products" [ref=f8e199] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f8e200]:
            - link "Compare products list" [ref=f8e201] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f8e202]:
            - link "New products" [ref=f8e203] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f8e204]:
        - heading "My account" [level=3] [ref=f8e205]
        - list [ref=f8e206]:
          - listitem [ref=f8e207]:
            - link "My account" [ref=f8e208] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f8e209]:
            - link "Orders" [ref=f8e210] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f8e211]:
            - link "Addresses" [ref=f8e212] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f8e213]:
            - link "Shopping cart" [ref=f8e214] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f8e215]:
            - link "Wishlist" [ref=f8e216] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f8e217]:
        - heading "Follow us" [level=3] [ref=f8e218]
        - list [ref=f8e219]:
          - listitem [ref=f8e220]:
            - link "Facebook" [ref=f8e221] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f8e222]:
            - link "Twitter" [ref=f8e223] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f8e224]:
            - link "RSS" [ref=f8e225] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f8e226]:
            - link "YouTube" [ref=f8e227] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f8e228]:
            - link "Google+" [ref=f8e229] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f8e230]:
      - text: Powered by
      - link "nopCommerce" [ref=f8e231] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f8e232]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test';
  2  | 
  3  | export class ShoppingCart{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly checkbox:Locator;
  7  | 
  8  |     constructor(page:Page){
  9  |         this.page = page;
  10 |         this.checkbox = page.getByRole('checkbox', {name: 'checkbox'});
  11 | 
  12 |     }
  13 | 
  14 |     async clickCheckbox(){
> 15 |         await this.checkbox.nth(0).check();
     |                                    ^ Error: locator.check: Test timeout of 30000ms exceeded.
  16 |     }
  17 | }
```