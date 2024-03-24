/*
Single-Provider booking flow:
1. One service;
2. Provider is not specified;
3. Home location.
*/

import { expect } from 'chai';
import HomePage from "../../pageobjects/2_task/gg_cwb/HomePage.js";
import ServicePage from "../../pageobjects/2_task/gg_cwb/ServicePage.js";
import CalendarPage from "../../pageobjects/2_task/gg_cwb/CalendarPage.js";
import TimePage from "../../pageobjects/2_task/gg_cwb/TimePage.js";
import LocationPage from "../../pageobjects/2_task/gg_cwb/LocationPage.js";
import PersonalInfoPage from "../../pageobjects/2_task/gg_cwb/PersonalInfoPage.js";
import SuccessPage from "../../pageobjects/2_task/gg_cwb/SuccessPage.js";
import BasePage from '../../pageobjects/2_task/BasePage.js';

const homePage = new HomePage();
const servicePage = new ServicePage();
const calendarPage = new CalendarPage();
const timePage = new TimePage();
const locationPage = new LocationPage();
const personalInfoPage = new PersonalInfoPage();
const successPage = new SuccessPage();
const basePage = new BasePage();


describe('CWB Smoke Test scenarios (Single-Provider)', () => {

    beforeEach(() => {
        basePage.openUrl('https://admin:24e5c9cc8c438ef7acf4@testuser206.glossgenius-staging.com/');
    });

    // Function to verify that the current url inludes the expected path/page
    async function verifyCurrentUrlIncludesExpectedPage(expectedPage) {
        let currentPageUrl = await homePage.getPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };

    it('"+" One service + Provider is not specified + Home location', async () => {

        await homePage.clickBookNowButton();
        await homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url
        
        // Services page:
        await verifyCurrentUrlIncludesExpectedPage('/services');
        let selectedProvider = await servicePage.geProfessionalShownInDropdown(); // Get a default value ("Any Professional")from 
        let selectedService = await servicePage.clickSelectServiceButton(0);
        await servicePage.clickBookServicesButton();
        
        // Calendar page:
        // await verifyCurrentUrlIncludesExpectedPage('/book');
        let selectedDate = await calendarPage.selectDate(0); // Selecting today's day on the calendar
        let apptDetailsOnCalendarPage = await calendarPage.getApptDetails();
        expect(apptDetailsOnCalendarPage).to.include(selectedDate);
        expect(apptDetailsOnCalendarPage).to.include(selectedService);
        expect(apptDetailsOnCalendarPage).to.include(selectedProvider);
        await calendarPage.clickNextButton();

        // Time page:
        // await verifyCurrentUrlIncludesExpectedPage('/book?step=select-time');
        let selectedTime = await timePage.selectTime();  // Selecting the first time slot in the list
        let apptDetailsOnTimePage = await timePage.getApptDetails();
        expect(apptDetailsOnTimePage).to.include(selectedDate);
        expect(apptDetailsOnTimePage).to.include(selectedTime);
        expect(apptDetailsOnTimePage).to.include(selectedService);
        expect(apptDetailsOnCalendarPage).to.include(selectedProvider);
        await timePage.clickNextButton();

        // Location page:
        // await verifyCurrentUrlIncludesExpectedPage('/book?step=select-location');
        await locationPage.selectHomeLocation();
        await locationPage.enterStreet("Test Street");
        await locationPage.enterSuite("Test Suite");
        await locationPage.enterCity("Test City");
        await locationPage.enterZipCode("12345");
        await locationPage.openStateDropdown();
        await locationPage.selectState();
        let apptDetailsOnLocationPage = await timePage.getApptDetails();
        expect(apptDetailsOnLocationPage).to.include(selectedDate);
        expect(apptDetailsOnLocationPage).to.include(selectedTime);
        expect(apptDetailsOnLocationPage).to.include(selectedService);
        expect(apptDetailsOnCalendarPage).to.include(selectedProvider);
        await locationPage.clickNextButton();

        // Personal Info page:
        // await verifyCurrentUrlIncludesExpectedPage('/book?step=personal-info');
        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail("a.hancharyk+1@glossgenius.com"); // Для полей Email и Phone Number я написала отдельные функции, позволяющие вводить уникальные/рандомные значения ...        
        await personalInfoPage.enterPhoneNumber("9999999999");              // ... каждый раз, но для тестов решила пока оставить одни и те же данные (допутимо в рамках функциональности).
        await personalInfoPage.clickCancellationCheckbox();
        let apptDetailsOnPersonalInfoPage = await timePage.getApptDetails();
        expect(apptDetailsOnPersonalInfoPage).to.include(selectedDate);
        expect(apptDetailsOnPersonalInfoPage).to.include(selectedTime);
        expect(apptDetailsOnPersonalInfoPage).to.include(selectedService);
        expect(apptDetailsOnPersonalInfoPage).to.include(selectedProvider);
        await personalInfoPage.clickNextButton();

        // Success page:
        // await verifyCurrentUrlIncludesExpectedPage('/book?step=success');
        let apptDetailsOnSuccessPage = await successPage.getApptDetails();
        console.log("test123 " + apptDetailsOnSuccessPage)
        expect(apptDetailsOnSuccessPage).to.include(selectedDate);
        expect(apptDetailsOnSuccessPage).to.include(selectedTime);
        expect(apptDetailsOnSuccessPage).to.include(selectedService);     
        await browser.pause(5000);
        
    });

});