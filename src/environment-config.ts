enum enviroments {
    DEV,
    QA,
    PROD
}
function getBaseURL(env: enviroments): string {
    switch (env) {
        case enviroments.DEV:
            return "https://dev.com"

        case enviroments.QA:
            return "https://qa.com"

        case enviroments.PROD:
            return "https://prod.com"
    }
}

let envURL:enviroments = enviroments.QA
console.log(getBaseURL(envURL))