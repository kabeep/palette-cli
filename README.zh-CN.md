<div align="center">

<h1>palette-cli</h1>

一个 Node.js 库使你的终端输入变得丰富多彩。

[![NodeJS][node-image]][node-url]
[![Install Size][install-size-image]][install-size-url]
[![NPM][npm-image]][npm-url]
[![code style][code-style-image]][code-style-url]
[![License][license-image]][license-url]

[English][en-us-url] | 简体中文

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/fbc01d73-7934-4d01-9e4e-9f11f0737819" />
  <img width="814" alt="Help Info" src="https://github.com/user-attachments/assets/996184c8-a083-4df4-aa23-25e9cb4a47b7" />
</picture>

</div>

## 📦 安装

```bash
npm install --global @kabeep/palette-cli
```

```bash
yarn add --global @kabeep/palette-cli
```

```bash
pnpm add --global @kabeep/palette-cli
```

## ⚙️ 使用

```bash
palette -h
```

```
palette <命令> [选项]

命令：
  palette paint <string> [styles..]  设置终端字符串样式        [默认值] [aliases: color, style]
  palette swatch [count|rgb..]       显示色样和色片                      [aliases: card, chip]
  palette tone                       256 色查询表                      [aliases: table, chart]

位置：
  string  要设置样式的文本                                                             [字符串]
  styles  颜色和样式的关键词                                                           [字符串]

选项：
  -c, --clipboard  写入剪贴板                                            [布尔] [默认值: false]
  -h, --help       显示帮助信息                                                         [布尔]
  -v, --version    显示版本号                                                           [布尔]

示例：
  palette string red bgWhite bold   使用关键字
  palette string ff0000, bg0,255,0  使用 Hex 和 RGB
  palette string '#ff0000' 00ff00   越后面的参数权重更高
  echo string | palette red         从标准输入流中获取文本
  palette string -c red             将样式字符串复制到剪贴板
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/7aa3b654-3550-423b-a844-83a6f61d3ea5" />
  <img width="814" alt="Help Info" src="https://github.com/user-attachments/assets/74f042fe-658c-47ec-ad76-1c1d3c90c4d9" />
</picture>

```bash
palette tone -h
```

```
palette tone

256 色查询表

选项：
  -s, --show-number  显示 256 色编号                       [布尔] [默认值: false]
  -h, --help         显示帮助信息                                         [布尔]
  -v, --version      显示版本号                                           [布尔]

示例：
  palette tone                仅显示色块
  palette tone --show-number  显示带有颜色编号的色块
```

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/59bafd00-eee3-45d7-9a0f-34835514e952" />
  <img width="814" alt="Help Info" src="https://github.com/user-attachments/assets/294bf8d7-b88e-4129-bd3f-ada74c9fd40b" />
</picture>

```bash
palette swatch -h
```

```
palette swatch [count|rgb..]

显示色板和色样

Positionals:
  count  随机颜色的色板数量                                   [数字] [默认值: []]
  rgb    指定卡的 RGB 值                                     [数字] [默认值: []]

Options:
  -h, --help     显示帮助信息                                             [布尔]
  -v, --version  显示版本号                                               [布尔]

Examples:
  palette swatch              显示随机颜色的色卡
  palette swatch 8            显示 8 个随机颜色的色板
  palette swatch 255 255 255  显示 rgb(255, 255, 255) 的色卡
```

## 🔗 关联库

- [palette][palette-url] - 🎨 最快的 Node.js 库, 支持 Hex、RGB 和 tree-shaking 设置终端文本的颜色和样式。

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues][issues-url] 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE][license-url] 文件。


[node-image]: https://img.shields.io/node/v/%40kabeep%2Fpalette-cli?color=lightseagreen
[node-url]: https://nodejs.org/

[npm-image]: https://img.shields.io/npm/d18m/%40kabeep%2Fpalette-cli?color=fa6673
[npm-url]: https://www.npmjs.com/package/@kabeep/palette-cli

[install-size-image]: https://packagephobia.com/badge?p=@kabeep/palette-cli
[install-size-url]: https://packagephobia.com/result?p=@kabeep/palette-cli

[code-style-image]: https://img.shields.io/badge/Formatted_with-Biome-cornflowerblue?style=flat&logo=biome
[code-style-url]: https://biomejs.dev/

[license-image]: https://img.shields.io/github/license/kabeep/palette-cli?color=slateblue
[license-url]: LICENSE

[en-us-url]: README.md
[zh-cn-url]: README.zh-CN.md

[palette-url]: https://github.com/kabeep/palette

[issues-url]: https://github.com/kabeep/palette-cli/issues
