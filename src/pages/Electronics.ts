import { Page,Locator } from '@playwright/test';

export class Electronics{
    readonly page:Page;
    readonly Camera_Photo:Locator;
    readonly Cell_phones;


    constructor(page:Page){
        this.page = page;
        this.Camera_Photo = page.getByRole('img', { name: 'Picture for category Camera, photo' });
        this.Cell_phones = page.getByRole('img', { name: 'Picture for category Cell phones' });

    }

    async clickCameraPhoto(){
        await this.Camera_Photo.click();
    }

    async clickCellPhones(){
        await this.Cell_phones.click();
    }
}