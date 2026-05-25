import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { lingui } from '@lingui/vite-plugin';
import babel from '@rolldown/plugin-babel';

export default defineConfig(async () => ({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    lingui(),
    await babel({
      plugins: ['@lingui/babel-plugin-lingui-macro'],
    }),
    tailwindcss(),
  ],
}))
