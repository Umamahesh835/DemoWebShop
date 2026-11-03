import { Page } from '@playwright/test';

export class ScreenshotUtil {

    static async captureScreenshot(
        page: Page,
        screenshotName: string
    ): Promise<void> {

        await page.screenshot({
            path: `screenshots/${screenshotName}_${new Date().toLocaleString().replace(/[:.]/g, "-")}.png`,
            fullPage: true
        });

        console.log(`Screenshot captured: ${screenshotName}`);
    }

}