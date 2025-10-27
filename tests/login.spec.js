import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/login.js';

test('demo login test', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.goto();
    await Login.login('student', 'Password123');

    /*await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
    await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
    await page.getByRole('link', { name: 'Log out' }).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
*/

});