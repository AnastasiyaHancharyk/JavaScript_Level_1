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




    it('Simple Date Picker', async () => {
        await datepicker.selectDate(15);
        await browser.pause(5000);

    });

});