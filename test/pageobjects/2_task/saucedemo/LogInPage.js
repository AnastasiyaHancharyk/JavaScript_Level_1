import BasePage from "../BasePage.js"

const USERNAME_FIELD = '//*[@id="user-name"]'
const PASSWORD_FIELD = '//*[@id="password"]'
const LOGIN_BUTTON = '//*[@id="login-button"]'
const ERROR_MESSAGE = '//*[@data-test="error"]'

export default class LogInPage extends BasePage {

    openUrl (url) {
        return super.openUrl(url);
    }
    
    async enterUsername (username) {
        await this.setValue(USERNAME_FIELD, username);
    };

    async enterPassword (password) {
        await this.setValue(PASSWORD_FIELD, password);
    };

    async clickLoginButton () {
        await this.click(LOGIN_BUTTON);
    };

    async getErrorText () {
        let text = await this.getText(ERROR_MESSAGE);
        return text;
    };

    async getPageUrl () {
        let url = await this.getCurrentPageUrl();
        return url;
      };

      

}