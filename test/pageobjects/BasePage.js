const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
// const ltCapabilities = require("../capabilities");
var should = require("chai").should();
const driver = new Builder().forBrowser("chrome").build();

module.exports = class Page {


    async openSite(site_url) {
        await driver.get(site_url);
    };

    async fillInValueAndClickEnter(locator, value) {
        await driver.findElement(locator).sendKeys(value, Key.RETURN);
    };

    async closeBrowser() {
        await driver.quit();
    }

    async getText(selector) {
        return await driver.findElement(selector).getText();
    }

    async waitUntilElementIsVisible(locator, numberOfMillsSeconds) {
        await driver.wait(until.elementIsVisible(driver.findElement(locator)), numberOfMillsSeconds);
    }

    async actualTextEqualsExpected(locator, expectedText) {
        let actualText = await driver.findElement(locator).getText().then(function (value) {
            return value;
        });
        actualText.should.equal(expectedText)
    };


    async expectToHaveTextContaining(locator, expectedText) {

        let elements = await driver.findElements(locator);
        for (let e of elements) {
            var results = await e.getText();
            console.log(results);
        }

        // await expect(results).to.be.include(expectedText);
    }
};



