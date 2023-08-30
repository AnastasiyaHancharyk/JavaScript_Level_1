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
        await driver.findElement(locator).sendKeys(value, Key.ENTER);
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


    async expectElementsToHaveTextContaining(locator, expectedText) {

        let elements = await driver.findElements(locator);
        for (let e of elements) {
            var results = await e.getText();
            if (results == '') {
                await expect(results).to.not.include(expectedText);
            } else {
                await expect(results.toUpperCase()).to.include(expectedText);
            }
            console.log(results);
        };

    };

    async cleanField(locator) {
        await driver.findElement(locator).clear();
    };

    async click(locator) {
        await driver.findElement(locator).click();
    };

    async scrollIntoView(locator) {
        const element = await driver.findElement(locator);
        await driver.actions()
            .scroll(0, 0, 0, 0, element)
            .perform();
    };

    async expectToBeEqual(locator, expectedText) {
        const actualText = await driver.findElement(locator).getText();
        await expect(actualText).to.equal(expectedText);
    };

    async getAttribute(locator, attributeName) {
        return await driver.findElement(locator).getAttribute(attributeName);

    };

    async currentURLincludesExpected(expectedURL) {
        let actualURL = await driver.getCurrentUrl();
        await expect(actualURL).to.include(expectedURL);

    };

    async sleep (time) {
        await driver.sleep(time);
    };




};



