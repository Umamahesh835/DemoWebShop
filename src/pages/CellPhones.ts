import {Page, Locator} from '@playwright/test';

export class CellPhones{

    readonly page:Page;
    readonly ProductNames:Locator;
    readonly AddToCart:Locator;
    readonly Carttext:Locator;
    readonly ShoppingCart:Locator;

    constructor(page:Page){
        this.page = page;
        this.ProductNames = page.locator('.details h2');
        this.AddToCart = page.getByRole('button', { name: 'Add to cart'});
        this.Carttext = page.getByText('The product has been added to your shopping cart');
        this.ShoppingCart = page.getByRole('link',{name:'Shopping cart', exact:true});
    }

    async clickProductNames(name: string) {
    const count = await this.ProductNames.count();
    for (let i = 0; i < count; i++) {

        const productName = await this.ProductNames.nth(i).innerText();

        if (productName.trim() === name) {
            console.log("the product name is :",productName);
            await this.ProductNames.nth(i).click();
            break;
        }
    }
}

    async clickAddToCart(){
        await this.AddToCart.first().click();
    }

    async getCarttext(){
        const text = await this.Carttext.innerText();
        console.log("the cart text is :", text);
        return text;
    }

    async clickShoppingcart(){
        await this.ShoppingCart.click();
    }
}

