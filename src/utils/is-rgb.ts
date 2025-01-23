function isRgb(value: string) {
    const regular = /^(\d{1,3}[,\-]){2}\d{1,3}$/;

    return regular.test(value);
}

export default isRgb;
