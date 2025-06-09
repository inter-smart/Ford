// import { defineConfig } from 'next-intl/config';

// export default defineConfig({
//   locales: ['en', 'ar'],
//   defaultLocale: 'en',
//   localePrefix: 'always',
//   messages: (locale) => import(`./src/app/messages/${locale}.json`),
// });

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
