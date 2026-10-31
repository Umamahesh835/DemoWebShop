import { Page,Locator} from '@playwright/test';

import { Homepage } from './Homepage';
import { Login } from './Login';
import { Register } from './Register';
import { ContextMenu } from './ContextMenu';

export class Pages{
    readonly homepage: Homepage;
    readonly login : Login;
    readonly register: Register;
    readonly contextMenu:ContextMenu;

    constructor(page:Page){
        this.homepage= new Homepage(page);
        this.login = new Login(page);
        this.register = new Register(page);
        this.contextMenu = new ContextMenu(page);

    }
}

