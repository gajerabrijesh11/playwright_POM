import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div').filter({ hasText: 'Elements' }).nth(5).click();
  await page.getByRole('listitem').filter({ hasText: 'Web Tables' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('test');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('test');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Age' }).click();
  await page.getByRole('textbox', { name: 'Age' }).fill('30');
  await page.getByRole('textbox', { name: 'Salary' }).click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('300000');
  await page.getByRole('textbox', { name: 'Department' }).click();
  await page.getByRole('textbox', { name: 'Department' }).fill('it');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('test');
  await page.getByRole('gridcell', { name: 'test' }).first().click();
});