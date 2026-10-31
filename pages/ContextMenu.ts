import { Page,Locator } from '@playwright/test';

export class ContextMenu{
    readonly page:Page;
    readonly Books:Locator;
    readonly Computers:Locator;
    readonly Electronics:Locator;
    readonly ApparelAndShoes:Locator;
    readonly DigitalDownloads:Locator;
    readonly Jewelry:Locator;
    readonly GiftCards:Locator;

    constructor(page:Page){
        this.page=page;
        this.Books= page.getByRole('link',{name:'Books'});
        this.Computers= page.getByRole('link',{name:'Computers'});
        this.Electronics = page.getByRole('link',{name:'Electronics'});
        this.ApparelAndShoes = page.getByRole('link',{name: 'Apparel & Shoes'});
        this.DigitalDownloads = page.getByRole('link',{name:'Digital downloads'});
        this.Jewelry = page.getByRole('link',{name:'Jewelry'});
        this.GiftCards = page.getByRole('link',{name:'Gift Cards'});
               

    }

    async clickBooks(){
        await this.Books.click();
    }
    async clickComputers(){
        await this.Computers.click();
    }
    async clickElectronics(){
        await this.Electronics.click();
    }
    async clickApparelAndShoes(){
        await this.ApparelAndShoes.click();
    }
    async clickDigitaldownloads(){
        await this.DigitalDownloads.click();
    }
    async clickJewelry(){
        await this.Jewelry.click();
    }
    async clickGiftCards(){
        await this.GiftCards.nth(1).click();
    }
}