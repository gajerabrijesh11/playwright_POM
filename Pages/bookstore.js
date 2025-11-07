import { expect } from '@playwright/test';
exports.Bookstore = class Bookstore {
    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'UserName' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
    }
    async goto_bookstore() {
        await this.page.goto('https://demoqa.com/');
    }
    async navigate_book_store_app() {
        await this.page.locator('.card-up').first().waitFor({ state: 'visible' });
        await this.page.locator('.card-up').first().click();

        // Wait for navigation and elements to be visible
        await this.page.getByText('Book Store Application').waitFor({ state: 'visible' });
        await this.page.getByText('Book Store Application').click();
        await this.page.getByText('Login').click();
    }
    async login(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
        await expect(this.page).toHaveURL('https://demoqa.com/profile');
    }
    async navigate_to_book_store() {
        await this.page.getByRole('button', { name: 'Go To Book Store' }).click();
        await expect(this.page).toHaveURL('https://demoqa.com/books');
    }
    async logout() {
        await this.page.getByRole('button', { name: 'Log out' }).click();
        await expect(this.page.getByRole('heading', { name: 'Login in Book Store' })).toBeVisible();
    }
}