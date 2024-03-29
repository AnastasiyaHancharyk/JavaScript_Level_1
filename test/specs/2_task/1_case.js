/*
1. Go to saucedemo;
   Check the following scenarios:
2. No Username + Correct Password + Click on the "Log In" button => Error "Epic sadface: Username is required";
3. Correct Username + No Password + Click on the "Log In" button  => Error "Epic sadface: Password is required";
4. Incorrect Username + Correct Password + Click on the "Log In" button  => Error "Epic sadface: Username and password do not match any user in this service";
5. Correct Username + Incorrect Password + Click on the "Log In" button  => Error "Epic sadface: Username and password do not match any user in this service";
6. Correct Username + Correct Password + Click on the "Log In" button  => User is taken to the "/inventory" page.
7. Log out from the application => User is taken to the log in page
*/

import BasePage from "../../pageobjects/2_task/BasePage.js";
import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();
const basePage = new BasePage();

describe('Log In and Log Out scenarios', () => {

    beforeEach(() => {
        basePage.openUrl('https://www.saucedemo.com/');
    });

    // Function to verify that the error text is correct
    async function verifyActualErrorTextEqualsExpected(expectedText) {
        let actualErrorText = await logInPage.getErrorText();
        let expectedErrorText = expectedText;
        expect(actualErrorText).to.equal(expectedErrorText);
    };

    // Function to verify that the url is correct
    async function verifyCurrentPageUrlEqualsExpected(expectedPageUrl) {
        let currentPageUrl = await logInPage.getPageUrl();
        expect(currentPageUrl).to.equal(expectedPageUrl);
    };


    it('"-" Username is left blank + Filled in Password', async () => {
        await logInPage.enterUsername('');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();

        await verifyActualErrorTextEqualsExpected('Epic sadface: Username is required');

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');

    });

    it('"-" Password is left blank + Filled in Username', async () => {
        await logInPage.enterUsername('standard_user');
        await logInPage.enterPassword('');
        await logInPage.clickLoginButton();

        await verifyActualErrorTextEqualsExpected('Epic sadface: Password is required');

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');

    });

    it('"-" Incorrect Username + Correct Password', async () => {
        await logInPage.enterUsername('123');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();

        await verifyActualErrorTextEqualsExpected('Epic sadface: Username and password do not match any user in this service');

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');

    });

    it('"-" Incorrect Password + Correct Username', async () => {
        await logInPage.enterUsername('standard_user');
        await logInPage.enterPassword('123');
        await logInPage.clickLoginButton();

        await verifyActualErrorTextEqualsExpected('Epic sadface: Username and password do not match any user in this service');

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');
    });

    it('"-" Locked out user', async () => {
        await logInPage.enterUsername('locked_out_user');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();

        await verifyActualErrorTextEqualsExpected('Epic sadface: Sorry, this user has been locked out.');

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');
    });


    it('"+" Correct Username + Correct Password + Log Out', async () => {
        await logInPage.enterUsername('standard_user');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/inventory.html');

        // Log out from the application
        await productsPage.openHamburgerMenu();
        await productsPage.clickLogOutButton();
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/');

    });

});