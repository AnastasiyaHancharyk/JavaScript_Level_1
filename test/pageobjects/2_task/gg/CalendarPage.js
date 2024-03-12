import BasePage from "../BasePage.js"

const NEXT_MONTH_BUTTON = '//*[@name="next-month"]';
const NEXT_BUTTON = '//*[@type="submit"]';
const DAY_CELL = '//*[contains(@class, "style_day__Xt_Hn")]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';
const DISPLAYED_MONTH = '//*[contains(@class, "Calendar_calendarCaption__NV6Me")]';


export default class CalendarPage extends BasePage {


    async selectDayFromToday(numberOfDaysFromToday) {
        let date = new Date();
        // getDate() returns the day of the month for this date according to local time
        // setDate() changes the day of the month for this date according to local time
        date.setDate(date.getDate() + numberOfDaysFromToday);  // Поменяли значение date на "Сегодняшняя дата + количество дней"
        let dayInt = date.getDate(); // Day as int
        let dayString = dayInt.toString(); // Day as string
        let monthString = date.toLocaleString('eng', { month: 'long' }); // Month's full name
        let fullYear = date.getFullYear();  // Full year
        let currentMonthName = await this.getText(DISPLAYED_MONTH); // Get current month shown in the calendar
        let monthAndYear = monthString + " " + fullYear;

        let dateToBeDisplayed = monthString + ' ' + dayInt; // Дата, которая должна по итогу отображаться

        if (currentMonthName != monthAndYear) {
            await this.click(NEXT_MONTH_BUTTON);
            await this.selectDayFromToday(numberOfDaysFromToday);
        } else {
            await this.clickByText(DAY_CELL, dayString);
        };
        
        return dateToBeDisplayed;
    };

    async selectDate(numberOfDaysFromToday) {

        let dateFromToday = await this.selectDayFromToday(numberOfDaysFromToday);
        // await this.setValue(FIRST_DATE_FIELED, date);
        return dateFromToday;
    };

    async getApptDetails () {
        let value = await this.getText(APPT_DETAILS);
        return value;
    }

    async clickNextButton () {
        await this.click(NEXT_BUTTON);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };

};