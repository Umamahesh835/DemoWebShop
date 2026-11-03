import { Locator, Page } from '@playwright/test';

export class Homepage {
  readonly page: Page;
  readonly Register: Locator;
  readonly Login: Locator;
  readonly Shoppingcart: Locator;
  readonly Wishlist: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.Register = page.getByRole('link', { name: 'Register'});
    this.Login = page.getByRole('link',{name:'Log in'});
    this.Shoppingcart= page.getByRole('link',{name: 'Shopping cart'});
    this.Wishlist = page.getByRole('link',{name: 'Wishlist'});
  }

  async clickRegister(){
    await this.Register.click();
  }
  async clickLogin(){
    await this.Login.click();
  }
  async clickShoppingcart(){
    await this.Shoppingcart.click();
  }
  async clickWishlist(){
    await this.Wishlist.click();
  }
  }
