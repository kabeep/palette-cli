import { readFileSync } from 'node:fs';
import process from 'node:process';
import { yellow } from '@kabeep/palette';
import updateNotifier from 'update-notifier';
import type { Argv } from 'yargs';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import type { PaintOptions, SwatchOptions, ToneOptions } from '../src';
import { paint, swatch, tone } from '../src';

const pkg = JSON.parse(
    readFileSync(new URL('../package.json', import.meta.url)).toString('utf8'),
);

updateNotifier({ pkg }).notify({ isGlobal: true });

yargs(hideBin(process.argv))
    .scriptName('palette')
    .usage('$0 <command> [options]')
    .command(
        ['paint <string> [styles..]', 'color', 'style', '$0'],
        'Styling of terminal string',
        (yargs: Argv<PaintOptions>) => {
            return yargs
                .positional('string', {
                    type: 'string',
                    desc: 'Text to be styled',
                    required: true,
                })
                .positional('styles', {
                    type: 'string',
                    desc: 'Keywords for color and style',
                    array: true,
                })
                .option('clipboard', {
                    alias: 'c',
                    type: 'boolean',
                    desc: 'Write to the clipboard',
                    default: false,
                })
                .example(
                    yellow('$0 string red bgWhite bold'),
                    'Using the style keyword',
                )
                .example(
                    yellow('$0 string ff0000, bg0,255,0'),
                    'Using Hex and RGB',
                )
                .example(
                    yellow("$0 string '#ff0000' 00ff00"),
                    'The latter style is weighted higher',
                )
                .example(
                    yellow('echo string | $0 red'),
                    'Get string from stdin',
                )
                .example(
                    yellow('$0 string -c red'),
                    'Copies styled string to the clipboard',
                );
        },
        paint,
    )
    .command(
        ['swatch [count|rgb..]', 'card', 'chip'],
        'Display color swatch & chips',
        (yargs: Argv<SwatchOptions>) => {
            return yargs
                .positional('count', {
                    type: 'number',
                    desc: 'Number of random color samples',
                })
                .positional('rgb', {
                    type: 'number',
                    desc: 'Specifies the RGB value of the card.',
                    array: true,
                })
                .example(
                    yellow('$0 swatch'),
                    'Displays a random color swatches',
                )
                .example(
                    yellow('$0 swatch 8'),
                    'Displays 8 random colored chips',
                )
                .example(
                    yellow('$0 swatch 255 255 255'),
                    'Show the rgb(255, 255, 255) swatch',
                );
        },
        swatch,
    )
    .command(
        ['tone', 'table', 'chart'],
        '256-color lookup tables',
        (yargs: Argv<ToneOptions>) => {
            return yargs
                .options('show-number', {
                    alias: 's',
                    type: 'boolean',
                    desc: 'Shows 256-colored numbering',
                    default: false,
                })
                .example(yellow('$0 tone'), 'Show color blocks only')
                .example(
                    yellow('$0 tone --show-number'),
                    'Show color blocks with color numbering',
                );
        },
        tone,
    )
    .alias('h', 'help')
    .alias('v', 'version')
    .strict()
    .demandCommand(1)
    .parse();
