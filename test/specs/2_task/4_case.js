// https://www.globalsqa.com/demo-site/datepicker/


import DatepickerPage from "../../pageobjects/2_task/globalsqa/DatepickerPage.js";
import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();
const datepicker = new DatepickerPage();

describe('Date Picker scenarios', () => {

    beforeEach(() => {
        datepicker.openUrl('https://www.hyrtutorials.com/p/calendar-practice.html');
    });

    // // Function to verify that the error text is correct
    // async function verifyActualErrorTextEqualsExpected(expectedText) {
    //     let actualErrorText = await logInPage.getErrorText();
    //     let expectedErrorText = expectedText;
    //     expect(actualErrorText).to.equal(expectedErrorText);
    // };

    // // Function to verify that the url is correct
    // async function verifyCurrentPageUrlEqualsExpected(expectedPageUrl) {
    //     let currentPageUrl = await logInPage.getPageUrl();
    //     expect(currentPageUrl).to.equal(expectedPageUrl);
    // };


    it('Simple Date Picker', async () => {
        await datepicker.setDate(15);
        await browser.pause(5000);

    });

});