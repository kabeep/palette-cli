import * as palette from '@kabeep/palette';
import { bgHex, bgRgb, hex, rgb } from '@kabeep/palette';
import { getStdin, isHex, isRgb, print, setClipboard, toRgb } from '../utils';
import type { CommandOptions } from './types';

export interface PaintOptions extends CommandOptions {
    string?: string;
    styles?: (string | number)[];
    clipboard?: boolean;
}

async function paint({ string, styles = [], clipboard = false }: PaintOptions) {
    const stdin = await getStdin();
    const serials = stdin ? [string, ...styles] : [...styles];
    let content = stdin ?? string;
    if (!content) {
        console.error('Missing parameters `string`');
        return;
    }

    const patterns: string[] = serials
        .flatMap((item) => `${item}`.replaceAll(' ', '').split('.'))
        .filter(Boolean)
        .reverse();

    for (const pattern of patterns) {
        if (
            pattern in palette &&
            typeof palette[pattern as keyof typeof palette] === 'function'
        ) {
            content = (
                palette[pattern as keyof typeof palette] as (
                    input: string,
                ) => string
            )(content);
            continue;
        }

        const isBackground = pattern.startsWith('bg');
        const cleanPattern = isBackground ? pattern.slice(2) : pattern;

        if (isRgb(cleanPattern)) {
            const rgbArgs = toRgb(cleanPattern);
            content = isBackground
                ? bgRgb(...rgbArgs)(content)
                : rgb(...rgbArgs)(content);
        } else if (isHex(cleanPattern)) {
            content = isBackground
                ? bgHex(cleanPattern)(content)
                : hex(cleanPattern)(content);
        }
    }

    print(content, '\n');
    if (clipboard) {
        await setClipboard(JSON.stringify(content).replaceAll('"', ''));
        print('Clipboard write successful');
    }
}

export default paint;
