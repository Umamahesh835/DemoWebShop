import { test as base } from '@playwright/test';
import { Login } from '../pages/Login';
import { Homepage } from '../pages/Homepage';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { Register } from '../pages/Register';
import { ContextMenu } from '../pages/ContextMenu';
import { Electronics } from '../pages/Electronics';
import { Camera_Photo } from '../pages/Camera_Photo';


type PageFixtures = {
    loginPage: Login;
    homepage: Homepage;
    passwordRecovery: PasswordRecovery;
    registerPage:Register;
    contextMenu: ContextMenu;
    electronics: Electronics;
    cameraPhoto: Camera_Photo;
    
}

export const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new Login(page));
    },
    homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    },
    passwordRecovery: async ({ page }, use) => {
        await use(new PasswordRecovery(page));
    },
    registerPage: async ({ page }, use) => {
        await use(new Register(page));
    },
    contextMenu: async ({ page }, use) => {
        await use(new ContextMenu(page));
    },
    electronics: async ({ page }, use) => {
        await use(new Electronics(page));
    },
    cameraPhoto: async ({ page }, use) => {
        await use(new Camera_Photo(page));
    },
});