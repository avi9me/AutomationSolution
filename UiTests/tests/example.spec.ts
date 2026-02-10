import { test, expect } from '@playwright/test';

test('Example.com homepage loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Google/);
});
