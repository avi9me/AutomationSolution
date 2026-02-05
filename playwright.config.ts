import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
});
