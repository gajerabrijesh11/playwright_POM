import { test, expect } from '@playwright/test';
import { Bookstore } from '../Pages/bookstore';

test('test', async ({ page }) => {
  const bookstore = new Bookstore(page);
  await bookstore.goto_bookstore();
  await bookstore.navigate_book_store_app();
  await bookstore.login('bg', 'Test@123');
  await bookstore.navigate_to_book_store();
  await bookstore.logout();

  /*
  // Navigate with a waitUntil: 'networkidle' to ensure page is fully loaded
   
  await page.goto('https://demoqa.com/');

  // Wait for the card to be visible before clicking
  await page.locator('.card-up').first().waitFor({ state: 'visible' });
  await page.locator('.card-up').first().click();

  // Wait for navigation and elements to be visible
  await page.getByText('Book Store Application').waitFor({ state: 'visible' });
  await page.getByText('Book Store Application').click();
  await page.getByText('Login').click();
  await page.getByRole('textbox', { name: 'UserName' }).click();
  await page.getByRole('textbox', { name: 'UserName' }).fill('bg');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://demoqa.com/profile');
  await page.getByRole('button', { name: 'Go To Book Store' }).click();
  await expect(page).toHaveURL('https://demoqa.com/books');
  await page.getByRole('button', { name: 'Log out' }).click();
  await expect(page.getByRole('heading', { name: 'Login in Book Store' })).toBeVisible();

  */
});