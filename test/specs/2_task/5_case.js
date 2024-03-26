/*
Single-Provider booking flow:
1. Go to core-web-booking;
   AND verify the url;
   AND click the "Book Now"
2. On the Services page, verify the url
   AND select one services without specifying provider 
   AND get the name of the service and a default value ("Any Professional") in the dropdown
   AND click the "Book" button;
3. On the Calendar page, verify the url 
   AND select today's date
   AND check the data (service name, provider, date) in details
   AND click the "Next" button;
4. On the Time page, verify the url 
   AND select the first time slot
   AND check the data (service name, provider, date, time) in details
   AND click the "Next" button;
5. On the Location page, verify the url
   AND select House Call location 
   AND fill in the address fields with valid data
   AND select a state in the state dropdown
   AND check the data (service name, provider, date, time) in details
   AND click the "Next" button; 
6. On the Personal Info page, verify the url
   AND fill in the fields with valid data
   AND check the policy checkbox
   AND check the data (service name, provider, date, time) in details
   AND click the "Next" button; 
7. On the Success Page  verify the url
   AND check the data (service name, provider, date, time) in details
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
        let currentPageUrl = await basePage.getCurrentPageUrl();
        expect(currentPageUrl).to.include(expectedPage);
    };

    it('1. One service + Provider is not specified + Home location', async () => {

        await verifyCurrentUrlIncludesExpectedPage('glossgenius-staging.com');
        await homePage.clickBookNowButton();
        await basePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url
        
        // Services page:
        await verifyCurrentUrlIncludesExpectedPage('/services');
        let selectedProvider = await servicePage.getProfessionalShownInDropdown(); // Get a default value ("Any Professional") in the dropdown
        let selectedService = await servicePage.getServiceName(0); // Get the name of the service (by its order number)
        await servicePage.clickSelectServiceButton(0); // Select a service (by its order number)
        await servicePage.clickBookServicesButton();
        
        // Calendar page:
        await verifyCurrentUrlIncludesExpectedPage('/book');
        let selectedDate = await calendarPage.selectDate(0); // Select today's date in the calendar
        let apptDetailsOnCalendarPage = await calendarPage.getApptDetails();
        expect(apptDetailsOnCalendarPage).to.include(selectedDate + " • " + selectedService + " • " + selectedProvider);
        await calendarPage.clickNextButton();

        // Time page:
        await verifyCurrentUrlIncludesExpectedPage('/book?step=select-time');
        let selectedTime = await timePage.getTime();     // Get the value of the first time slot in the list
        await timePage.selectTime();                     // Select the first time slot in the list
        let apptDetailsOnTimePage = await timePage.getApptDetails();
        expect(apptDetailsOnTimePage).to.include(selectedDate + " - " + selectedTime + " • " + selectedService + " • " + selectedProvider);
        await timePage.clickNextButton();

        // Location page:
        await verifyCurrentUrlIncludesExpectedPage('/book?step=select-location');
        await locationPage.selectHomeLocation();
        await locationPage.enterStreet("Test Street");
        await locationPage.enterSuite("Test Suite");
        await locationPage.enterCity("Test City");
        await locationPage.enterZipCode("12345");
        await locationPage.openStateDropdown();
        await locationPage.selectState(); // Select a random state from the list
        let apptDetailsOnLocationPage = await locationPage.getApptDetails();
        expect(apptDetailsOnLocationPage).to.include(selectedDate + " - " + selectedTime + " • " + selectedService + " • " + selectedProvider);
        await locationPage.clickNextButton();

        // Personal Info page:
        await verifyCurrentUrlIncludesExpectedPage('/book?step=personal-info');
        await personalInfoPage.enterFirstName("Test");
        await personalInfoPage.enterLastName("Client");
        await personalInfoPage.enterPronouns("some/test")
        await personalInfoPage.enterEmail("a.hancharyk+1@glossgenius.com"); // Для полей Email и Phone Number я написала отдельные функции, позволяющие каждый раз вводить уникальные/рандомные значения, ...        
        await personalInfoPage.enterPhoneNumber("9999999999");              // ... но для тестов решила пока оставить одни и те же данные (допутимо в рамках функциональности).
        await personalInfoPage.clickCancellationCheckbox();
        let apptDetailsOnPersonalInfoPage = await personalInfoPage.getApptDetails();
        expect(apptDetailsOnPersonalInfoPage).to.include(selectedDate + " - " + selectedTime + " • " + selectedService + " • " + selectedProvider);
        await personalInfoPage.clickNextButton();

        // Success page:
        await verifyCurrentUrlIncludesExpectedPage('/book?step=success');
        let apptDetailsOnSuccessPage = await successPage.getApptDetails();
        expect(apptDetailsOnSuccessPage).to.include(selectedDate);
        expect(apptDetailsOnSuccessPage).to.include(selectedTime);
        expect(apptDetailsOnSuccessPage).to.include(selectedService);   
        /* 
        Для "Provider" и "Location" не писала проверки на Success странице, так как в случае с "Provider" у нас отображается один из доступных провайдеров (не дефолтное значение "Any Professional"), 
        а в "Location" вместо полного названия штата (как в dropdown) отображается его аббревиатура. Я имею представление, как это всё можно оформить, чтобы включить в проверки, но для 
        экономии времени решила пока это не трогать. Но если будет необходимо, могу этим заняться.
        */
        
    });

});