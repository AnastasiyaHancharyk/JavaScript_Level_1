import BasePage from "../BasePage.js"

const NEXT_MONTH_BUTTON = '//*[@name="next-month"]';
const NEXT_BUTTON = '//*[@type="submit"]';
const DAY_CELL = '//*[@class="style_cell__xvL7z"]';
const APPT_DETAILS = '//*[@class="AppointmentInfo_infoItem__fdYSU"]';


export default class CalendarPage extends BasePage {


    async selectDayFromToday(numberOfDays) {
        let date = new Date();
        // getDate() returns the day of the month for this date according to local time
        // setDate() changes the day of the month for this date according to local time
        date.setDate(date.getDate() + numberOfDays);  // Поменяли значение date на "Сегодняшняя дата + количество дней"
        let dayInt = date.getDate();
        // let monthInt = date.getMonth();
        
        // let dateToSet = monthInt + '/' + dayInt + '/' + date.getFullYear(); // Дата, которая должна по итогу отображаться
 
   
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

        // return dateToSet;
    };

    async selectDate(numberOfDays) {
        
        await this.selectDayFromToday(numberOfDays);
        // await this.setValue(FIRST_DATE_FIELED, date);
    };



    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };

};