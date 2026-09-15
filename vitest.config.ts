/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// Astro + Vitest setup per officiële testing-guide:
// https://docs.astro.build/en/guides/testing/#vitest
export default getViteConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    environment: 'node',
  },
});
