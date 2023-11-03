// Sorting
/*
1. Log in to the application => Verify that a user is on the /inventory page
2. Sort the Products by Price => Verify that the sorting is correct by checking the first product
3. Sort the Products by Name => Verify that the sorting is correct by checking the first product
Array?
*/

import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();

describe('Sorting scenarios', () => {

    beforeEach(() => {
        logInPage.openUrl('https://www.saucedemo.com/');
    });

    // Function to verify that the url is correct
    async function verifyCurrentPageUrlEqualsExpected(expectedPageUrl) {
        let currentPageUrl = await logInPage.getPageUrl();
        expect(currentPageUrl).to.equal(expectedPageUrl);
    };

    it('"+" Sorting', async () => {
        await logInPage.enterUsername('standard_user');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();

        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/inventory.html');

        let x = await productsPage.getProductNames('reverse');
        let y = await productsPage.getProductNames('original');
        expect(x).to.have.ordered.members(y);

        // await productsPage.getProductPrices('reverse');

    });

});