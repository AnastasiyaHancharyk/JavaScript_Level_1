import BasePage from "../BasePage.js"

const TIME_CELL = '//*[@class="SelectTime_time__eK2Ui"]';
const NEXT_BUTTON = '//*[@type="submit"]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';


export default class TimePage extends BasePage {

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

    async selectTime () {
        await this.click(TIME_CELL);
    };


};