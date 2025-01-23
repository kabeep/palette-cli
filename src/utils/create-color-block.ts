import {
    black,
    createAnsi16,
    createAnsi256,
    whiteBright,
} from '@kabeep/palette';

function createColorBlock(visible = false) {
    const bgColor = createAnsi256(10);
    const reset = createAnsi16()(49);

    return (
        width: number,
        threshold: number,
        signal: number,
        index: number,
        throttle = false,
    ): string => {
        const isVisible = visible && (!throttle || !(index % 2));
        const padding = width - (isVisible ? `${signal}`.length : 0);
        const literal = signal.toString();
        const content = isVisible
            ? index % (threshold * 2) < threshold
                ? whiteBright(literal)
                : black(literal)
            : '';
        return [
            bgColor(signal),
            content.padEnd(content.length + padding, ' '),
            reset,
        ].join('');
    };
}

export default createColorBlock;
