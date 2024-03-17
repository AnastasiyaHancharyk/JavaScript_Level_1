/*
Multi-Provider booking flow:
1. Two services with two providers;
2. Providers are specified;
3. Fixed location;
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


describe('CWB Smoke Test scenarios (Multi-Provider)', () => {

    beforeEach(() => {
        homePage.openUrl('https://admin:24e5c9cc8c438ef7acf4@testuser206.glossgenius-staging.com/');
    });


    it('"+" Two services with two providers + Providers are  specified + Fixed location', async () => {

        await homePage.clickBookNowButton();

        homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url
        let selectedService = await servicePage.clickSelectServiceButton(0);
        await servicePage.clickBookServicesButton();
        
        let selectedDate = await calendarPage.selectDate(0); // Selecting today's day on the calendar
        let ApptDetailsOnCalendarPage = await calendarPage.getApptDetails();
        expect(ApptDetailsOnCalendarPage).to.include(selectedService);
        expect(ApptDetailsOnCalendarPage).to.include(selectedDate);
        await calendarPage.clickNextButton();

        let selectedTime = await timePage.selectTime();  // Selecting the first time slot in the list
        let ApptDetailsOnTimePage = await timePage.getApptDetails();
        expect(ApptDetailsOnTimePage).to.include(selectedTime);
        await timePage.clickNextButton();

        await locationPage.selectHomeLocation();
        await locationPage.enterStreet("Test Street");
        await locationPage.enterSuite("Test Suite");
        await locationPage.enterCity("Test City");
        await locationPage.enterZipCode("12345");
        await locationPage.openStateDropdown();
        await locationPage.selectState();
        await locationPage.clickNextButton();

        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail();
        await personalInfoPage.enterPhoneNumber();
        await personalInfoPage.clickCancellationCheckbox();
        await personalInfoPage.clickNextButton();

        let ApptDetailsOnSuccessPage = await successPage.getApptDetails();
        expect(ApptDetailsOnSuccessPage).to.include(selectedService);
        expect(ApptDetailsOnSuccessPage).to.include(selectedDate);
        expect(ApptDetailsOnSuccessPage).to.include(selectedTime);
        await browser.pause(5000);

        
    });

});