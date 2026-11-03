import { Page, Locator } from '@playwright/test'

export class Register{
    readonly page:Page;
    readonly Gender:Locator;
    readonly FirstName:Locator;
    readonly LastName:Locator;
    readonly Email:Locator;
    readonly Password:Locator;
    readonly ConfirmPassword:Locator;
    readonly Submit;


    constructor(page:Page){
        this.page=page;
        this.Gender = page.locator("//input[@name='Gender']");
        this.FirstName = page.getByRole('textbox',{name: 'First name'});
        this.LastName = page.getByRole('textbox',{name: 'Last name'});
        this.Email = page.getByRole('textbox',{name:'Email'});
        this.Password = page.getByRole('textbox',{name:'Password:', exact:true});
        this.ConfirmPassword = page.getByRole('textbox',{name: 'Confirm password:', exact:true});
        this.Submit= page.getByRole('button',{name:'Register'});


    }

    async RegisterUser(gender:string,firstname:string,lastname:string,email:string,password:string,confirmpassword:string){
        if(gender=="Male"){
           await this.Gender.nth(0).click();
        }
        else if(gender=="Female"){
           await this.Gender.nth(1).click();

        }
        await this.FirstName.fill(firstname)
        await this.LastName.fill(lastname);
        await this.Email.fill(email);
        await this.Password.fill(password);
        await this.ConfirmPassword.fill(confirmpassword);
        await this.Submit.click();

    }
}