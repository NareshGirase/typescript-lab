export class BasePage {
    locators;
    constructor(locators) {
        this.locators = locators;
    }
    waitForLoad() {
        console.log("waiting for page to load");
    }
}
