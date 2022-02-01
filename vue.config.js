module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/fusiome/' : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Promostan',
    },
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      enableInSFC: true,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
