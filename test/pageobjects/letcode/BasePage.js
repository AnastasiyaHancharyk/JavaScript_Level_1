export default class BasePage {

    open(url) {
        return browser.url(url)
    };

    async addValue(selector, value) {
        await $(selector).addValue(value);
    };

    async click(selector) {
        await $(selector).click();
    };

    async clearValue(selector) {
        await $(selector).clearValue();
    };

    async getAttribute(selector, attributeName) {
        await $(selector).getAttribute(attributeName);
    };

    async getCSSProperty(selector, cssProperty) {
        await $(selector).getCSSProperty(cssProperty);
    };

    async getProperty(selector, property) {
        await $(selector).getProperty(property);
    };

    async getText(selector) {
        await $(selector).getText();
    };

    async getValue(selector) {
        await $(selector).getValue();
    };


}