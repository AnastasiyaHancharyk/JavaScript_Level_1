/*
Multi-Provider booking flow:
1. Two services with two providers;
2. Providers are specified;
3. Fixed location;
*/

import { expect } from 'chai';
import HomePage from "../../pageobjects/2_task/gg/HomePage.js";
import ServicePage from "../../pageobjects/2_task/gg/ServicePage.js";
import LocationPage from "../../pageobjects/2_task/gg/LocationPage.js";
import PersonalInfoPage from "../../pageobjects/2_task/gg/PersonalInfoPage.js";
import SuccessPage from "../../pageobjects/2_task/gg/SuccessPage.js";
import MsmpDateAndTimePage from '../../pageobjects/2_task/gg/MsmpDateAndTimesPage.js';

const homePage = new HomePage();
const servicePage = new ServicePage();
const locationPage = new LocationPage();
const personalInfoPage = new PersonalInfoPage();
const successPage = new SuccessPage();
const msmpDateAndTimePage = new MsmpDateAndTimePage();

describe('CWB Smoke Test scenarios (Multi-Provider)', () => {

    beforeEach(() => {
        homePage.openUrl('https://admin:24e5c9cc8c438ef7acf4@testuser206.glossgenius-staging.com/');
    });

    async function verifyCurrentUrlToIncludeExpectedPath(expectedPage) {
        let currentPageUrl = await homePage.getPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };


    it('"+" Two services with two providers + Providers are  specified + Fixed location', async () => {

        await homePage.clickBookNowButton();
        await homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url

        await verifyCurrentUrlToIncludeExpectedPath('/services');
        await servicePage.clickProfessionalDropdown();
        let providerOne = await servicePage.selectProfessionalFromList(1); // Get the first provider's name
        let selectedServiceOne = await servicePage.clickSelectServiceButton(0); // Get the first service's name
        await servicePage.clickProfessionalDropdown();
        let providerTwo = await servicePage.selectProfessionalFromList(2); // Get the second provider's name
        let selectedServiceTwo = await servicePage.clickSelectServiceButton(0); // Get the second service's name
        await servicePage.clickBookServicesButton();
        
        await verifyCurrentUrlToIncludeExpectedPath('/multi-book?step=selectDateAndTimes');
        let selectedDate = await msmpDateAndTimePage.getDateDisplayedInDatePicker(); // Get the selected date
        let startTime = await msmpDateAndTimePage.getSelectedTime();
        let apptOneStartTime = startTime.startTimeOne; // Get start time of the first appointment
        let apptTwoStartTime = startTime.startTimeTwo; // Get start time of the second appointment
        await msmpDateAndTimePage.clickNextButton();

        await verifyCurrentUrlToIncludeExpectedPath('/multi-book?step=selectLocation');
        let apptDetailsOnLocationPage = await locationPage.getApptDetails(); // Get appointment details on the Location page
        expect(apptDetailsOnLocationPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • "  + providerOne);
        expect(apptDetailsOnLocationPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • "  + providerTwo);
        let fixedAddress = await locationPage.selectFixedLocation();
        await locationPage.clickNextButton();

        await verifyCurrentUrlToIncludeExpectedPath('/multi-book?step=clientInformation');
        let apptDetailsOnPersonalInfoPage = await personalInfoPage.getApptDetails(); // Get appointment details on the Personal Info page
        expect(apptDetailsOnPersonalInfoPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • "  + providerOne);
        expect(apptDetailsOnPersonalInfoPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • "  + providerTwo);
        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail("a.hancharyk+1@glossgenius.com");
        await personalInfoPage.enterPhoneNumber("9999999999");
        await personalInfoPage.clickCancellationCheckbox();
        await personalInfoPage.clickNextButton();

        await verifyCurrentUrlToIncludeExpectedPath('/multi-book?step=success');       
        let apptDetailsOnSuccessPage = await successPage.getApptDetails();
        // Check the first appointment's details:
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(selectedDate.DateWithYear + " - " + apptOneStartTime);
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(selectedServiceOne + " with "  + providerOne);
        expect(apptDetailsOnSuccessPage.apptDetailsOne).to.include(fixedAddress);
        // Check the second appointment's details:
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(selectedDate.DateWithYear + " - " + apptTwoStartTime);
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(selectedServiceTwo + " with "  + providerTwo);
        expect(apptDetailsOnSuccessPage.apptDetailsTwo).to.include(fixedAddress);
        await browser.pause(3000);

        
    });

});