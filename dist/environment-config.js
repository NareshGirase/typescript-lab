var enviroments;
(function (enviroments) {
    enviroments[enviroments["DEV"] = 0] = "DEV";
    enviroments[enviroments["QA"] = 1] = "QA";
    enviroments[enviroments["PROD"] = 2] = "PROD";
})(enviroments || (enviroments = {}));
function getBaseURL(env) {
    switch (env) {
        case enviroments.DEV:
            return "https://dev.com";
        case enviroments.QA:
            return "https://qa.com";
        case enviroments.PROD:
            return "https://prod.com";
    }
}
let envURL = enviroments.QA;
console.log(getBaseURL(envURL));
export {};
