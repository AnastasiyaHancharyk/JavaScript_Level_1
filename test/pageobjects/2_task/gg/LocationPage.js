import BasePage from "../BasePage.js"

const FIXED_LOCATION = '//*[@class="SelectLocation_addressWrap__RLX__"]';
const HOME_LOCATION = '//*[@for="locationHome"]';
const ADDRESS_STREET_FIELD = '//*[@id="addressLine1"]';
const ADDRESS_SUITE_FIELD = '//*[@id="addressLine2"]';
const CITY_FIELD = '//*[@id="city"]';
const ZIP_CODE_FIELD = '//*[@id="zipCode"]';
const STATE_DROPDOWN = '//*[@id="state"]';
const STATE_OPTION = '//*[contains(@class, "gg-dropdown__option")]';
const NEXT_BUTTON = '//*[@type="submit"]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';


export default class LocationPage extends BasePage {

    async selectFixedLocation () {
        await this.click(FIXED_LOCATION);
        let fixedLocationAddress = await this.getText(FIXED_LOCATION);
        return fixedLocationAddress.toLowerCase();
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
        let numberOfStates = await this.getNumberOfElements(STATE_OPTION);
        let state = await this.randomNumberFromRange(numberOfStates);
        await this.clickItemByNumber(STATE_OPTION, state);
    };

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

    async getApptDetails() {
        let numberOfAppt = await this.getNumberOfElements(APPT_DETAILS);
        if (numberOfAppt == 1) {
            let apptDetailsOne = await this.getText(APPT_DETAILS);
            return apptDetailsOne.toLowerCase();
        } else if (numberOfAppt == 2) {
            let apptDetailsOne = await this.getTexts(APPT_DETAILS, 0);
            let apptDetailsTwo = await this.getTexts(APPT_DETAILS, 1);
            return { apptDetailsOne: apptDetailsOne.toLowerCase(), apptDetailsTwo: apptDetailsTwo.toLowerCase() };
        } else if (numberOfAppt == 2) {
            let apptDetailsOne = await this.getTexts(APPT_DETAILS, 0);
            let apptDetailsTwo = await this.getTexts(APPT_DETAILS, 1);
            let apptDetailsThree = await this.getTexts(APPT_DETAILS, 2);
            return { apptDetailsOne: apptDetailsOne.toLowerCase(), apptDetailsTwo: apptDetailsTwo.toLowerCase(), apptDetailsThree: apptDetailsThree.toLowerCase() };
        };
    };

};