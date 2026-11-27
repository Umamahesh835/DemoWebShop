import { test as base } from '@playwright/test';
import { Login } from '../pages/Login';
import { Homepage } from '../pages/Homepage';
import { PasswordRecovery } from '../pages/PasswordRecovery';
import { Register } from '../pages/Register';
import { ContextMenu } from '../pages/ContextMenu';
import { Electronics } from '../pages/Electronics';
import { Camera_Photo } from '../pages/Camera_Photo';
import { CellPhones } from '../pages/CellPhones';
import { ShoppingCart } from '../pages/ShoppingCart';
import { BillingAddress } from '../pages/BillingAddress';
import { ShippingAddress } from '../pages/ShippingAddress';
import { ShippingMethod } from '../pages/ShippingMethod';
import { PaymentMethod } from '../pages/PaymentMethod';
import { paymentInformation } from '../pages/PaymentInformation';
import { ConfirmOrder } from '../pages/ConfirmOrder';
import { topContextMenu } from '../pages/topContextMenu';


type PageFixtures = {
    loginPage: Login;
    homepage: Homepage;
    passwordRecovery: PasswordRecovery;
    registerPage:Register;
    contextMenu: ContextMenu;
    electronics: Electronics;
    cameraPhoto: Camera_Photo;
    cellPhones: CellPhones;
    shoppingcart:ShoppingCart;
    billingAddress:BillingAddress;
    shippingAddress: ShippingAddress;
    shippingMethod: ShippingMethod;
    paymentMethod: PaymentMethod;
    paymentInformation: paymentInformation;
    confirmOrder: ConfirmOrder;
    topcontextMenu:topContextMenu;
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
    cellPhones: async ({ page }, use) => {
        await use(new CellPhones(page));
    },
    shoppingcart: async ({ page }, use) => {
        await use(new ShoppingCart(page));
    },
    billingAddress: async({page}, use) => {
        await use(new BillingAddress(page));
    },
    shippingAddress: async ({ page }, use) => {
        await use(new ShippingAddress(page));
    },
    shippingMethod: async ({ page }, use) => {
        await use(new ShippingMethod(page));
    },
    paymentMethod: async ({ page }, use) => {
        await use(new PaymentMethod(page));
    },
    paymentInformation: async ({ page }, use) => {
        await use(new paymentInformation(page));
    },
    confirmOrder: async ({ page }, use) => {
        await use(new ConfirmOrder(page));
    },
    topcontextMenu: async ({ page }, use) => {
        await use(new topContextMenu(page));
    }
});