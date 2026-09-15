async function retry<T>(fn: () => Promise<T>, times: number = 3): Promise<T> {

    for (let i = 0; i < times; i++) {

        try {
            return await fn();
        } catch (e) {
            if (i === times - 1) {
                throw e;
            }
        }
    }

    throw new Error("Retry failed");
}