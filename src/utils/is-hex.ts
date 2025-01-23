function isHex(value: string): boolean {
    const regular = /[a-f\d]{6}|[a-f\d]{3}/i;

    return regular.test(value);
}

export default isHex;
