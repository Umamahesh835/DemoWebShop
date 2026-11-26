# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.ts >> checkout process
- Location: src\tests\Checkout.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 4 elements:
    1) <input type="button" value="Add to cart" data-productid="43" id="add-to-cart-button-43" class="button-1 add-to-cart-button" onclick="AjaxCart.addproducttocart_details('/addproducttocart/details/43/1', '#product-details-form');return false;"/> aka locator('#add-to-cart-button-43')
    2) <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/75/1/1    ');return false;"/> aka getByRole('button', { name: 'Add to cart' }).nth(1)
    3) <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/74/1/1    ');return false;"/> aka getByRole('button', { name: 'Add to cart' }).nth(2)
    4) <input type="button" value="Add to cart" class="button-2 product-box-add-to-cart-button" onclick="AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/28/1/1    ');return false;"/> aka getByRole('button', { name: 'Add to cart' }).nth(3)

Call log:
  - waiting for getByRole('button', { name: 'Add to cart' })

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic [ref=f5e4]:
      - link [ref=f5e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f5e7]
      - list [ref=f5e10]:
        - listitem [ref=f5e11]:
          - link "haplap@gmail.com" [ref=f5e12] [cursor=pointer]:
            - /url: /customer/info
        - listitem [ref=f5e13]:
          - link "Log out" [ref=f5e14] [cursor=pointer]:
            - /url: /logout
        - listitem [ref=f5e15]:
          - link "Shopping cart (0)" [ref=f5e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f5e17]: Shopping cart
            - generic [ref=f5e18]: (0)
        - listitem [ref=f5e19]:
          - link "Wishlist (0)" [ref=f5e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f5e21]: Wishlist
            - generic [ref=f5e22]: (0)
      - generic [ref=f5e24]:
        - status [ref=f5e25]
        - textbox [ref=f5e26]: Search store
        - button "Search" [ref=f5e27] [cursor=pointer]
    - list [ref=f5e29]:
      - listitem [ref=f5e30]:
        - link "Books" [ref=f5e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f5e32]:
        - link "Computers" [ref=f5e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f5e34]:
        - link "Electronics" [ref=f5e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f5e36]:
        - link "Apparel & Shoes" [ref=f5e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f5e38]:
        - link "Digital downloads" [ref=f5e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f5e40]:
        - link "Jewelry" [ref=f5e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f5e42]:
        - link "Gift Cards" [ref=f5e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f5e44]:
        - generic [ref=f5e45]:
          - strong [ref=f5e47]: Categories
          - list [ref=f5e49]:
            - listitem [ref=f5e50]:
              - link "Books" [ref=f5e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f5e52]:
              - link "Computers" [ref=f5e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f5e54]:
              - link "Electronics" [ref=f5e55] [cursor=pointer]:
                - /url: /electronics
              - list [ref=f5e56]:
                - listitem [ref=f5e57]:
                  - link "Camera, photo" [ref=f5e58] [cursor=pointer]:
                    - /url: /camera-photo
                - listitem [ref=f5e59]:
                  - link "Cell phones" [ref=f5e60] [cursor=pointer]:
                    - /url: /cell-phones
            - listitem [ref=f5e61]:
              - link "Apparel & Shoes" [ref=f5e62] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f5e63]:
              - link "Digital downloads" [ref=f5e64] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f5e65]:
              - link "Jewelry" [ref=f5e66] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f5e67]:
              - link "Gift Cards" [ref=f5e68] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f5e69]:
          - strong [ref=f5e71]: Manufacturers
          - list [ref=f5e73]:
            - listitem [ref=f5e74]:
              - link "Tricentis" [ref=f5e75] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f5e76]:
          - strong [ref=f5e78]: Newsletter
          - generic [ref=f5e80]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f5e82]
            - button "Subscribe" [ref=f5e84] [cursor=pointer]
      - generic [ref=f5e85]:
        - list [ref=f5e87]:
          - listitem [ref=f5e88]:
            - link "Home" [ref=f5e90] [cursor=pointer]:
              - /url: /
            - text: /
          - listitem [ref=f5e91]:
            - link "Electronics" [ref=f5e93] [cursor=pointer]:
              - /url: /electronics
            - text: /
          - listitem [ref=f5e94]:
            - link "Cell phones" [ref=f5e96] [cursor=pointer]:
              - /url: /cell-phones
            - text: /
          - listitem [ref=f5e97]:
            - strong [ref=f5e98]: Smartphone
        - generic [ref=f5e102]:
          - generic [ref=f5e103]:
            - img "Picture of Smartphone" [ref=f5e106]
            - generic [ref=f5e107]:
              - heading "Smartphone" [level=1] [ref=f5e109]
              - generic [ref=f5e110]: Newest Tricentis smartphone
              - generic [ref=f5e111]: "Availability: In stock"
              - generic [ref=f5e116]:
                - link "1896 review(s)" [ref=f5e117] [cursor=pointer]:
                  - /url: /productreviews/43
                - text: "|"
                - link "Add your review" [ref=f5e118] [cursor=pointer]:
                  - /url: /productreviews/43
              - generic [ref=f5e119]: "100.00"
              - generic [ref=f5e122]:
                - text: "Qty:"
                - textbox "Qty:" [ref=f5e123]: "1"
                - button "Add to cart" [ref=f5e124] [cursor=pointer]
                - button "Add to wishlist" [ref=f5e125] [cursor=pointer]
              - button "Email a friend" [ref=f5e127] [cursor=pointer]
              - button "Add to compare list" [ref=f5e129] [cursor=pointer]
            - generic [ref=f5e130]:
              - paragraph [ref=f5e131]: Ideal for everyday use.
              - paragraph [ref=f5e132]: "Specs:"
              - paragraph [ref=f5e133]: Battery life 8h in power use
              - paragraph [ref=f5e134]: LTE
          - generic [ref=f5e135]:
            - generic [ref=f5e136]:
              - strong [ref=f5e138]: Product tags
              - generic:
                - list:
                  - listitem [ref=f5e139]:
                    - link "awesome" [ref=f5e140] [cursor=pointer]:
                      - /url: /producttag/8/awesome
                    - text: (20)
                  - listitem [ref=f5e141]: ","
                  - listitem [ref=f5e142]:
                    - link "compact" [ref=f5e143] [cursor=pointer]:
                      - /url: /producttag/9/compact
                    - text: (3)
                  - listitem [ref=f5e144]: ","
                  - listitem [ref=f5e145]:
                    - link "cell" [ref=f5e146] [cursor=pointer]:
                      - /url: /producttag/12/cell
                    - text: (2)
            - generic [ref=f5e147]:
              - strong [ref=f5e149]: Customers who bought this item also bought
              - generic [ref=f5e151]:
                - link [ref=f5e153] [cursor=pointer]:
                  - /url: /simple-computer
                  - img "Picture of Simple Computer" [ref=f5e154]
                - generic [ref=f5e155]:
                  - heading [level=2] [ref=f5e156]:
                    - link "Simple Computer" [ref=f5e157] [cursor=pointer]:
                      - /url: /simple-computer
                  - generic "418 review(s)" [ref=f5e158]
                  - generic [ref=f5e161]:
                    - generic [ref=f5e162]: "800.00"
                    - button "Add to cart" [ref=f5e165] [cursor=pointer]
              - generic [ref=f5e167]:
                - link [ref=f5e169] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
                  - img "Picture of Build your own expensive computer" [ref=f5e170]
                - generic [ref=f5e171]:
                  - heading [level=2] [ref=f5e172]:
                    - link "Build your own expensive computer" [ref=f5e173] [cursor=pointer]:
                      - /url: /build-your-own-expensive-computer-2
                  - generic "530 review(s)" [ref=f5e174]
                  - generic [ref=f5e177]:
                    - generic [ref=f5e178]: "1800.00"
                    - button "Add to cart" [ref=f5e181] [cursor=pointer]
              - generic [ref=f5e183]:
                - link [ref=f5e185] [cursor=pointer]:
                  - /url: /blue-and-green-sneaker
                  - img "Picture of Blue and green Sneaker" [ref=f5e186]
                - generic [ref=f5e187]:
                  - heading [level=2] [ref=f5e188]:
                    - link "Blue and green Sneaker" [ref=f5e189] [cursor=pointer]:
                      - /url: /blue-and-green-sneaker
                  - generic "364 review(s)" [ref=f5e190]
                  - generic [ref=f5e193]:
                    - generic [ref=f5e194]: "11.00"
                    - button "Add to cart" [ref=f5e197] [cursor=pointer]
  - generic [ref=f5e198]:
    - generic [ref=f5e199]:
      - generic [ref=f5e200]:
        - heading "Information" [level=3] [ref=f5e201]
        - list [ref=f5e202]:
          - listitem [ref=f5e203]:
            - link "Sitemap" [ref=f5e204] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f5e205]:
            - link "Shipping & Returns" [ref=f5e206] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f5e207]:
            - link "Privacy Notice" [ref=f5e208] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f5e209]:
            - link "Conditions of Use" [ref=f5e210] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f5e211]:
            - link "About us" [ref=f5e212] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f5e213]:
            - link "Contact us" [ref=f5e214] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f5e215]:
        - heading "Customer service" [level=3] [ref=f5e216]
        - list [ref=f5e217]:
          - listitem [ref=f5e218]:
            - link "Search" [ref=f5e219] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f5e220]:
            - link "News" [ref=f5e221] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f5e222]:
            - link "Blog" [ref=f5e223] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f5e224]:
            - link "Recently viewed products" [ref=f5e225] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f5e226]:
            - link "Compare products list" [ref=f5e227] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f5e228]:
            - link "New products" [ref=f5e229] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f5e230]:
        - heading "My account" [level=3] [ref=f5e231]
        - list [ref=f5e232]:
          - listitem [ref=f5e233]:
            - link "My account" [ref=f5e234] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f5e235]:
            - link "Orders" [ref=f5e236] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f5e237]:
            - link "Addresses" [ref=f5e238] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f5e239]:
            - link "Shopping cart" [ref=f5e240] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f5e241]:
            - link "Wishlist" [ref=f5e242] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f5e243]:
        - heading "Follow us" [level=3] [ref=f5e244]
        - list [ref=f5e245]:
          - listitem [ref=f5e246]:
            - link "Facebook" [ref=f5e247] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f5e248]:
            - link "Twitter" [ref=f5e249] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f5e250]:
            - link "RSS" [ref=f5e251] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f5e252]:
            - link "YouTube" [ref=f5e253] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f5e254]:
            - link "Google+" [ref=f5e255] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f5e256]:
      - text: Powered by
      - link "nopCommerce" [ref=f5e257] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f5e258]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class CellPhones{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly ProductNames:Locator;
  7  |     readonly AddToCart:Locator;
  8  | 
  9  |     constructor(page:Page){
  10 |         this.page = page;
  11 |         this.ProductNames = page.locator('.details h2');
  12 |         this.AddToCart = page.getByRole('button', { name: 'Add to cart'});
  13 |     }
  14 | 
  15 |     async clickProductNames(name: string) {
  16 |     const count = await this.ProductNames.count();
  17 |     for (let i = 0; i < count; i++) {
  18 | 
  19 |         const productName = await this.ProductNames.nth(i).innerText();
  20 | 
  21 |         if (productName.trim() === name) {
  22 |             console.log("the product name is :",productName);
  23 |             await this.ProductNames.nth(i).click();
  24 |             break;
  25 |         }
  26 |     }
  27 | }
  28 | 
  29 |     async clickAddToCart(){
> 30 |         await this.AddToCart.click();
     |                              ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Add to cart' }) resolved to 4 elements:
  31 |     }
  32 |     }
  33 | 
```