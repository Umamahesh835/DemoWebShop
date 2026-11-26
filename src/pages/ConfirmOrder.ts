import { Page,Locator } from '@playwright/test';

export class ConfirmOrder{
    readonly page:Page;
    readonly Price:Locator;
    readonly Quantity:Locator;
    readonly Total:Locator;
    readonly Confirm:Locator;

    constructor(page:Page){
        this.page = page;
        this.Price = page.locator('.product-unit-price');
        this.Quantity = page.locator('.qty');
        this.Total = page.locator('.product-subtotal');
        this.Confirm  = page.getByRole('button',{name:'Confirm'});
    }

   async getPrice(){
   let pprice = await this.Price.textContent();
   console.log("the product price :",pprice);
   return pprice;
    
   }

   async getQuantity(){
   let quantity = await this.Quantity.textContent();
   console.log("The product quantity :",quantity);
   return quantity;
    
   }

   async getTotal(){
    let total = await this.Total.textContent();
    console.log("the total of product price :",total);
    return total;
   }

   async clickConfirm(){
    await this.Confirm.click();
   }
}