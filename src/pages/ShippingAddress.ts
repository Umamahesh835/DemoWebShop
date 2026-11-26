import { Page,Locator } from '@playwright/test';

export class ShippingAddress{
    readonly page:Page;
    readonly Addressdropdown:Locator;
    readonly PickUpInStore:Locator;
    

    constructor(page:Page){
        this.page = page;
        this.Addressdropdown = page.locator('.address-select');
        this.PickUpInStore = page.getByRole('checkbox',{name:'PickUpInStore'});
        
    }

async selectAddress(index:string){
    await this.Addressdropdown.click();
    await this.Addressdropdown.selectOption(index);

}

}