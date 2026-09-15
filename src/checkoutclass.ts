import { BasePage } from "./generic-class.js";

interface checkoutLocators {
    address: string;
    payment: string;
    placeOrder: string;
}

class ChekoutPage extends BasePage<checkoutLocators> {
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