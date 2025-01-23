import {
    createColorBlock,
    createScheduler,
    isColorSupported,
    print,
} from '../utils';
import type { CommandOptions } from './types';

export interface ToneOptions extends CommandOptions {
    showNumber?: boolean;
}

function tone({ showNumber = false }: ToneOptions) {
    if (!isColorSupported(256)) {
        console.error('256 colors are not supported');
        return;
    }

    print.brand();

    let signal = 0;
    const colorBlock = createColorBlock(showNumber);

    print.title(
        `Standard colors (0 - 7)${new Array(showNumber ? 10 : 2).fill(' ').join('')}High-intsensity colors (8 - 15)`,
    );
    createScheduler(16)(
        (index: number) =>
            colorBlock(showNumber ? 4 : 3, 8, signal++, index) +
            (index === 7 ? ' ' : ''),
    );
    print.linebreak(2);

    print.title('216 colors (16 - 231)');
    createScheduler(216)(
        (index: number) =>
            colorBlock(showNumber ? 3 : 2, 18, signal++, index, true) +
            ((index + 1) % 6 ? '' : ' ') +
            ((index + 1) % 36 ? '' : '\n'),
    );
    print.linebreak(2);

    print.title('Grayscale colors (232 - 255)');
    createScheduler(24)((index: number) =>
        colorBlock(showNumber ? 3 : 2, 12, signal++, index, true),
    );
    print.linebreak(2);

    print.tip('See more https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit');
}

export default tone;
