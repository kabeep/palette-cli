<div align="center">

<h1>palette-cli</h1>

A Node.js Library to make your terminal input colorful.

[![NodeJS][node-image]][node-url]
[![Install Size][install-size-image]][install-size-url]
[![NPM][npm-image]][npm-url]
[![code style][code-style-image]][code-style-url]
[![License][license-image]][license-url]

English | [简体中文][zh-cn-url]

</div>

## 📦 Installation

```bash
npm install --global @kabeep/palette-cli
```

```bash
yarn add --global @kabeep/palette-cli
```

```bash
pnpm add --global @kabeep/palette-cli
```

## ⚙️ Usage

```bash
palette -h
```

```
palette <command> [options]

Commands:
  palette paint <string> [styles..]  Styling of terminal string    [default] [aliases: color, style]
  palette swatch [count|rgb..]       Display color swatch & chips              [aliases: card, chip]
  palette tone                       256-color lookup tables                 [aliases: table, chart]

Positionals:
  string  Text to be styled                                                                 [string]
  styles  Keywords for color and style                                                      [string]

Options:
  -c, --clipboard  Write to the clipboard                                 [boolean] [default: false]
  -h, --help       Show help                                                               [boolean]
  -v, --version    Show version number                                                     [boolean]

Examples:
  palette string red bgWhite bold   Using the style keyword
  palette string ff0000, bg0,255,0  Using Hex and RGB
  palette string '#ff0000' 00ff00   The latter style is weighted higher
  echo string | palette red         Get string from stdin
  palette string -c red             Copies styled string to the clipboard
```

```bash
palette tone -h
```

```
palette tone

256-color lookup tables

Options:
  -s, --show-number  Shows 256-colored numbering          [boolean] [default: false]
  -h, --help         Show help                                             [boolean]
  -v, --version      Show version number                                   [boolean]

Examples:
  palette tone                Show color blocks only
  palette tone --show-number  Show color blocks with color numbering
```

```bash
palette swatch -h
```

```
palette swatch [count|rgb..]

Display color swatch & chips

Positionals:
  count  Number of random color samples                       [number] [default: 1]
  rgb    Specifies the RGB value of the card.                [number] [default: []]

Options:
  -h, --help     Show help                                                [boolean]
  -v, --version  Show version number                                      [boolean]

Examples:
  palette swatch              Displays a random color swatches
  palette swatch 8            Displays 8 random colored chips
  palette swatch 255 255 255  Show the rgb(255, 255, 255) swatch
```


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

[forex-url]: https://github.com/kabeep/forex

[issues-url]: https://github.com/kabeep/palette-cli/issues
