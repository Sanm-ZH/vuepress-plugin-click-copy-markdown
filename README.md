# vuepress-plugin-click-copy-markdown

> A vuepress plugin for Clipboard


## Options

The plugin supports these configurations.

``` js
module.exports = {
  plugins: [require('xxx/index.js'), {
    ele: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array 
    title: 'copy',
    tips: 'click to copy'
  }]
}
```