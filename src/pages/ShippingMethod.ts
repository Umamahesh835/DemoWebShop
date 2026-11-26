import { Page,Locator } from '@playwright/test';

export class ShippingMethod{
    readonly page:Page;
    readonly Ground:Locator;
    readonly NextDayAir:Locator;
    readonly secondDayAir:Locator;

    constructor(page:Page){
        this.page = page;
        this.Ground = page.getByRole('radio',{name:'Ground (0.00)'});
        this.NextDayAir = page.getByRole('radio',{name:'Next Day Air (0.00)'});
        this.secondDayAir = page.getByRole('radio',{name:'2nd Day Air (0.00)'});

    }

    async clickGround(){
        await this.Ground.click();
    }
    async clickNextDayAir(){
        await this.NextDayAir.click();
    }
    async clickSecondDayAir(){
        await this.secondDayAir.click();
    }
}