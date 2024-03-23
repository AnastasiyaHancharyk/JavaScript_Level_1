import BasePage from "../BasePage.js"

const DATE_PICKER_BUTTON = '//*[@class="DatePicker_root__xRoie"]';
const AVAILABLE_DATE_OPTION = '//*[@class="DatePickerModal_label__q6iMo"]';
const SELECT_DATE_BUTTON = '//*[@class="DatePickerModal_submitButtonContainer__X5gRb"]';
const APPT_MODULE = '//*[@class="AppointmentSelectDateTime_root__H9bJ_"]';
const SELECTED_TIME_ONE = 'fieldset:nth-child(3) ul li .AppointmentSelectDateTime_input___umDf:checked+label';
const SELECTED_TIME_TWO = 'fieldset:nth-child(4) ul li .AppointmentSelectDateTime_input___umDf:checked+label';
const SELECTED_TIME_THREE = 'fieldset:nth-child(5) ul li .AppointmentSelectDateTime_input___umDf:checked+label';
const NEXT_BUTTON = '//*[contains(text(), "Next")]';


export default class MsmpDateAndTimePage extends BasePage {

    async getSelectedTime() {
        let numberOfAppt = await this.getNumberOfElements(APPT_MODULE);
        if (numberOfAppt == 2) {

            let selectedTimeOne = await this.getText(SELECTED_TIME_ONE);
            let startTimeOne = selectedTimeOne.substring(0, selectedTimeOne.indexOf(' -'));

            let selectedTimeTwo = await this.getText(SELECTED_TIME_TWO);
            let startTimeTwo = selectedTimeTwo.substring(0, selectedTimeTwo.indexOf(' -'));

            return {startTimeOne, startTimeTwo};

        } else if (numberOfAppt == 3) {

            let selectedTimeOne = await this.getText(SELECTED_TIME_ONE);
            let startTimeOne = selectedTimeOne.substring(0, selectedTimeOne.indexOf(' -'));

            let selectedTimeTwo = await this.getText(SELECTED_TIME_TWO);
            let startTimeTwo = selectedTimeTwo.substring(0, selectedTimeTwo.indexOf(' -'));

            let selectedTimeThree = await this.getText(SELECTED_TIME_THREE);
            let startTimeThree = selectedTimeThree.substring(0, selectedTimeThree.indexOf(' -'));

            return {startTimeOne, startTimeTwo, startTimeThree};

        };
    };

    async getDateDisplayedInDatePicker() {
        let displayedDate = await this.getText(DATE_PICKER_BUTTON);
        let DateWithYear = displayedDate.substring(displayedDate.indexOf(', ') + 2);
        let DateWithoutYear = DateWithYear.substring(0, DateWithYear.indexOf(', '));
        return { DateWithoutYear: DateWithoutYear.toLowerCase(), DateWithYear: DateWithYear.toLowerCase() };
    };

    async clickDatePickerButton() {
        await this.click(DATE_PICKER_BUTTON);
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