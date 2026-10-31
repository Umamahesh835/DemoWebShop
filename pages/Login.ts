import { Page,Locator } from "@playwright/test";

export class Login{
    readonly page:Page;
    readonly Email:Locator;
    readonly Password:Locator;
    readonly RememberMe:Locator;
    readonly ForgotPassword:Locator;
    readonly Submit:Locator;
    readonly InvalidEmailMsg:Locator;
    readonly unsuccessfulloginmsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.Email=page.getByRole('textbox',{name: 'Email'});
        this.Password = page.getByRole('textbox',{name:'Password:', exact:true});
        this.RememberMe = page.getByRole('checkbox',{name:'RememberMe'});
        this.ForgotPassword = page.getByRole('link',{name:'Forgot password?'});
        this.Submit = page.getByRole('button',{name:'Log in'});
        this.InvalidEmailMsg = page.locator('text=Please enter a valid email address.');
        this.unsuccessfulloginmsg = page.locator('text=Login was unsuccessful. Please correct the errors and try again.');

    }

    async Loginuser(email:string,password:string){
        await this.Email.fill(email);
        await this.Password.fill(password);
        await this.Submit.click();
    }

    async getInvalidEmailmsg(){
        return await this.InvalidEmailMsg.textContent();
    }

    async getUnsuccessfulloginmsg(){
        return await this.unsuccessfulloginmsg.textContent();
    }
}