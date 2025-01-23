function isLightColor(r: number, g: number, b: number) {
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128;
}

export default isLightColor;
