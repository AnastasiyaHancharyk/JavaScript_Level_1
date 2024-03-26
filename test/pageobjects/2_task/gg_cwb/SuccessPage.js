import BasePage from "../BasePage.js"

const APPT_DETAILS = '//*[contains(@class, "Success_appointmentDetails__U7svS")]';



export default class SuccessPage extends BasePage {

    async getApptDetails() {
        let numberOfAppt = await this.getNumberOfElements(APPT_DETAILS);
        if (numberOfAppt == 2) {
            let apptDetailsOne = await this.getTexts(APPT_DETAILS, 0);
            let apptDetailsTwo = await this.getTexts(APPT_DETAILS, 1);
            return { apptDetailsOne: apptDetailsOne.toLowerCase(), apptDetailsTwo: apptDetailsTwo.toLowerCase() };
        } else if (numberOfAppt == 2) {
            let apptDetailsOne = await this.getTexts(APPT_DETAILS, 0);
            let apptDetailsTwo = await this.getTexts(APPT_DETAILS, 1);
            let apptDetailsThree = await this.getTexts(APPT_DETAILS, 2);
            return { apptDetailsOne: apptDetailsOne.toLowerCase(), apptDetailsTwo: apptDetailsTwo.toLowerCase(), apptDetailsThree: apptDetailsThree.toLowerCase() };
        } else {
                let apptDetailsOne = await this.getText(APPT_DETAILS);
                return apptDetailsOne.toLowerCase();
        };
    };

};