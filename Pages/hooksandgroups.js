import { expect } from "@playwright/test";
exports.HooksAndGroupsPage = class HooksAndGroupsPage {
    constructor(page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://kitchen.applitools.com/');
        await this.page.getByRole('link', { name: 'Alert' }).click();
    }
    async alert_demo() {
        this.page.once('dialog', async dialog => {
            console.log('Alert shown with message:', dialog.message());
            await dialog.accept(); // or dialog.dismiss() to cancel
        });

        // trigger the alert — the handler above will accept it
        await this.page.getByRole('button', { name: 'Trigger an Alert' }).click();
        await this.page.getByText('Triggered 1 time(s)');
    }
}