import{Page,Locator} from '@playwright/test';

export class PasswordRecovery{
    readonly page:Page;
    readonly yourEmailAddress:Locator;
    readonly RecoverButton:Locator;
    readonly PasswordRecoverSuccessfullmsg:Locator;


    constructor(page:Page){
        this.page = page;
        this.yourEmailAddress = page.getByRole('textbox',{name:'Email'});
        this.RecoverButton = page.getByRole('button',{name:'Recover'});
        this.PasswordRecoverSuccessfullmsg = page.locator('text=Email with instructions has been sent to you.');

    }

    async enterEmailaddress(email:string){
        await this.yourEmailAddress.fill(email);
    }

    async clickRecoverButton(){
        await this.RecoverButton.click();
    }
    async getPasswordRecoverySuccessfulmsg(){
        return await this.PasswordRecoverSuccessfullmsg.textContent();
    }
}
