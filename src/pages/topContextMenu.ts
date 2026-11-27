import { Locator, Page } from "@playwright/test";

export class topContextMenu{
    readonly page:Page;
    readonly account:Locator;
    readonly LogOut:Locator;
    readonly ShoppingCart:Locator;
    readonly Wishlist:Locator;

    constructor(page:Page){
        this.page= page;
        this.account = page.locator('a.account');
        this.LogOut = page.getByRole('link',{name: 'Log out'});
        this.ShoppingCart = page.getByRole('link',{name: 'Shopping cart'});
        this.Wishlist = page.getByRole('link',{name: 'Wishlist'});
    }

    async clickAccount():Promise<void>{
        await this.account.nth(0).click();
    }

    async clickLogOut():Promise<void>{
        await this.LogOut.click();
    }
    async clickShoppingCart():Promise<void>{
        await this.ShoppingCart.click();
    }

    async clickWishList():Promise<void>{
        await this.Wishlist.click();
    }
}