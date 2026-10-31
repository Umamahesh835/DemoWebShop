import{test,expect} from '@playwright/test';
import { Pages } from '../pages/Pages';

test('Lgin with valid credentials', async({page})=>{

    const pages = new Pages(page);

    await page.goto('https://demowebshop.tricentis.com/');

    await pages.homepage.clickLogin();
    await pages.login.Loginuser('haplap@gmail.com','hp@123');

    


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

test('login with valid username and different password', async({page})=>{

    const pages = new Pages(page);

    await page.goto('https://demowebshop.tricentis.com/');

    await pages.homepage.clickLogin();
    await pages.login.Loginuser('haplap@gmail.com','hp@1234');
    expect(await pages.login.getUnsuccessfulloginmsg()).toBeTruthy();



})