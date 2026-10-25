import {test, expect} from '@playwright/test';
import { Homepage } from '../pages/Homepage';
import { Login } from '../pages/Login';

test('Lgin with valid user', async({page})=>{

    const homepage = new Homepage(page);
    const login = new Login(page);

    await page.goto('https://demowebshop.tricentis.com/');

    await homepage.clickLogin();
    await login.Loginuser('haplap@gmail.com','hp@123');

    const Logout = page.getByRole('link',{name: 'Log out'});

    await expect(Logout).toBeVisible();

    await Logout.click();


})