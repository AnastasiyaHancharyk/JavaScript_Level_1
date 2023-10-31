import BasePage from "../BasePage"

const HAMBURGER_MENU_ICON = '';
const LOGOUT_BUTTON = '';

export default class ProductsPage extends BasePage {

    async openHamburgerMenu () {
        await this.click(HAMBURGER_MENU_ICON);
    };

    async clickLogOutButton () {
        await this.click(LOGOUT_BUTTON);
    }

}