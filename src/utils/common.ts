import { BrowserContext, Page } from '@playwright/test';

export class common {

    // Switch by tab index
    static async switchToTab(
        context: BrowserContext,
        index: number
    ): Promise<Page> {

        const pages = context.pages();

        await pages[index].bringToFront();

        return pages[index];
    }

    static async acceptDialog(page: Page) {

        page.once('dialog', async dialog => {

            console.log(dialog.message());

            await dialog.accept();
        });
    }

    static async clickContinue(page:Page){
        await page.getByRole('button',{name:'Continue'}).click();
    }
    static async clickBack(page:Page){
        await page.getByRole('button',{name:'Back'}).click();
    }
}