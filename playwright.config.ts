/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';

const PORT = 4322;
const baseURL = `http://localhost:${PORT}`;

// E2E-opzet per officiële Astro testing-guide:
// https://docs.astro.build/en/guides/testing/#playwright
//
// De tests draaien altijd tegen een verse `astro build` + `astro preview`
// (niet de dev-server op 4321): die dev-toolbar zou h1's en extra nodes
// injecteren en de selectors storen. Poort 4322 vermijdt conflicten met
// een eventueel draaiende dev-server op 4321.
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['line'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run build && astro preview --port 4322',
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120 * 1000,
  },
});
