import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// يضع رابط الموقع الكامل داخل وسوم Open Graph (واتساب ولينكدإن يحتاجان رابطاً كاملاً للصورة).
// على Vercel يُؤخذ الرابط تلقائياً. ولتحديده يدوياً أضف متغير SITE_URL في إعدادات Vercel.
function siteUrlPlugin() {
  const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : '';
  // الرابط الاحتياطي هو رابط موقعك الحالي على Vercel. غيّره لو ربطت دومين خاص.
  const fallback = 'https://my-portfolio-eight-delta-97.vercel.app';
  const siteUrl = (process.env.SITE_URL || fromVercel || fallback).replace(/\/$/, '');

  return {
    name: 'site-url-in-html',
    transformIndexHtml(html) {
      return html.split('__SITE_URL__').join(siteUrl);
    }
  };
}

export default defineConfig({
  plugins: [react(), siteUrlPlugin()],
  server: {
    open: true,
    port: 5173
  }
});
