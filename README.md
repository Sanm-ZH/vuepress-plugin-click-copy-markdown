# vuepress-plugin-click-copy-markdown

> A vuepress plugin for Clipboard

[![npm](https://img.shields.io/npm/v/vuepress-plugin-click-copy-markdown.svg)](https://www.npmjs.com/package/vuepress-plugin-click-copy-markdown)
[![GitHub stars](https://img.shields.io/github/stars/Sanm-ZH/vuepress-plugin-click-copy-markdown.svg)](https://github.com/Sanm-ZH/vuepress-plugin-click-copy-markdown/stargazers)
[![GitHub license](https://img.shields.io/github/license/Sanm-ZH/vuepress-plugin-click-copy-markdown.svg)](https://github.com/Sanm-ZH/vuepress-plugin-click-copy-markdown/blob/master/LICENSE)

## Install

``` bash
# install
npm i vuepress-plugin-click-copy-markdown -D
# or use yarn
yarn add vuepress-plugin-click-copy-markdown -D
```

## Usage

vuepress config

``` javascript
module.exports = {
  plugins: ['one-click-copy']
}
```


## Options

The plugin supports these configurations.

``` js
module.exports = {
  plugins: [require('xxx/index.js'), {
    ele: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array 
    title: 'copy',
    tips: 'click to copy',
    showIcon: false // boolean tips: When true, the title is not an HTML tag string, and the default icon is displayed.
  }]
}
```