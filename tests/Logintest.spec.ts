import {test, expect} from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';
import { Pages } from '../pages/Pages';
import { ContextMenu } from '../pages/ContextMenu';

test('Lgin with valid credentials', async({page})=>{

    const pages = new Pages(page);

    await page.goto('https://demowebshop.tricentis.com/');

    /*await pages.homepage.clickLogin();
    await pages.login.Loginuser('haplap@gmail.com','hp@123');*/

    await pages.contextMenu.clickGiftCards();

    


})

test('invalid login', async({page})=>{
    const pages = new Pages(page);
    await page.goto('https://demowebshop.tricentis.com/');

    await pages.homepage.clickLogin();
    await pages.login.Loginuser('mahesh@gmail.com','Mahesh@123');
    console.log('The invalid messgae is ',await pages.login.getUnsuccessfulloginmsg());
    


})

test('verify logout after successful login', async({page})=>{

    const pages = new Pages(page);

    await page.goto('https://demowebshop.tricentis.com/');

    await pages.homepage.clickLogin();
    await pages.login.Loginuser('haplap@gmail.com','hp@123');

    const Logout = page.getByRole('link',{name: 'Log out'});

    await expect(Logout).toBeVisible();

    await Logout.click();
})