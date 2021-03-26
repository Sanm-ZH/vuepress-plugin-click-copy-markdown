const { resolve } = require('path');

module.exports = (options, context) => ({
  define() {
    const { ele, title, tips, showIcon } = options;
    return {
      COPY_ELEM: ele || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      COPY_TITLE: title || 'copy',
      COPY_TIPS: tips || 'click to copy',
      SHOW_ICON: showIcon || false
    };
  },
  name: 'vuepress-plugin-click-copy-markdown',
  clientRootMixin: resolve(__dirname, './bin/enhanceAppFiles.js')
});
