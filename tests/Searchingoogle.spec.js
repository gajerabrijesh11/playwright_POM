import { test, expect } from '@playwright/test';

test('Google Search', async ({ page }) => {
  
  await page.goto('http://www.google.com');
  await page.getByRole('combobox', { name: 'Search' }).click()
  await page.getByRole('combobox', { name: 'Search' }).fill('step by step automation').click()

});