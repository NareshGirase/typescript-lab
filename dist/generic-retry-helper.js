//A generic wait/retry helper
async function retry(fn, times = 3) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        }
        catch (e) {
            if (i === times - 1) {
                throw e;
            }
        }
    }
    throw new Error("Retry failed");
}
export {};
