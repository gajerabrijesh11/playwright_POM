import { test, expect } from '@playwright/test';
import { HooksAndGroupsPage } from '../Pages/hooksandgroups.js';

test.beforeEach('Open Alert Page', async ({ page }) => {
    const HooksAndGroups = new HooksAndGroupsPage(page);
    await HooksAndGroups.goto();
});

test('Alert Demo', async ({ page }) => {
    const HooksAndGroups = new HooksAndGroupsPage(page);
    await HooksAndGroups.alert_demo();
});;

/*
//hooks and groups
test.beforeEach(async ({ page }) => {
    console.log('This runs once before all tests');
    await page.goto('https://kitchen.applitools.com/');
    await page.getByRole('link', { name: 'Alert' }).click();
});
test.afterEach(async ({ page }) => {
    await page.close();
});


test('alert demo', async ({ page }) => {

    // register a one-time dialog handler to accept/close the alert
    page.once('dialog', async dialog => {
        console.log('Alert shown with message:', dialog.message());
        await dialog.accept(); // or dialog.dismiss() to cancel
    });

    // trigger the alert — the handler above will accept it
    await page.getByRole('button', { name: 'Trigger an Alert' }).click();
    await page.getByText('Triggered 1 time(s)');
});

test('Confirmation', async ({ page }) => {
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.accept().catch(() => { });
    });
    await page.getByRole('button', { name: 'Trigger a Confirmation' }).click();
    await page.getByText('Triggered 1 time(s)').click();
    await page.getByText('Answer: Yes').click();
    console.log('Confirmation accepted');

    // Trigger the confirmation again, this time dismissing it    
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('button', { name: 'Trigger a Confirmation' }).click();
    await page.getByText('Triggered 2 time(s)').click();
    await page.getByText('Answer: No').click();
    console.log('Confirmation dismissed');
});
*/