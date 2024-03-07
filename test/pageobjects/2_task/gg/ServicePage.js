import BasePage from "../BasePage.js"

const SELECT_SERVICE_BUTTON = '//*[contains(@title, "Select")]';
const BOOK_SERVICES_BUTTON = '//*[contains(@class, "btnBook")]';


export default class ServicePage extends BasePage {

    openUrl(url) {
        return super.openUrl(url);
    };

    async clickSelectServiceButton (numberOfElement) {
        await this.clickItemNumber(SELECT_SERVICE_BUTTON, numberOfElement);
    };

    async clickBookServicesButton () {
        await this.click(BOOK_SERVICES_BUTTON);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };


};