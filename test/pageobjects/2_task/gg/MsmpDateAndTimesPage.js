import BasePage from "../BasePage.js"

const DATE_PICKER_BUTTON = '//*[@class="DatePicker_root__xRoie"]';
const AVAILABLE_DATE_OPTION = '//*[@class="DatePickerModal_label__q6iMo"]';
const SELECT_DATE_BUTTON = '//*[@class="DatePickerModal_submitButtonContainer__X5gRb"';
const NEXT_BUTTON = '//*[contains(text(), "Next")]';


export default class MsmpDateAndTimePage extends BasePage {
    
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