/*
1. Log in to the aucedemo app => Verify that a user is on the /inventory page
2. Sort the products by Name (A to Z) => Verify that the sorting is correct
3. Sort the products by Name (Z to A) => Verify that the sorting is correct
4. Sort the products by Price (Low to High)=> Verify that the sorting is correct
5. Sort the products by Price (High to Low)=> Verify that the sorting is correct
*/

import BasePage from "../../pageobjects/2_task/BasePage.js";
import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();
const basePage = new BasePage();

describe('Sorting scenarios', () => {

    beforeEach(() => {
        basePage.openUrl('https://www.saucedemo.com/');
    });

    // Function to log into the app and verify that the use is logged in successfully
    async function logInWithValidCreds() {
        await logInPage.enterUsername('standard_user');
        await logInPage.enterPassword('secret_sauce');
        await logInPage.clickLoginButton();
        
        // Verify that the use is logged in successfully be checking the page
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/inventory.html');
    };

    // Function to verify that the url is correct
    async function verifyCurrentPageUrlEqualsExpected(expectedPageUrl) {
        let currentPageUrl = await logInPage.getPageUrl();
        expect(currentPageUrl).to.equal(expectedPageUrl);
    };

    it('"+" Sorting by Name (A to Z)', async () => {
        await logInWithValidCreds();
        let expectedSorting = await productsPage.getProductNames('sort'); // Get products' names, create an array and sort its items alphabetically
        await productsPage.clickSortButton();
        await productsPage.selectSortingType('A to Z');
        let currentSorting = await productsPage.getProductNames('original'); // Get products' names after sorting
        expect(currentSorting).to.have.ordered.members(expectedSorting);

    });

    it('"+" Sorting by Name (Z to A)', async () => {
        await logInWithValidCreds();
        let expectedSorting = await productsPage.getProductNames('reverse'); // Get products' names, create an array and sort its items alphabetically (reversed)
        await productsPage.clickSortButton();
        await productsPage.selectSortingType('Z to A');
        let currentSorting = await productsPage.getProductNames('original'); // Get products' names after sorting
        expect(currentSorting).to.have.ordered.members(expectedSorting);
    });

    it('"+" Sorting by Price (Low to High)', async () => {
        await logInWithValidCreds();
        let expectedSorting = await productsPage.getProductPrices('sort'); // Get products' prices, create an array and sort its items from lowest to highest
        await productsPage.clickSortButton();
        await productsPage.selectSortingType('Low to High');
        let currentSorting = await productsPage.getProductPrices('original'); // Get products' prices after sorting
        expect(currentSorting).to.have.ordered.members(expectedSorting);
    });

    it('"+" Sorting by Price (High to Low)', async () => {
        await logInWithValidCreds();
        let expectedSorting = await productsPage.getProductPrices('reverse'); // Get products' prices, create an array and sort its items from highest to lowest
        await productsPage.clickSortButton();
        await productsPage.selectSortingType('High to Low');
        let currentSorting = await productsPage.getProductPrices('original'); // Get products' prices after sorting
        expect(currentSorting).to.have.ordered.members(expectedSorting);
    });

});