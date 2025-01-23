import createQueue from './create-queue';
import print from './print';

function createScheduler(length: number, offset = 0) {
    const queue = createQueue(length, offset);
    return (callback: (index: number) => string) => {
        queue((index: number) => print(callback(index)));
    };
}

export default createScheduler;
