//Design a generic base class where each page defines its own locator shape.
import { BasePage } from "./generic-class.js";
class ChekoutPage extends BasePage {
    constructor() {
        super({
            address: ".address",
            payment: ".payment",
            placeOrder: ".placeorder"
        });
    }
}
const checkout = new ChekoutPage();
checkout.waitForLoad();
console.log(checkout.locators.address);
console.log(checkout.locators.payment);
console.log(checkout.locators.placeOrder);
