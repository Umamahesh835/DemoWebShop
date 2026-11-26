import { Page,Locator } from '@playwright/test';

export class PaymentMethod{
    readonly page:Page;
    readonly CashOnDevlivery:Locator;
    readonly CheckorMoneyOrder:Locator;
    readonly CreditCard:Locator;
    readonly PurchaseOrder:Locator;

    constructor(page:Page){
        this.page = page;
        this.CashOnDevlivery = page.getByRole('radio',{name:'Cash On Delivery (COD) (7.00)'});
        this.CheckorMoneyOrder = page.getByRole('radio',{name:'Check / Money Order (5.00)'});
        this.CreditCard = page.getByRole('radio',{name:'Credit Card'});
        this.PurchaseOrder = page.getByRole('radio',{name:'Purchase Order'});

    }

    async clickCashOnDelivery(){
        await this.CashOnDevlivery.click();
    }
    async clickCheckOrMoneyOrder(){
        await this.CheckorMoneyOrder.click();
    }
    async clickcreditCard(){
        await this.CreditCard.click();
    }
    async clickPurchaseOrder(){
        await this.PurchaseOrder.click();
    }
}