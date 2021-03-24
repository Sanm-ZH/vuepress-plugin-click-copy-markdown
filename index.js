const { resolve } = require('path');

module.exports = (options, context) => ({
  define() {
    const { copyElem } = options;
    console.log(copyElem);
    return {
      COPY_ELEM: copyElem || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside']
    };
  },
  name: 'vuepress-plugin-click-copy-markdown',
  clientRootMixin: resolve(__dirname, './bin/enhanceAppFiles.js')
});
