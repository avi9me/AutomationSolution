import { test, expect } from '@playwright/test';

test('Example.com homepage loads', async ({ page }) => {
  await page.goto('https://example.com');
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



  // New test: check page URL after navigation
  test('should navigate correctly when clicking the link', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('a');
    await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
  });

});

