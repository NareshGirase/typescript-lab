var Envioronment;
(function (Envioronment) {
    Envioronment[Envioronment["DEV"] = 0] = "DEV";
    Envioronment[Envioronment["QA"] = 1] = "QA";
    Envioronment[Envioronment["PROD"] = 2] = "PROD";
})(Envioronment || (Envioronment = {}));
function getBaseURL(env) {
    switch (env) {
        case Envioronment.DEV:
            return "https://dev.com";
        case Envioronment.QA:
            return "https://qa.com";
        case Envioronment.PROD:
            return "https://prod.com";
    }
}
let baseURL = Envioronment.QA;
console.log(getBaseURL(baseURL));
export {};
