function createQueue(length: number, offset = 0) {
    return (callback: (index: number) => unknown) => {
        for (let i = offset; i < length; i++) {
            callback(i);
        }
    };
}

export default createQueue;
