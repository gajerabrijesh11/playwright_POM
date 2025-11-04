import { expect } from "@playwright/test";
exports.WebtablePage = class WebtablePage {
    constructor(page) {
        this.page = page;
        this.firstname_textbox = page.getByRole('textbox', { name: 'First Name' })
        this.lastname_textbox = page.getByRole('textbox', { name: 'Last Name' })
        this.email_textbox = page.getByRole('textbox', { name: 'name@example.com' })
        this.age_textbox = page.getByRole('textbox', { name: 'Age' })
        this.salary_textbox = page.getByRole('textbox', { name: 'Salary' })
        this.department_textbox = page.getByRole('textbox', { name: 'Department' })
        this.login_button = page.getByRole('button', { name: 'Submit' })
    }
    async goto() {
        await this.page.goto('https://demoqa.com/');
    }
    async navigate_to_webtable() {
        await this.page.locator('div').filter({ hasText: 'Elements' }).nth(5).click();
        await this.page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
    }
    async add_user(firstname, lastname, email, age, salary, department) {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.firstname_textbox.fill(firstname);
        await this.lastname_textbox.fill(lastname);
        await this.email_textbox.fill(email);
        await this.age_textbox.fill(age);
        await this.salary_textbox.fill(salary);
        await this.department_textbox.fill(department);
        await this.login_button.click();
    }
    async search_user(firstname) {
        await this.page.getByRole('textbox', { name: 'Type to search' }).click();
        await this.page.getByRole('textbox', { name: 'Type to search' }).fill(firstname);
    }

}