/*
Single-Provider booking flow:
1. One service;
2. Provider is not specified;
3. Home location.
*/

import { expect } from 'chai';
import HomePage from "../../pageobjects/2_task/gg/HomePage.js";
import ServicePage from "../../pageobjects/2_task/gg/ServicePage.js";
import CalendarPage from "../../pageobjects/2_task/gg/CalendarPage.js";
import TimePage from "../../pageobjects/2_task/gg/TimePage.js";
import LocationPage from "../../pageobjects/2_task/gg/LocationPage.js";
import PersonalInfoPage from "../../pageobjects/2_task/gg/PersonalInfoPage.js";
import SuccessPage from "../../pageobjects/2_task/gg/SuccessPage.js";

const homePage = new HomePage();
const servicePage = new ServicePage();
const calendarPage = new CalendarPage();
const timePage = new TimePage();
const locationPage = new LocationPage();
const personalInfoPage = new PersonalInfoPage();
const successPage = new SuccessPage();


describe('CWB Smoke Test scenarios (Single Provider)', () => {

    beforeEach(() => {
        homePage.openUrl('https://admin:24e5c9cc8c438ef7acf4@testuser206.glossgenius-staging.com/');
    });


    it('"+" One service + Provider is not specified + Home location', async () => {

        await homePage.clickBookNowButton();

        homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url
        await servicePage.clickSelectServiceButton(0);
        await servicePage.clickBookServicesButton();
        
        let selectedDate = await calendarPage.selectDate(0);
        let shownApptDetails = await calendarPage.getApptDetails();
        expect(shownApptDetails).to.include(selectedDate);
        await calendarPage.clickNextButton();

        await timePage.selectTime();  // Selecting the first time slot in the list
        await timePage.clickNextButton();

        await locationPage.selectHomeLocation();
        await locationPage.enterStreet("Street");
        await locationPage.enterSuite("Suite");
        await locationPage.enterCity("City");
        await locationPage.enterZipCode("12345");
        await locationPage.openStateDropdown();
        await locationPage.selectState();
        await locationPage.clickNextButton();

        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("test/pronouns")
        await personalInfoPage.enterEmail();
        await personalInfoPage.enterPhoneNumber();
        await personalInfoPage.clickCancellationCheckbox();
        // await personalInfoPage.clickNextButton();

        await browser.pause(5000);

        
    });

});