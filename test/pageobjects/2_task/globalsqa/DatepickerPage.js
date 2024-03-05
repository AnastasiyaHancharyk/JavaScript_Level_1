import BasePage from "../BasePage.js"

const FIRST_DATE_FIELED = '//*[@id="first_date_picker"]';
const MONTH_NAME = '//*[@class="ui-datepicker-month"]';
const DAY_CELL = '//*[contains(@class, "ui-state-default")]';
const NEXT_BUTTON = '//*[contains(@class, "ui-datepicker-next")]';

export default class DatepickerPage extends BasePage {

    openUrl(url) {
        return super.openUrl(url);
    }

    async selectDayFromToday(numberOfDays) {
        let date = new Date();
        // getDate() returns the day of the month for this date according to local time
        // setDate() changes the day of the month for this date according to local time
        date.setDate(date.getDate() + numberOfDays);  // Поменяли значение date на "Сегодняшняя дата + количество дней"
        let dayInt = date.getDate();
        let monthInt = date.getMonth();
        let dateToSet = monthInt + '/' + dayInt + '/' + date.getFullYear();
 
   
        let dayString = dayInt.toString();
        // let monthString = date.toLocaleString('default', { month: 'long' });
        // let currentMonthName = await this.getText(MONTH_NAME);
        await this.clickByText(DAY_CELL, dayString);
        // if (currentMonthName != monthString) {
        //     await this.click(NEXT_BUTTON);
        //     await this.selectDayFromToday(numberOfDays);
        // } else {
        //     await this.clickByText(DAY_CELL, dayString);
        //     // console.log(dayString)
        // }

        return dateToSet;
    };

    async selectDate(numberOfDays) {
        await this.click(FIRST_DATE_FIELED);
        // let dayCell = await this.selectByVisibleText(DAY_CELL, numberOfDays);
        await this.selectDayFromToday(numberOfDays);
        // await this.setValue(FIRST_DATE_FIELED, date);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };


};