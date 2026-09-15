//Design a generic base class where each page defines its own locator shape.
export class BasePage {
    locators;
    constructor(locators) {
        this.locators = locators;
    }
    waitForLoad() {
        console.log("waiting for page to load");
    }
}
