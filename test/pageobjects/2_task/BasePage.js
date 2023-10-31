export default class BasePage {

    openUrl(url) {
        return browser.url(url)
    };

    async setValue(selector, value) {
        await $(selector).clearValue();
        await $(selector).setValue(value);
    };

    async click(selector) {
        await $(selector).click();
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

    async getCurrentUrl() {
        await browser.getUrl();
    };


}