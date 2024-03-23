import BasePage from "../BasePage.js"

const NEXT_MONTH_BUTTON = '//*[@name="next-month"]';
const NEXT_BUTTON = '//*[@type="submit"]';
const DAY_CELL = '//*[contains(@class, "style_day__Xt_Hn")]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';
const DISPLAYED_MONTH = '//*[contains(@class, "Calendar_calendarCaption__NV6Me")]';


export default class CalendarPage extends BasePage {

    async selectDate(numberOfDaysFromToday) {

        let dateFromToday = await this.selectDayFromToday(numberOfDaysFromToday, DAY_CELL, DISPLAYED_MONTH, NEXT_MONTH_BUTTON);
        // await this.setValue(FIRST_DATE_FIELED, date);
        return dateFromToday.toLowerCase();
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

    async clickNextButton() {
        await this.click(NEXT_BUTTON);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };

};