import BasePage from "../BasePage.js"

const FIRST_NAME_FIELD = '//*[@id="first-name"]';
const LAST_NAME = '//*[@id="last-name"]';
const ZIP_CODE = '//*[@id="postal-code"]';
const CONTINUE_BUTTON = '//*[@id="continue"]';

export default class CheckoutInfoPage extends BasePage {

    async enterFirstName (firstName) {
        await this.setValue(FIRST_NAME_FIELD, firstName);
    };

    async enterLastName (lastName) {
        await this.setValue(LAST_NAME, lastName);
    };

    async enterZipCode (zipCode) {
        await this.setValue(ZIP_CODE, zipCode);
    };

    async clickContinueButton () {
        await this.click(CONTINUE_BUTTON);
    };

};