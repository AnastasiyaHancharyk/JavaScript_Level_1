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

    async clickProfessionalDropdown() {
        await this.click(SELECT_A_PROFESSIONAL_DROPDOWN);
    };

    async geProfessionalShownInDropdown() {
        let shownProfessional = await this.getText(SELECT_A_PROFESSIONAL_DROPDOWN);
        return shownProfessional.toLowerCase();
    };

        /**
    * @param {string} numberOfProvider - 0 == "Any Professional"; total number of available providers == 2.
    */
    async selectProfessionalFromList(numberOfProvider) {
        let professionalName = await this.getTexts(SELECT_A_PROFESSIONAL_FROM_LIST, numberOfProvider);
        await this.clickItemByNumber(SELECT_A_PROFESSIONAL_FROM_LIST, numberOfProvider);
        return professionalName.toLowerCase();
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };


};