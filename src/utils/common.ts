import { BrowserContext, Page } from '@playwright/test';

export class WindowUtils {

    // Switch by tab index
    static async switchToTab(
        context: BrowserContext,
        index: number
    ): Promise<Page> {

        const pages = context.pages();

        await pages[index].bringToFront();

        return pages[index];
    }
}