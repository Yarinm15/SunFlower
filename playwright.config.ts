import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: {
    headless: false, 
    browserName: 'chromium', 
    viewport: { width: 1280, height: 720 }, 
    actionTimeout: 5000, 
    screenshot: 'only-on-failure', 
  },
});