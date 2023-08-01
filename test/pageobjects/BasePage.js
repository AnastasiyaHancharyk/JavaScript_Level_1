module.exports = class Page {
    
    open () {
        return browser.url(`https://google.com`)
    }

    async existsAndContainsText (locator, text) {           // Проверка, что элемент существует и содержит определённый текст
        await expect(locator).toBeExisting()
        await expect(locator).toHaveTextContaining(text);
    }

    async searching (fieldLocator, buttonLocator, text) {    //
        await fieldLocator.setValue(text);
        await buttonLocator.click();
    }

    async newSearch (fieldLocator, buttonLocator, value) {
        await fieldLocator.setValue(value);
        await buttonLocator.click();
    }

    async resultStatistic (locator) {
        return "Number of results: " + await locator.getText();
    }

    async existsAndContainsAttribute (locator, attribute, value) {           // Проверка, что элемент существует и содержит определённый аттрибут
        await expect(locator).toBeExisting()
        await expect(locator).toHaveAttributeContaining(attribute, value);
    }

    async buttonClick (buttonLocator) {
        await buttonLocator.click();
    }

    async selectingParameters (parameterLocator, ) {   
        await parameterLocator.scrollIntoView({ block: "end" });
        await parameterLocator.click();     
    }

    async openTheLink (linkLocator) {
        await linkLocator.click();
    }

    async dragAndDropElement (elementLocator, targetLocator) {
        await elementLocator.dragAndDrop(targetLocator);
    }

    async getAttribute (locator, attributeName) {
        return await locator.getAttribute(attributeName);
    }

    async expectToHaveUrlContaining (someUrl) {
        await expect(browser).toHaveUrlContaining(someUrl);
    }



}