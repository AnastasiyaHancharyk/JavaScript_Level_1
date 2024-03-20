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


    it('"+" Two services with two providers + Providers are  specified + Fixed location', async () => {

        await homePage.clickBookNowButton();

        homePage.openUrl('https://testuser206.glossgenius-staging.com/services'); // Приходится повторно открывать сайт на этой странице, иначе флоу работает некорректно из-за credentials в url
        await servicePage.clickProfessionalDropdown();
        await servicePage.selectProfessionalFromList(1);
        let selectedServiceOne = await servicePage.clickSelectServiceButton(0);
        await servicePage.clickProfessionalDropdown();
        await servicePage.selectProfessionalFromList(2);
        let selectedServiceTwo = await servicePage.clickSelectServiceButton(0);
        await servicePage.clickBookServicesButton();
        
        await msmpDateAndTimePage.clickDatePickerButton();
        await msmpDateAndTimePage.clickFirstAvailableDateOption();
        await msmpDateAndTimePage.clickSelectDateButton();
        await msmpDateAndTimePage.getSelectedTime();
        // await msmpDateAndTimePage.clickNextButton();
        
        // await locationPage.selectFixedLocation();
        // await locationPage.clickNextButton();

        // await personalInfoPage.enterFirstName("Test");
        // await personalInfoPage.enterLastName("Client");
        // await personalInfoPage.enterPronouns("some/test")
        // await personalInfoPage.enterEmail();
        // await personalInfoPage.enterPhoneNumber();
        // await personalInfoPage.clickCancellationCheckbox();
        // await personalInfoPage.clickNextButton();

        // let apptDetailsOnSuccessPage = await successPage.getApptDetails();
        // expect(apptDetailsOnSuccessPage).to.include(selectedServiceOne);
        // expect(apptDetailsOnSuccessPage).to.include(selectedServiceTwo);
        // expect(apptDetailsOnSuccessPage).to.include(selectedDate);
        // expect(apptDetailsOnSuccessPage).to.include(selectedTime);
        await browser.pause(5000);

        
    });

});