const { Builder, By, Key } = require("selenium-webdriver");
// const ltCapabilities = require("../capabilities");
var should = require("chai").should();
const driver = new Builder().forBrowser("chrome").build();

module.exports = class Page {

      
    async openSite(site_url) {
        await driver.get(site_url);
    };

    async fillInValueAndClickEnter (locator, value) {
        await driver.findElement(locator).sendKeys(value, Key.RETURN);
    };

    async closeBrowser () {
        await driver.quit();
    }
}