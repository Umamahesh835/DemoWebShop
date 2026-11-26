import {Page,Locator} from '@playwright/test';

export class ShoppingCart{

    readonly page:Page;
    readonly checkbox:Locator;
    readonly termsOfService;
    readonly Checkout;

    constructor(page:Page){
        this.page = page;
        this.checkbox = page.locator("//input[@name='removefromcart']");
        this.termsOfService = page.locator('input#termsofservice');
        this.Checkout = page.getByRole('button',{name:'checkout'});
    }

    async clickCheckbox(){
        await this.checkbox.check();
    }

    async clickTermsOfService(){
        await this.termsOfService.check();
    }

    async clickCheckOut(){
        await this.Checkout.click();
    }
}