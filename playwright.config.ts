import { devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  fullyParallel: !!process.env.CI,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  timeout: 15 * 1000,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['iPhone 12'], isMobile: true }
    }
  ],
}

export default config

