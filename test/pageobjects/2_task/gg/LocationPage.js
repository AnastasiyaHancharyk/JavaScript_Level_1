import BasePage from "../BasePage.js"

const FIXED_LOCATION = '//*[@for="locationFixed"]';
const HOME_LOCATION = '//*[@for="locationHome"]';
const ADDRESS_STREET_FIELD = '//*[@id="addressLine1"]';
const ADDRESS_SUITE_FIELD = '//*[@id="addressLine2"]';
const CITY_FIELD = '//*[@id="city"]';
const ZIP_CODE_FIELD = '//*[@id="zipCode"]';
const STATE_DROPDOWN = '//*[@id="state"]';
const STATE_OPTION = '//*[contains(@class, "gg-dropdown__option")]';
const NEXT_BUTTON = '//*[@type="submit"]';


export default class LocationPage extends BasePage {

    async selectFixedLocation () {
        await this.click(FIXED_LOCATION);
    };

    async selectHomeLocation () {
        await this.click(HOME_LOCATION);
    };

    async enterStreet (value) {
        await this.setValue(ADDRESS_STREET_FIELD, value);
    };

    async enterSuite (value) {
        await this.setValue(ADDRESS_SUITE_FIELD, value);
    };

    async enterCity (value) {
        await this.setValue(CITY_FIELD, value);
    };

    async enterZipCode (value) {
        await this.setValue(ZIP_CODE_FIELD, value);
    };

    async openStateDropdown () {
        await this.click(STATE_DROPDOWN);
    };

    async selectState () {
        let state = await this.selectRandomState();
        await this.clickByText(STATE_OPTION, state);
        // await this.clickByText(STATE_OPTION, value);
    };

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

};