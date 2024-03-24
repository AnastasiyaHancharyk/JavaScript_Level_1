/*
Multi-Provider booking flow:
1. Two services with two providers;
2. Providers are specified;
3. Fixed location;
*/

import { expect } from 'chai';
import HomePage from "../../pageobjects/2_task/gg_cwb/HomePage.js";
import ServicePage from "../../pageobjects/2_task/gg_cwb/ServicePage.js";
import LocationPage from "../../pageobjects/2_task/gg_cwb/LocationPage.js";
import PersonalInfoPage from "../../pageobjects/2_task/gg_cwb/PersonalInfoPage.js";
import SuccessPage from "../../pageobjects/2_task/gg_cwb/SuccessPage.js";
import MsmpDateAndTimePage from '../../pageobjects/2_task/gg_cwb/MsmpDateAndTimesPage.js';
import BasePage from '../../pageobjects/2_task/BasePage.js';

const homePage = new HomePage();
const servicePage = new ServicePage();
const locationPage = new LocationPage();
const personalInfoPage = new PersonalInfoPage();
const successPage = new SuccessPage();
const msmpDateAndTimePage = new MsmpDateAndTimePage();
const basePage = new BasePage();

describe('CWB Smoke Test scenarios (Multi-Provider)', () => {

    beforeEach(() => {
        basePage.openUrl('https://admin:24e5c9cc8c438ef7acf4@testuser206.glossgenius-staging.com/');
    });

    // Function to verify that the current url inludes the expected path/page
    async function verifyCurrentUrlIncludesExpectedPage(expectedPage) {
        let currentPageUrl = await homePage.getPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };


    it('"+" Two services with two providers + Providers are  specified + Fixed location', async () => {

        await homePage.clickBookNowButton();
        await homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url

        // Services page:
        await verifyCurrentUrlIncludesExpectedPage('/services');
        await servicePage.clickProfessionalDropdown();
        let providerOne = await servicePage.selectProfessionalFromList(1); // Get the first provider's name
        let selectedServiceOne = await servicePage.clickSelectServiceButton(0); // Get the first service's name
        await servicePage.clickProfessionalDropdown();
        let providerTwo = await servicePage.selectProfessionalFromList(2); // Get the second provider's name
        let selectedServiceTwo = await servicePage.clickSelectServiceButton(0); // Get the second service's name
        await servicePage.clickBookServicesButton();

        // MSMP Date and Time page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=selectDateAndTimes');
        let selectedDate = await msmpDateAndTimePage.getDateDisplayedInDatePicker(); // Get the selected date
        let startTime = await msmpDateAndTimePage.getSelectedTime();
        let apptOneStartTime = startTime.startTimeOne; // Get the start time of the first appointment
        let apptTwoStartTime = startTime.startTimeTwo; // Get the start time of the second appointment
        await msmpDateAndTimePage.clickNextButton();

        // Location page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=selectLocation');
        let apptDetailsOnLocationPage = await locationPage.getApptDetails(); // Get the appointment details on the Location page
        expect(apptDetailsOnLocationPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • " + providerOne);
        expect(apptDetailsOnLocationPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • " + providerTwo);
        let fixedAddress = await locationPage.selectFixedLocation();
        await locationPage.clickNextButton();

        // Personal Info page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=clientInformation');
        let apptDetailsOnPersonalInfoPage = await personalInfoPage.getApptDetails(); // Get the appointment details on the Personal Info page
        expect(apptDetailsOnPersonalInfoPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • " + providerOne);
        expect(apptDetailsOnPersonalInfoPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • " + providerTwo);
        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail("a.hancharyk+1@glossgenius.com"); // Для полей Email и Phone Number я написала отдельные функции, позволяющие вводить уникальные/рандомные значения ...        
        await personalInfoPage.enterPhoneNumber("9999999999");              // ... каждый раз, но для тестов решила пока оставить одни и те же данные (допутимо в рамках функциональности).
        await personalInfoPage.clickCancellationCheckbox();                 
        await personalInfoPage.clickNextButton();

        // Success page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=success');
        let apptDetailsOnSuccessPage = await successPage.getApptDetails();
        // Check the first appointment's details:
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(selectedDate.DateWithYear + " - " + apptOneStartTime);
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(selectedServiceOne + " with " + providerOne);
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(fixedAddress);
        // Check the second appointment's details:
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(selectedDate.DateWithYear + " - " + apptTwoStartTime);
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(selectedServiceTwo + " with " + providerTwo);
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(fixedAddress);

        await browser.pause(3000);

    });

});