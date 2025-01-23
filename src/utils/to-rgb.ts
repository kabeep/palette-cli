function toRgb(value: string) {
    const rgb: number[] = [];

    for (const literal of value.split(/[,\-]/)) {
        const numeric = Number.parseInt(literal);

        rgb.push(Math.max(0, Math.min(255, numeric)));
    }

    return rgb as [number, number, number];
}

export default toRgb;
