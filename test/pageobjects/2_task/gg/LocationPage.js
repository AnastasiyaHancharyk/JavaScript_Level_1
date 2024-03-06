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