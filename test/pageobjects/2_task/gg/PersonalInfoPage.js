import BasePage from "../BasePage.js"

const FIRST_NAME_FIELD = '//*[@id="first-name"]';
const LAST_NAME_FIELD = '//*[@id="last-name"]';
const PRONOUNS_FIELD = '//*[@id="pronouns"]';
const EMAIL_FIELD = '//*[@id="email"]';
const PHONE_FIELD = '//*[@id="phone"]';
const CANCELLATION_CHECKBOX = '//*[@for="cancellation-policy"]';
const NEXT_BUTTON = '//*[@type="submit"]';



export default class PersonalInfoPage extends BasePage {

    async enterFirstName (value) {
        await this.setValue(FIRST_NAME_FIELD, value);
    };

    async enterLastName (value) {
        await this.setValue(LAST_NAME_FIELD, value);
    };

    async enterPronouns (value) {
        await this.setValue(PRONOUNS_FIELD, value);
    };

    async enterEmail () {
        let emailAddress = await this.emailAddress();
        await this.setValue(EMAIL_FIELD, emailAddress);
    };

    async enterPhoneNumber () {
        let phoneNumber = await this.randomPhoneNumber();
        await this.setValue(PHONE_FIELD, phoneNumber);
    };

    async clickCancellationCheckbox () {
        await this.click(CANCELLATION_CHECKBOX);
    };

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

};