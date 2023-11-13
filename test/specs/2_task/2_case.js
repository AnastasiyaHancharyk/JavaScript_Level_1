/* 
1. Log in to the app => User is taken to the "/inventory" page.
2. On the /inventory page, click on the "Add to cart" button => The button is changed to "Remove"
3. Add several items to the cart => The number of added items is shown next to the cart icon;
4. Click on the cart icon => User is taken to the "/cart" page AND the added items correspond to the ones shown in the cart.
5. Click on the "Checkout" button => "/checkout-step-one.html" page is shown;
6. Fill in the fields;
7. Click on the "Continue" button => "/checkout-step-two.html" page is shown;
8. Verify that "Price Total" is correct;
9. Verify that"Tax" is correct;
10. Verify that "Total" is correct;
11. Click on the Finish button;
*/

import CartPage from "../../pageobjects/2_task/saucedemo/CartPage.js";
import CheckoutInfoPage from "../../pageobjects/2_task/saucedemo/CheckoutInfoPage.js";
import CheckoutOverviewPage from "../../pageobjects/2_task/saucedemo/CheckoutOverviewPage.js";
import LogInPage from "../../pageobjects/2_task/saucedemo/LogInPage.js";
import ProductsPage from "../../pageobjects/2_task/saucedemo/ProductsPage.js";
import { expect } from 'chai';

const logInPage = new LogInPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutInfoPage = new CheckoutInfoPage();
const checkoutOverviewPage = new CheckoutOverviewPage();

describe('Adding products to cart', () => {

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


    it('"+" "Add to cart" button text is changed to "Remove" when clicking on it and vice versa', async () => {
        await logInWithValidCreds();

        let addToCart = await productsPage.getProductButtonText();
        expect(addToCart).to.equal('Add to cart');

        await productsPage.clickProductButton();
        let remove = await productsPage.getProductButtonText();
        expect(remove).to.equal('Remove');

        await productsPage.clickProductButton();
        let addToCart2 = await productsPage.getProductButtonText();
        expect(addToCart2).to.equal('Add to cart');
    });

    it.only('"+" Check out', async () => {
        await logInWithValidCreds();

        // Number of added items matches the number displayed next to the cart icon
        let addedProducts = await productsPage.addProductsToCart([0, 1, 2, 3, 4, 5]);
        let numberOfAddedProducts = addedProducts.numberOfProducts.toString();
        let numberShownOnCartIcon = await productsPage.cartNumberOfItems();
        expect(numberOfAddedProducts).to.equal(numberShownOnCartIcon);
        await productsPage.clickCartIcon();
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/cart.html');

        // Added products are displayed correctly on the cart page
        let addedProductName = addedProducts.name;
        let displayedProducts = await cartPage.getAddedProductNames('original');
        expect(addedProductName).to.have.members(displayedProducts);
        await cartPage.clickCheckoutButton();
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/checkout-step-one.html');

        // Fill in the fields on the Checkout (Information) page AND click "Continue" button
        await checkoutInfoPage.enterFirstName('Test');
        await checkoutInfoPage.enterLastName('User');
        await checkoutInfoPage.enterZipCode('123123');
        await checkoutInfoPage.clickContinueButton();
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/checkout-step-two.html');

        // Price of added products is displayed correctly on the Checkout (Overview) page
        // Actual price of added products
        const actualPriceWithoutTax = parseFloat(addedProducts.priceSum);
        const actualTax = parseFloat((actualPriceWithoutTax * 0.08).toFixed(2));
        const actualPriceWithTax = parseFloat((actualPriceWithoutTax + actualTax).toFixed(2));
        // Shown price of added products
        const shownPriceWithoutTax = await checkoutOverviewPage.getPriceWithoutTax();
        const shownTax = await checkoutOverviewPage.getTax();
        const shownPriceWithTax = await checkoutOverviewPage.getPriceWithTax();

        expect(actualPriceWithoutTax).to.equal(shownPriceWithoutTax);
        expect(actualTax).to.equal(shownTax);
        expect(actualPriceWithTax).to.equal(shownPriceWithTax);

        await checkoutOverviewPage.clickFinishButton();
        await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/checkout-complete.html');
        await browser.pause(3000);
    });







    // it('"+" Added products are displayed correctly on the cart page', async () => {
    //     await logInWithValidCreds();
    //     let addedProducts = await productsPage.addProductsToCart([5, 0, 3, 4]);
    //     await browser.pause(3000);
    //     await productsPage.clickCartIcon();
    //     await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/cart.html');
    //     let addedProductName = addedProducts.Name;
    //     let displayedProducts = await cartPage.getAddedProductNames('original');
    //     expect(addedProductName).to.have.members(displayedProducts);
    // });

    // it.only('"+" Added products are displayed correctly on the checkout page', async () => {
    //     await logInWithValidCreds();
    //     let addedProducts = await productsPage.addProductsToCart([5, 0, 3, 4]);
    //     await productsPage.clickCartIcon();
    //     await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/cart.html');
    //     await cartPage.clickCheckoutButton();
    //     await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/checkout-step-one.html');
    //     await checkoutInfoPage.enterFirstName('Test');
    //     await checkoutInfoPage.enterLastName('User');
    //     await checkoutInfoPage.enterZipCode('123123');
    //     await checkoutInfoPage.clickContinueButton();
    //     await verifyCurrentPageUrlEqualsExpected('https://www.saucedemo.com/checkout-step-two.html');
    //     await browser.pause(3000);
    // });



});