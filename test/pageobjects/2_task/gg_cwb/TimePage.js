import BasePage from "../BasePage.js"

const TIME_CELL = '//*[contains(@class, "SelectTime_time__eK2Ui")]';
const NEXT_BUTTON = '//*[@type="submit"]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';


export default class TimePage extends BasePage {

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

    async selectTime () {
        await this.click(TIME_CELL);
    };

    async getTime () {
        let selectedTime = await this.getText(TIME_CELL);
        let startTime = selectedTime.substring(0, selectedTime.indexOf(' -'));
        return startTime.toLowerCase();
    };

    async getApptDetails () {
        let value = await this.getText(APPT_DETAILS);
        return value.toLowerCase();
    };

};