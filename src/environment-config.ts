//Use a TypeScript enum instead of magic strings, and write a function that returns the correct base URL.
enum Envioronment {
    DEV,
    QA,
    PROD
}

function getBaseURL(env: Envioronment): string {
    switch (env) {
        case Envioronment.DEV:
            return "https://dev.com"


        case Envioronment.QA:
            return "https://qa.com"


        case Envioronment.PROD:
            return "https://prod.com"


    }
}

let baseURL = Envioronment.QA
console.log(getBaseURL(baseURL))