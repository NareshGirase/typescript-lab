//Design a generic base class where each page defines its own locator shape.
import { BasePage } from "./generic-class.js";

interface loginlocators {
    userName: string;
    passWord: string;
    loginButton: string
}

class LoginPage extends BasePage<loginlocators> {
    constructor() {
        super({
            userName: "#username",
            passWord: "#password",
            loginButton: "#login"
        });
    }
}

const Login = new LoginPage();
Login.waitForLoad();
console.log(Login.locators.userName);
console.log(Login.locators.passWord);