const { Builder, By, Key } = require("selenium-webdriver");
var should = require("chai").should();


// The describe block
describe("Add todo tests", function () {

    // The it block
    it("Successfully adds a todo to the application", async function () {


        // Launch the browser
        let driver = await new Builder().forBrowser("chrome").build();

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

        // Close the browser
        await driver.quit();


    });

});







