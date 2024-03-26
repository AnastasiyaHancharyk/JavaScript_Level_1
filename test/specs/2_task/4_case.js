/*
Multi-Provider booking flow:
1. Go to core-web-booking;
   AND verify the url;
   AND click the "Book Now"
2. On the Services page, verify the url
   AND select two services with two different providers 
   AND get the names of each service and provider
   AND click the "Book" button;
3. On the Date/Time page, verify the url 
   AND get the date/time values
   AND click the "Next" button;
4. On the Location page, verify the url
   AND select Fixed location 
   AND check the data (service name, provider, date, time) in details for each appt
   AND click the "Next" button; 
5. On the Personal Info page, verify the url
   AND fill in the fields with valid data
   AND check the policy checkbox
   AND check the data (service name, provider, date, time) in details for each appt
   AND click the "Next" button; 
6. On the Success Page  verify the url
   AND check the data (service name, provider, date, time) in details for each appt
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
        let currentPageUrl = await basePage.getCurrentPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };


    it('1. Two services with two providers + Providers are  specified + Fixed location', async () => {

        await verifyCurrentUrlIncludesExpectedPage('glossgenius-staging.com');
        await homePage.clickBookNowButton();
        await basePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url

        // Services page:
        await verifyCurrentUrlIncludesExpectedPage('/services');
        await servicePage.clickProfessionalDropdown();
        let providerOne = await servicePage.getProfessionalName(1);     // Get name of the first provider
        await servicePage.selectProfessionalFromList(1);                // Select the first provider
        let selectedServiceOne = await servicePage.getServiceName(0);   // Get the name of the first service
        await servicePage.clickSelectServiceButton(0);                  // Select the first service
        await servicePage.clickProfessionalDropdown();
        let providerTwo = await servicePage.getProfessionalName(2);     // Get name of the second provider 
        await servicePage.selectProfessionalFromList(2);                // Select the second provider
        let selectedServiceTwo = await servicePage.getServiceName(1);   // Get the name of the second service
        await servicePage.clickSelectServiceButton(1);                  // Select the second service
        await servicePage.clickBookServicesButton();

        // MSMP Date and Time page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=selectDateAndTimes');
        let selectedDate = await msmpDateAndTimePage.getDateDisplayedInDatePicker(); // Get the selected date
        let startTime = await msmpDateAndTimePage.getSelectedTime();                 // Get the selected start time of two appts
        let apptOneStartTime = startTime.startTimeOne;                               // Get the start time of the first appointment
        let apptTwoStartTime = startTime.startTimeTwo;                               // Get the start time of the second appointment
        await msmpDateAndTimePage.clickNextButton();

        // Location page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=selectLocation');
        let fixedAddress = await locationPage.getFixedLocationAddress(); // Get Fixed Location's address
        await locationPage.selectFixedLocation();    
        let apptDetailsOnLocationPage = await locationPage.getApptDetails();
        expect(apptDetailsOnLocationPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • " + providerOne);
        expect(apptDetailsOnLocationPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • " + providerTwo);
        await locationPage.clickNextButton();

        // Personal Info page:
        await verifyCurrentUrlIncludesExpectedPage('/multi-book?step=clientInformation');
        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail("a.hancharyk+1@glossgenius.com"); // Для полей Email и Phone Number я написала отдельные функции, позволяющие вводить уникальные/рандомные значения ...        
        await personalInfoPage.enterPhoneNumber("9999999999");              // ... каждый раз, но для тестов решила пока оставить одни и те же данные (допутимо в рамках функциональности).
        await personalInfoPage.clickCancellationCheckbox();   
        let apptDetailsOnPersonalInfoPage = await personalInfoPage.getApptDetails();
        expect(apptDetailsOnPersonalInfoPage.apptDetailsOne).to.include(selectedDate.DateWithoutYear + " - " + apptOneStartTime + " • " + selectedServiceOne + " • " + providerOne);
        expect(apptDetailsOnPersonalInfoPage.apptDetailsTwo).to.include(selectedDate.DateWithoutYear + " - " + apptTwoStartTime + " • " + selectedServiceTwo + " • " + providerTwo);              
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

    });

});