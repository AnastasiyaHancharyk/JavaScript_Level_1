import BasePage from "../BasePage.js"

const SELECT_SERVICE_BUTTON = '//*[contains(@class, "button__cVlDV")]';
const SERVICE_NAME = '//*[contains(@class, "title__RcYGl")]';
const BOOK_SERVICES_BUTTON = '//*[contains(@class, "btnBook")]';
const SELECT_A_PROFESSIONAL_DROPDOWN ='//*[@id="professional-dropdown"]';
const SELECT_A_PROFESSIONAL_FROM_LIST ='//*[contains(@class, "gg-dropdown__option")]';



export default class ServicePage extends BasePage {

    openUrl(url) {
        return super.openUrl(url);
    };

    /**
    * @param {string} numberOfElement - number of a service according to the displayed order (0 is the first)
    */
    async clickSelectServiceButton(numberOfElement) {
        await this.clickItemByNumber(SELECT_SERVICE_BUTTON, numberOfElement);
        let serviceName = await this.getTexts(SERVICE_NAME, numberOfElement);
        return serviceName.toLowerCase();
    };

    async clickBookServicesButton() {
        await this.click(BOOK_SERVICES_BUTTON);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };


};