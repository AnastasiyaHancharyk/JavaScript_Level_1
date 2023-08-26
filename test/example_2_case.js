const { Builder, By, Key } = require("selenium-webdriver");
const ltCapabilities = require("../capabilities");
var should = require("chai").should();


// The describe block
describe("Add another todo tests", function () {

    var driver;

    // username
    const USERNAME = ltCapabilities.capabilities["LT:Options"].username;

    // key
    const KEY = ltCapabilities.capabilities["LT:Options"].accessKey;

    // host
    const GRID_HOST = "hub.lambdatest.com/wd/hub";

    const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

    beforeEach(function () {
        ltCapabilities.capabilities["LT:Options"].name = this.currentTest.title;
        driver = new Builder()
            .usingServer(gridUrl)
            .withCapabilities(ltCapabilities.capabilities)
            .build();

    });

    afterEach(async function () {

        await driver.quit();

    });


    // The it block
    it("Successfully adds another todo to the application", async function () {


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

    });

    it("Adding a new test for reporting", async function () {

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

    });

});







