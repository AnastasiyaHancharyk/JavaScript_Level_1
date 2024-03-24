import { expect } from 'chai';
import LogInPage from '../../pageobjects/2_task/gg_cwpa/LogInPage.js';
import CalendarPage from '../../pageobjects/2_task/gg_cwpa/CalendarPage.js';
import ServicesPage from '../../pageobjects/2_task/gg_cwpa/ServicesPage.js';
import BasePage from '../../pageobjects/2_task/BasePage.js';


const logInPage = new LogInPage();
const calendarPage = new CalendarPage();
const servicesPage = new ServicesPage();
const basePage = new BasePage();


describe('CWPA CRUD scenarios', () => {

    beforeEach(() => {
        basePage.openUrl('https://app.glossgenius-staging.com/login');
    });

    // Function to verify that the current url inludes the expected path/page
    async function verifyCurrentUrlIncludesExpectedPage(expectedPage) {
        let currentPageUrl = await homePage.getPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };

    it('Services Page', async () => {

           
        await browser.pause(5000);
        
    });

});