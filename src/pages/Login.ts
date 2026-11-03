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
    readonly Logout:Locator;

    constructor(page:Page){
        this.page=page;
        this.Email=page.getByRole('textbox',{name: 'Email'});
        this.Password = page.getByRole('textbox',{name:'Password:', exact:true});
        this.RememberMe = page.locator('#RememberMe');
        this.ForgotPassword = page.getByRole('link',{name:'Forgot password?'});
        this.Submit = page.getByRole('button',{name:'Log in'});
        this.InvalidEmailMsg = page.locator('text=Please enter a valid email address.');
        this.unsuccessfulloginmsg = page.locator('text=Login was unsuccessful. Please correct the errors and try again.');
        this.Logout = page.getByRole('link',{name:'Log out'});

    }

    async Loginuser(email:string,password:string){
        await this.Email.fill(email);
        await this.Password.fill(password);
        
    }

    async getInvalidEmailmsg(){
        return await this.InvalidEmailMsg.textContent();
    }

    async getUnsuccessfulloginmsg(){
        return await this.unsuccessfulloginmsg.textContent();
    }
    async clickRememberMe(){
        await this.RememberMe.click();
    }
    async clickLogIn(){
        await this.Submit.click();
    }

    async clickLogOut(){
        await this.Logout.click();
    }

    async clickForgotPassword(){
        await this.ForgotPassword.click();
    }
}