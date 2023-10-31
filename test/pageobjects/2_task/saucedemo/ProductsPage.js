import BasePage from "../BasePage.js"

const BURGER_MENU_ICON = '//*[@id="react-burger-menu-btn"]';
const LOGOUT_BUTTON = '//*[@id="logout_sidebar_link"]';

export default class ProductsPage extends BasePage {

    async openHamburgerMenu () {
        await this.click(BURGER_MENU_ICON);
    };

    async clickLogOutButton () {
        await this.click(LOGOUT_BUTTON);
    }

}