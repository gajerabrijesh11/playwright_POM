import { test, expect } from '@playwright/test';
import { HooksAndGroupsPage } from '../Pages/hooksandgroups.js';

test.beforeEach('Open Alert Page', async ({ page }) => {
    const HooksAndGroups = new HooksAndGroupsPage(page);
    await HooksAndGroups.goto();
});

test('Alert Demo', async ({ page }) => {
    const HooksAndGroups = new HooksAndGroupsPage(page);
    await HooksAndGroups.alert_demo();
});;