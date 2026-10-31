import { Page,Locator } from '@playwright/test';

export class Camera_Photo{
    readonly page:Page;
    readonly SortByDropdown:Locator;
    readonly Display:Locator;
    readonly View:Locator;

    constructor(page:Page){

        this.page = page;
        this.SortByDropdown = page.locator('#products-orderby');
        this.Display = page.locator('#products-pagesize');
        this.View = page.locator('#products-viewmode');
    }
    
}