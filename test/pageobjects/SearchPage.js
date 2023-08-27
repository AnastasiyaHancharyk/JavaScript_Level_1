const { Builder, By, Key } = require("selenium-webdriver");
// const ltCapabilities = require("../capabilities");
const should = require("chai").should();
const Page = require('./BasePage');

const INPUT_FIELD = '//textarea[@id="APjFqb"]';   // Поле ввода

class Search extends Page {    // The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.

    // Поле ввода
    get InputSearch () {
        return By.xpath(INPUT_FIELD);
    }

    async newSearch (value) { 
        await this.fillInValueAndClickEnter(this.InputSearch, value);
    };

    openSite (value) {
        return super.openSite(value);
    }

    async closeTheBrowser () {
        await this.closeBrowser();
    }


};


module.exports = new Search();