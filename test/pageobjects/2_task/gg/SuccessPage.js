import BasePage from "../BasePage.js"

const APPOINTMENT_DETAILS = '//*[contains(@class, "Success_appointmentDetails__U7svS")]';



export default class SuccessPage extends BasePage {

    async getApptDetails () {
        let value = await this.getText(APPOINTMENT_DETAILS);
        return value.toLowerCase();
    };

};