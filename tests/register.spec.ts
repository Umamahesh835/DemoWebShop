import {test, expect} from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { Register } from '../pages/Register';

test('register', async({page})=>{

    const homepage = new Homepage(page);
    const register = new Register(page);
    
    await page.goto('https://demowebshop.tricentis.com/');

    await homepage.clickRegister();
    await page.waitForLoadState('networkidle');
    await register.RegisterUser('Male','Mahesh','Reddy','haplap@gmail.com','hp@123','hp@123');
    const msg = page.locator('text=Your registration completed')
    await expect(msg).toBeVisible();
    
   

})