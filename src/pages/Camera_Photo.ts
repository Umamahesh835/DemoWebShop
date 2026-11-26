import { Page,Locator } from '@playwright/test';

export class Camera_Photo{
    readonly page:Page;
    readonly SortByDropdown:Locator;
    readonly Display:Locator;
    readonly View:Locator;
    readonly ProductNames:Locator;

    constructor(page:Page){

        this.page = page;
        this.SortByDropdown = page.locator('#products-orderby');
        this.Display = page.locator('#products-pagesize');
        this.View = page.locator('#products-viewmode');
        this.ProductNames = page.locator('.product-item h2');

    }
    
    async getProductNames(name: string) {
    
    const count = await this.ProductNames.count();

    for (let i = 0; i < count; i++) {

        const productName = await this.ProductNames.nth(i).innerText();
        console.log(productName);

        if (productName.trim() === name) {
            await this.ProductNames.nth(i).click();
            break;
        }
    }
}
 
}