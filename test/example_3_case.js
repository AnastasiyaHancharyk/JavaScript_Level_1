const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities");
var should = require("chai").should();


// The describe block
describe("Add another todo tests", function () {

    // username
    const USERNAME = ltCapabilities.capabilities["LT:Options"].username;

    // key
    const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

    // host
    const GRID_HOST = "hub.lambdatest.com/wd/hub";

    // Grid URL
    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

    browsers = [
        { browser: "Chrome", bVersion: "116.0", os: "Windows 10" },
        { browser: "Firefox", bVersion: "116.0", os: "Windows 10" },
        { browser: "MicrosoftEdge", bVersion: "113.0", os: "Windows 10" }
    ];

    browsers.forEach(function ({ browser, bVersion, os }) {



        // The it block
        it(`Successfully adds a todo for browser ${browser}, ${bVersion}, ${os}`, async function () {


            // Setting the browsers and platforms for each loop
            ltCapabilities.capabilities["LT:Options"].platformName = os;
            ltCapabilities.capabilities.browserName = browser;
            ltCapabilities.capabilities.browserVersion = bVersion;
            ltCapabilities.capabilities["LT:Options"].name = this.test.title;


            // Launch the browser
            let driver = await new Builder()
                .usingServer(gridUrl)
                .withCapabilities(ltCapabilities.capabilities)
                .build();


            // Navigate to our application
            await driver.get("https://lambdatest.github.io/sample-todo-app/");

            // Add a todo
            await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

            // Assert
            let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
                return value;
            });

            // Assert using Chai assertion should
            todoText.should.equal("Learn Selenium");

            // Quit the browser
            await driver.quit();

        });

    });

});







