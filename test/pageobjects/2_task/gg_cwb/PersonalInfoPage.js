import BasePage from "../BasePage.js"

const FIRST_NAME_FIELD = '//*[@id="first-name"]';
const LAST_NAME_FIELD = '//*[@id="last-name"]';
const PRONOUNS_FIELD = '//*[@id="pronouns"]';
const EMAIL_FIELD = '//*[@id="email"]';
const PHONE_FIELD = '//*[@id="phone"]';
const CANCELLATION_CHECKBOX = '//*[@for="cancellation-policy"]';
const NEXT_BUTTON = '//*[@type="submit"]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';


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

    async enterEmail (emailAddress) {
        // let emailAddress = await this.emailAddress(); // This function allows to enter a unique email address
        await this.setValue(EMAIL_FIELD, emailAddress);
    };

    async enterPhoneNumber (phoneNumber) {
        // let phoneNumber = await this.randomPhoneNumber(); // This function allows to enter a random phone number
        await this.setValue(PHONE_FIELD, phoneNumber);
    };

    async clickCancellationCheckbox () {
        await this.click(CANCELLATION_CHECKBOX);
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