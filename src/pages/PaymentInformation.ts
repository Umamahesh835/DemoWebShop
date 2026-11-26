import { Page,Locator } from '@playwright/test';

export class paymentInformation{
    readonly page:Page;
    readonly CODText:Locator;
    readonly checktext:Locator;
    readonly CreditCardType:Locator;
    readonly CardHolderName:Locator;
    readonly CardNumber:Locator;
    readonly ExpireMonth:Locator;
    readonly Expireyear:Locator;
    readonly CardCode:Locator;
    readonly PONumber:Locator;
    readonly Ordermsg :Locator;
    readonly OrderDetails:Locator;

    constructor(page:Page){
        this.page = page;
        this.CODText = page.getByText('You will pay by COD');
        this.checktext = page.getByText("Mail Personal or Business Check, Cashier's Check or money order to:");
        this.CreditCardType = page.locator('#CreditCardType');
        this.CardHolderName = page.locator('#CardholderName');
        this.CardNumber = page.locator('#CardNumber');
        this.ExpireMonth = page.locator('#ExpireMonth');
        this.Expireyear = page.locator('#ExpireMonth');
        this.CardCode = page.locator('#CardCode');
        this.PONumber = page.locator('#PurchaseOrderNumber');
        this.Ordermsg = page.getByText('Your order has been successfully processed!');
        this.OrderDetails = page.getByText('Click here for order details.');

    }

    async getCodText(){
        const codtext= await this.CODText.textContent();
        console.log(codtext);
        return codtext;

    }
    async getCheckText(){
        const chText = await this.checktext.textContent();
        console.log(chText);
        return chText;
        
    }
    async getCreditCardDetails(option:string,name:string,cnumber:string,month:string,year:string,ccode:string){
        await this.CreditCardType.click();
        await this.CreditCardType.selectOption(option);
        await this.CardHolderName.fill(name)
        await this.CardNumber.fill(cnumber);
        await this.ExpireMonth.click();
        await this.ExpireMonth.selectOption(month)
        await this.Expireyear.selectOption(year);
        await this.CardCode.fill(ccode);
    }

    async enterPONumber(ponumber:string){
        await this.PONumber.fill(ponumber);
    }

    async clickOrderdetails(){
        await this.OrderDetails.click();
    }
}