/* 
1. Log in to the app => User is taken to the "/inventory" page.
2. On the /inventory page, click on the "Add to cart" button => The button is changed to the "Remove" button
3. Add several items to the cart => The number of added items is shown on the cart icon;
4. Click on the cart icon => User is taken to the "/cart" page AND the added items correspond the ones shown in the cart.
5. Click on the "Checkout" button => "/checkout-step-one.html" page is shown;
6. Fill in the fields;
7. Click on the "Continue" button => "/checkout-step-two.html" page is shown;
8. Verify that "Price Total" is correct;
9. Verify that"Tax" is correct;
10. Verify that "Total" is correct;
11. Click on the Finish button;
*/

import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();

describe('Checkout Out scenarios', () => {

    beforeEach(() => {
        logInPage.openUrl('https://www.saucedemo.com/');
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


    it('"+" Button text is changed when clicking on it', async () => {
        await logInWithValidCreds();
        let addToCart = await productsPage.getProductButtonText();
        expect(addToCart).to.equal('Add to cart');
        await productsPage.clickProductButton();
        let remove = await productsPage.getProductButtonText();
        expect(remove).to.equal('Remove');
    });

    it.only('"+" Button text is changed when clicking on it', async () => {
        await logInWithValidCreds();
        await productsPage.addProductToCart([1, 2, 3]);
        await browser.pause(3000);
        await productsPage.clickCartIcon();
        await browser.pause(3000);
    });


});