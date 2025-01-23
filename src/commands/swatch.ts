import { bgRgb, black, whiteBright } from '@kabeep/palette';
import { createScheduler, getRandomRgb, print } from '../utils';
import type { CommandOptions } from './types';

export interface SwatchOptions extends CommandOptions {
    rgb?: number[];
}

function swatch({ rgb: serials = [] }: SwatchOptions) {
    const rgb = [...serials];
    const count = rgb.length === 1 ? rgb.pop() || 1 : 1;
    const createBlank = (length: number) => new Array(length).join(' ');

    const list = Array.from({ length: count }).map(() => getRandomRgb(...rgb));
    if (count === 1) {
        const width = 36;
        const current = list[0];
        const colour = bgRgb(...current.rgb);
        const createPadding = (placeholder = ' ') =>
            new Array(width).fill(placeholder).join('');
        const createInner = (content: string) => `│${content.padEnd(width)}│\n`;
        print(`╭${createPadding('─')}╮\n`);
        createScheduler(16)(() => {
            return createInner(colour(createPadding()));
        });
        print(createInner(createPadding('─')));
        print(createInner(' PALETTE'));
        print(createInner(` ${current.rgb.join(', ')}`));
        print(`╰${createPadding('─')}╯\n`);
        return;
    }

    const padding = createBlank(6);
    createScheduler(21)((index: number) => {
        return `${list
            .map((option) => {
                const title = `PALETTE ${option.rgb.join(' ')}`;
                const current = title.slice(index, index + 1) || ' ';
                return bgRgb(...option.rgb)(
                    ` ${option.isLight ? black(current) : whiteBright(current)}${padding}`,
                );
            })
            .join('')}\n`;
    });
}

export default swatch;
