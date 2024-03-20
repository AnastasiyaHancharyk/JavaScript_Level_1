import BasePage from "../BasePage.js"

const DATE_PICKER_BUTTON = '//*[@class="DatePicker_root__xRoie"]';
const AVAILABLE_DATE_OPTION = '//*[@class="DatePickerModal_label__q6iMo"]';
const SELECT_DATE_BUTTON = '//*[@class="DatePickerModal_submitButtonContainer__X5gRb"]';
const SELECTED_TIME = '.AppointmentSelectDateTime_input___umDf:checked+label';
const NEXT_BUTTON = '//*[contains(text(), "Next")]';


export default class MsmpDateAndTimePage extends BasePage {

    async getSelectedTime() {
        let selectedTime = await this.getText(SELECTED_TIME);
        console.log(selectedTime);
    };

    async clickDatePickerButton() {
        await this.click(DATE_PICKER_BUTTON);
    };

    async getDateDisplayedInDatePicker() {
        let displayedDate = await this.getText(DATE_PICKER_BUTTON);
        let DateWithoutDayOfWeek = displayedDate.substring(displayedDate.indexOf(', ') + 2);
        let DateWithoutYear = DateWithoutDayOfWeek.substring(0, DateWithoutDayOfWeek.indexOf(', '));
        return DateWithoutYear;
    };

    async clickFirstAvailableDateOption() {
        await this.click(AVAILABLE_DATE_OPTION);
    };

    async clickSelectDateButton() {
        await this.click(SELECT_DATE_BUTTON);
    };

    async clickNextButton() {
        await this.click(NEXT_BUTTON);
    };


};