import { Page,Locator } from '@playwright/test';

export class BillingAddress{
    readonly page:Page;
    readonly Firstname:Locator;
    readonly Lastname:Locator;
    readonly Email:Locator;
    readonly Country:Locator;
    readonly City:Locator;
    readonly Address1:Locator;
    readonly Address2:Locator;
    readonly Zippostalcode:Locator;
    readonly Phonenumber:Locator;
   


    constructor(page:Page){

        this.page = page;
        this.Firstname = page.getByLabel('First name:'); 
        this.Lastname = page.getByLabel('Last name:');
        this.Email = page.getByLabel('Email:');
        this.Country = page.locator('#BillingNewAddress_CountryId');
        this.City = page.getByLabel('City:');
        this.Address1 = page.getByLabel('Address 1:');
        this.Address2 = page.getByLabel('Address 2:');
        this.Zippostalcode = page.getByLabel('Zip / postal code:');
        this.Phonenumber = page.getByLabel('Phone number:');
        
    }

    async BillingAddress(firstname:string,lastname:string,country: string, city:string,address1:string,address2:string,postcalcode:string,phonenumber:string) {

        await this.Firstname.fill(firstname);
        await this.Lastname.fill(lastname);

    const options = await this.Country.locator('option').allTextContents();

    for (let i = 0; i < options.length; i++) {

        if (options[i].trim() === country) {

            await this.Country.selectOption({ label: country });
            break;
        }
    }

    await this.City.fill(city);
    await this.Address1.fill(address1);
    await this.Address2.fill(address2);
    await this.Zippostalcode.fill(postcalcode);
    await this.Phonenumber.fill(phonenumber);
}
}