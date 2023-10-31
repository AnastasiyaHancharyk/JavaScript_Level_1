import BasePage from "../BasePage"

const USERNAME_FIELD = ''
const PASSWORD_FIELD = ''
const LOGIN_BUTTON = ''
const ERROR_MESSAGE_CONTAINER = ''

export default class LogInPage extends BasePage {

    openUrl () {
        return super.openUrl('');
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
        await this.getText(ERROR_MESSAGE_CONTAINER);
    };

    getPageUrl () {
        return this.getCurrentPageUrl()
      };

      

}