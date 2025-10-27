import { expect } from '@playwright/test';
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Submit' })
    }

    async goto() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }
    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
    async valid_validation() {
        try {
            await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
            console.log("Logged in successfully");
        } catch (error) {
            console.log("Login failed");
        }
        await expect(this.page.locator('.post-title')).toHaveText('Logged In Successfully');
        try {
            await expect(this.page.getByRole('link', { name: 'Log out' })).toBeVisible();
            console.log("Logout link is visible");
        } catch (error) {
            console.log("Logout link is not visible");
        }

    }
    async Invalid_user_validation() {
        await expect(this.page.locator('#error')).toHaveText('Your username is invalid!');
    }
    async Invalid_password_validation() {
        await expect(this.page.locator('#error')).toHaveText('Your password is invalid!');
    }
} 