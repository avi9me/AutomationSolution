import { test, expect } from '@playwright/test';

test('Example.com homepage loads', async ({ page }) => {
  await page.goto('https://example.com/helloji');
  await expect(page).toHaveTitle(/Example Domain/);
});



test.describe('Example homepage', () => {

  test('should display correct title', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should display main heading', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page.locator('h1')).toHaveText('Example Domain');
  });

});
