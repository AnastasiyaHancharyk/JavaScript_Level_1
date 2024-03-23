import BasePage from "../BasePage.js"

const BOOK_NOW_BUTTON = '//*[contains(@class, "button__ETGhE")]';

export default class HomePage extends BasePage {

    async openUrl(url) {
        return super.openUrl(url);
    };

    async clickBookNowButton () {
        await this.click(BOOK_NOW_BUTTON);
    };

    async getPageUrl() {
        let url = await this.getCurrentPageUrl();
        return url;
    };

    async getPageUrl () {
        let url = await this.getCurrentPageUrl();
        return url;
      };

};