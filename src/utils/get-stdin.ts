import process from 'node:process';

function getStdin() {
    return new Promise<string | null>((resolve, reject) => {
        try {
            if (process.stdin.isTTY) {
                resolve(null);
            } else {
                let content = '';

                process.stdin.on('data', (chunk) => {
                    content += chunk.toString();
                });

                process.stdin.on('end', () => {
                    resolve(content);
                });
            }
        } catch (err) {
            reject(err);
        }
    });
}

export default getStdin;
