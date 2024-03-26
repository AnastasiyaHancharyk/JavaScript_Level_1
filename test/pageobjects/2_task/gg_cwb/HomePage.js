import BasePage from "../BasePage.js"

const BOOK_NOW_BUTTON = '//*[contains(@class, "button__ETGhE")]';

export default class HomePage extends BasePage {


    async clickBookNowButton () {
        await this.click(BOOK_NOW_BUTTON);
    };

};