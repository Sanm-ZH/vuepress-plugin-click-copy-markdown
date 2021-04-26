const { resolve } = require('path');

module.exports = (options, context) => ({
  define() {
    const { ele, title, tips, showIcon, copyMessage, closeWait } = options;
    return {
      COPY_ELEM: ele || ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      COPY_TITLE: title || 'copy',
      COPY_TIPS: tips || 'click to copy',
      SHOW_ICON: showIcon || false,
      COPY_MESSAGE: copyMessage || '复制成功，请粘贴后使用',
      CLOSE_WAIT: closeWait || 3000
    };
  },
  name: 'vuepress-plugin-click-copy-markdown',
  clientRootMixin: resolve(__dirname, './bin/clientRootMixin.js')
});
