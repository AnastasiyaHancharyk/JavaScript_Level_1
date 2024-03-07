// https://anastasiyatest.glossgenius.com/

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


describe('CWB Smoke Test scenarios', () => {

    beforeEach(() => {
        homePage.openUrl('https://anastasiyatest.glossgenius.com/');
    });


    it('"+" Book 1 service', async () => {
        await homePage.clickBookNowButton();
        await servicePage.clickSelectServiceButton(1);
        await servicePage.clickBookServicesButton();
        await calendarPage.selectDate(4);
        await browser.pause(5000);

        
    });



    // it('Simple Date Picker', async () => {
    //     await datepicker.selectDate(15);
    //     await browser.pause(5000);

    // });

});