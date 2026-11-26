# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> checkout process
- Location: src\tests\Checkout.spec.ts:4:5

# Error details

```
Error: locator.innerText: Error: strict mode violation: locator('.details h2') resolved to 4 elements:
    1) <h2 class="product-title">…</h2> aka getByRole('heading', { name: '1MP 60GB Hard Drive Handycam' })
    2) <h2 class="product-title">…</h2> aka getByRole('heading', { name: 'Camcorder', exact: true })
    3) <h2 class="product-title">…</h2> aka getByRole('heading', { name: 'Digital SLR Camera 12.2 Mpixel' })
    4) <h2 class="product-title">…</h2> aka getByRole('heading', { name: 'High Definition 3D Camcorder' })

Call log:
  - waiting for locator('.details h2')

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - generic [ref=f4e4]:
      - link [ref=f4e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f4e7]
      - list [ref=f4e10]:
        - listitem [ref=f4e11]:
          - link "haplap@gmail.com" [ref=f4e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f4e13]:
          - link "Log out" [ref=f4e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f4e15]:
          - link "Shopping cart (0)" [ref=f4e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f4e17]: Shopping cart
            - generic [ref=f4e18]: (0)
        - listitem [ref=f4e19]:
          - link "Wishlist (0)" [ref=f4e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f4e21]: Wishlist
            - generic [ref=f4e22]: (0)
      - generic [ref=f4e24]:
        - status [ref=f4e25]
        - textbox [ref=f4e26]: Search store
        - button "Search" [ref=f4e27] [cursor=pointer]
    - list [ref=f4e29]:
      - listitem [ref=f4e30]:
        - link "Books" [ref=f4e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f4e32]:
        - link "Computers" [ref=f4e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f4e34]:
        - link "Electronics" [ref=f4e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f4e36]:
        - link "Apparel & Shoes" [ref=f4e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f4e38]:
        - link "Digital downloads" [ref=f4e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f4e40]:
        - link "Jewelry" [ref=f4e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f4e42]:
        - link "Gift Cards" [ref=f4e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f4e44]:
        - generic [ref=f4e45]:
          - strong [ref=f4e47]: Categories
          - list [ref=f4e49]:
            - listitem [ref=f4e50]:
              - link "Books" [ref=f4e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f4e52]:
              - link "Computers" [ref=f4e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f4e54]:
              - link "Electronics" [ref=f4e55] [cursor=pointer]:
                - /url: /electronics
              - list [ref=f4e56]:
                - listitem [ref=f4e57]:
                  - link "Camera, photo" [ref=f4e58] [cursor=pointer]:
                    - /url: /camera-photo
                - listitem [ref=f4e59]:
                  - link "Cell phones" [ref=f4e60] [cursor=pointer]:
                    - /url: /cell-phones
            - listitem [ref=f4e61]:
              - link "Apparel & Shoes" [ref=f4e62] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f4e63]:
              - link "Digital downloads" [ref=f4e64] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f4e65]:
              - link "Jewelry" [ref=f4e66] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f4e67]:
              - link "Gift Cards" [ref=f4e68] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f4e69]:
          - strong [ref=f4e71]: Manufacturers
          - list [ref=f4e73]:
            - listitem [ref=f4e74]:
              - link "Tricentis" [ref=f4e75] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f4e76]:
          - strong [ref=f4e78]: Newsletter
          - generic [ref=f4e80]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f4e82]
            - button "Subscribe" [ref=f4e84] [cursor=pointer]
      - generic [ref=f4e85]:
        - list [ref=f4e87]:
          - listitem [ref=f4e88]:
            - link "Home" [ref=f4e89] [cursor=pointer]:
              - /url: /
            - text: /
          - listitem [ref=f4e90]:
            - link "Electronics" [ref=f4e91] [cursor=pointer]:
              - /url: /electronics
            - text: /
          - listitem [ref=f4e92]:
            - strong [ref=f4e93]: Camera, photo
        - generic [ref=f4e94]:
          - heading "Camera, photo" [level=1] [ref=f4e96]
          - generic [ref=f4e97]:
            - generic [ref=f4e98]:
              - generic [ref=f4e99]:
                - text: View as
                - combobox [ref=f4e100]:
                  - option "Grid" [selected]
                  - option "List"
              - generic [ref=f4e101]:
                - text: Sort by
                - combobox [ref=f4e102]:
                  - option "Position" [selected]
                  - 'option "Name: A to Z"'
                  - 'option "Name: Z to A"'
                  - 'option "Price: Low to High"'
                  - 'option "Price: High to Low"'
                  - option "Created on"
              - generic [ref=f4e103]:
                - text: Display
                - combobox [ref=f4e104]:
                  - option "4"
                  - option "8" [selected]
                  - option "12"
                - text: per page
            - generic [ref=f4e106]:
              - strong [ref=f4e108]: Filter by price
              - list [ref=f4e110]:
                - listitem [ref=f4e111]:
                  - link "Under 500.00" [ref=f4e112] [cursor=pointer]:
                    - /url: https://demowebshop.tricentis.com/camera-photo?price=-500
                - listitem [ref=f4e113]:
                  - link "Over 500.00" [ref=f4e114] [cursor=pointer]:
                    - /url: https://demowebshop.tricentis.com/camera-photo?price=500-
            - generic [ref=f4e115]:
              - generic [ref=f4e117]:
                - link [ref=f4e119] [cursor=pointer]:
                  - /url: /hard-drive-handycam-camcorder
                  - img "Picture of 1MP 60GB Hard Drive Handycam Camcorder" [ref=f4e120]
                - generic [ref=f4e121]:
                  - heading [level=2] [ref=f4e122]:
                    - link "1MP 60GB Hard Drive Handycam Camcorder" [ref=f4e123] [cursor=pointer]:
                      - /url: /hard-drive-handycam-camcorder
                  - generic "511 review(s)" [ref=f4e124]
                  - generic [ref=f4e127]: "349.00"
              - generic [ref=f4e131]:
                - link [ref=f4e133] [cursor=pointer]:
                  - /url: /camcorder
                  - img "Picture of Camcorder" [ref=f4e134]
                - generic [ref=f4e135]:
                  - heading [level=2] [ref=f4e136]:
                    - link "Camcorder" [ref=f4e137] [cursor=pointer]:
                      - /url: /camcorder
                  - generic "520 review(s)" [ref=f4e138]
                  - generic [ref=f4e141]: "530.00"
              - generic [ref=f4e145]:
                - link [ref=f4e147] [cursor=pointer]:
                  - /url: /digital-slr-camera
                  - img "Picture of Digital SLR Camera 12.2 Mpixel" [ref=f4e148]
                - generic [ref=f4e149]:
                  - heading [level=2] [ref=f4e150]:
                    - link "Digital SLR Camera 12.2 Mpixel" [ref=f4e151] [cursor=pointer]:
                      - /url: /digital-slr-camera
                  - generic "447 review(s)" [ref=f4e152]
                  - generic [ref=f4e155]: From 500.00
              - generic [ref=f4e159]:
                - link [ref=f4e161] [cursor=pointer]:
                  - /url: /3d-camcorder
                  - img "Picture of High Definition 3D Camcorder" [ref=f4e162]
                - generic [ref=f4e163]:
                  - heading [level=2] [ref=f4e164]:
                    - link "High Definition 3D Camcorder" [ref=f4e165] [cursor=pointer]:
                      - /url: /3d-camcorder
                  - generic "276 review(s)" [ref=f4e166]
                  - generic [ref=f4e169]: "1300.00"
  - generic [ref=f4e172]:
    - generic [ref=f4e173]:
      - generic [ref=f4e174]:
        - heading "Information" [level=3] [ref=f4e175]
        - list [ref=f4e176]:
          - listitem [ref=f4e177]:
            - link "Sitemap" [ref=f4e178] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f4e179]:
            - link "Shipping & Returns" [ref=f4e180] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f4e181]:
            - link "Privacy Notice" [ref=f4e182] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f4e183]:
            - link "Conditions of Use" [ref=f4e184] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f4e185]:
            - link "About us" [ref=f4e186] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f4e187]:
            - link "Contact us" [ref=f4e188] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f4e189]:
        - heading "Customer service" [level=3] [ref=f4e190]
        - list [ref=f4e191]:
          - listitem [ref=f4e192]:
            - link "Search" [ref=f4e193] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f4e194]:
            - link "News" [ref=f4e195] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f4e196]:
            - link "Blog" [ref=f4e197] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f4e198]:
            - link "Recently viewed products" [ref=f4e199] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f4e200]:
            - link "Compare products list" [ref=f4e201] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f4e202]:
            - link "New products" [ref=f4e203] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f4e204]:
        - heading "My account" [level=3] [ref=f4e205]
        - list [ref=f4e206]:
          - listitem [ref=f4e207]:
            - link "My account" [ref=f4e208] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f4e209]:
            - link "Orders" [ref=f4e210] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f4e211]:
            - link "Addresses" [ref=f4e212] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f4e213]:
            - link "Shopping cart" [ref=f4e214] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f4e215]:
            - link "Wishlist" [ref=f4e216] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f4e217]:
        - heading "Follow us" [level=3] [ref=f4e218]
        - list [ref=f4e219]:
          - listitem [ref=f4e220]:
            - link "Facebook" [ref=f4e221] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f4e222]:
            - link "Twitter" [ref=f4e223] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f4e224]:
            - link "RSS" [ref=f4e225] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f4e226]:
            - link "YouTube" [ref=f4e227] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f4e228]:
            - link "Google+" [ref=f4e229] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f4e230]:
      - text: Powered by
      - link "nopCommerce" [ref=f4e231] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f4e232]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class CellPhones{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly ProductNames:Locator;
  7  | 
  8  |     constructor(page:Page){
  9  |         this.page = page;
  10 |         this.ProductNames = page.locator('.details h2');
  11 |     }
  12 | 
  13 |     async clickProductNames(name:string){
> 14 |         const productName = await this.ProductNames.innerText();
     |                                                     ^ Error: locator.innerText: Error: strict mode violation: locator('.details h2') resolved to 4 elements:
  15 |         console.log(productName);
  16 | 
  17 |         const count = await this.ProductNames.count();
  18 | 
  19 |         for(let i=0;i<count;i++){
  20 |             const pNames  = await this.ProductNames.nth(i).innerText();
  21 |             
  22 |             if(pNames.trim()=== name){
  23 |                 await this.ProductNames.nth(i).click();
  24 |                 break;
  25 |             }
  26 |         }
  27 |     }
  28 | }
```