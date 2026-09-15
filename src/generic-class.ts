//Design a generic base class where each page defines its own locator shape.
export class BasePage<T> {
    locators: T;


    constructor(locators: T) {
        this.locators = locators;
    }

    waitForLoad(): void {
        console.log("waiting for page to load")
    }
}
