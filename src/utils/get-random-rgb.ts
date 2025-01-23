import getRandom from './get-random';
import isLightColor from './is-light-color';

function getRandomRgb(r?: number, g?: number, b?: number) {
    const red = r ?? getRandom(256);
    const green = g ?? getRandom(256);
    const blue = b ?? getRandom(256);
    const isLight = isLightColor(red, green, blue);
    return { rgb: [red, green, blue] as const, isLight };
}

export default getRandomRgb;
