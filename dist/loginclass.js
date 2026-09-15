//Design a generic base class where each page defines its own locator shape.
import { BasePage } from "./generic-class.js";
class LoginPage extends BasePage {
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
