import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    setupFiles: ['./tests.config.js'],
    testMatch: ['./tests/**/*.test.js', './tests/**/*.spec.js'],
    // globals: true,
  },
});
