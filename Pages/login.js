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
} 