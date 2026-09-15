type Config = {
    readonly baseURL: string;
    retries?: number;
};

let cg: Config = {
    baseURL: 'https://staging.app.com',
    retries: 2
};

console.log(cg);