import {test, expect} from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { Register } from '../pages/Register';
import { Pages } from '../pages/Pages';

test('register', async({page})=>{

    const pages= new Pages(page);
    
    await page.goto('https://demowebshop.tricentis.com/');

    await pages.homepage.clickRegister();
    await page.waitForLoadState('networkidle');
    await pages.register.RegisterUser('Male','Mahesh','Reddy','haplap@gmail.com','hp@123','hp@123');
    const msg = page.locator('text=Your registration completed')
    await expect(msg).toBeVisible();
    
   

})