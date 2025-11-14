import { test, expect } from '@playwright/test';
import { WebtablePage } from '../Pages/webtable.js';

test('Add record', async ({ page }) => {
  const webtablePage = new WebtablePage(page);
  await webtablePage.goto();
  await webtablePage.navigate_to_webtable();
  await webtablePage.add_user('test', 'test', 'test@gmail.com', '30', '300000', 'it');
  await webtablePage.search_user('test');
  await await expect(page.getByRole('gridcell', { name: 'test', exact: true }).first()).toBeVisible();
});