import { test, expect } from '@playwright/test';

test('go to site', async ({ page }) => {
  
  await page.goto('https://www.8therate.com/');
  try{ 
    await expect(page.getByRole('button', { name: 'Let\'s Discuss Your Idea!' })).toBeVisible();
    console.log("Button present")
  }
  catch(error){
    console.log("Button not present")
  }
  await page.getByRole('link', { name: 'What We Do ' }).click();
  await page.getByRole('link', { name: 'Flutter App Development' }).click();
  await page.locator('#menu-item-6993').getByRole('link', { name: 'Custom Web Development' }).click();
});