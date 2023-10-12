import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  mode: 'development',
  base: '/',
  srcDir: 'src',
  filename: 'claims-sw.ts',
  strategies: 'injectManifest',
  registerType: 'autoUpdate',
  includeAssets: ['favicon.svg'],
  injectManifest: {
    globPatterns: ['**/*.{js,css,html,svg}'],
  },
  // selfDestroying: true,
  manifest: {
    name: 'vite-preact-pwa',
    short_name: 'preactpwa',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  devOptions: {
    enabled: true,
    type: 'module',
    navigateFallback: 'index.html',
    // eslint-disable-next-line no-useless-escape
    navigateFallbackAllowlist: [/^\/(?:[a-z0-9\/\-?=&])*$/],
  },
}

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [preact(), VitePWA(pwaOptions)],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})
