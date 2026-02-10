import { test, expect } from '@playwright/test';

test('Example.com homepage loads', async ({ page }) => {
  await page.goto('https://example.com/helloji');
  await expect(page).toHaveTitle(/Example Domain/);
});
