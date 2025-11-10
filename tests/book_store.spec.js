import { test, expect } from '@playwright/test';
import { Bookstore } from '../Pages/bookstore';

test('test', async ({ page }) => {
  const bookstore = new Bookstore(page);
  await bookstore.goto_bookstore();
  await bookstore.navigate_book_store_app();
  await bookstore.login('bg', 'Test@123');
  await bookstore.navigate_to_book_store();
  await bookstore.logout();
});