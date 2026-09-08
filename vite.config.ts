import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Vishal_Rai_Portfolio/',
  plugins: [react(), tailwindcss()],
});