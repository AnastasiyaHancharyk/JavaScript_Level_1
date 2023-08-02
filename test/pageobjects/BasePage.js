module.exports = class Page {
    
    open () {
        return browser.url(`https://google.com`)
    }

    async existsAndContainsText (selector, text) {           // Проверка, что элемент существует и содержит определённый текст
        await expect(selector).toBeExisting()
        await expect(selector).toHaveTextContaining(text);
    }

    async searching (fieldSelector, buttonSelector, text) {    //
        await fieldSelector.setValue(text);
        await buttonSelector.click();
    }

    async newSearch (fieldSelector, buttonSelector, value) {
        await fieldSelector.setValue(value);
        await buttonSelector.click();
    }

    async getText (text, selector) {
        return text + await selector.getText();
    }

    async existsAndContainsAttribute (selector, attribute, value) {           // Проверка, что элемент существует и содержит определённый аттрибут
        await expect(selector).toBeExisting()
        await expect(selector).toHaveAttributeContaining(attribute, value);
    }

    async click (selector) {
        await selector.click();
    }

    async selectingParameters (parameterSelector, ) {   
        await parameterSelector.scrollIntoView({ block: "end" });
        await parameterSelector.click();     
    }

    async dragAndDropElement (elementSelector, targetSelector) {
        await elementSelector.dragAndDrop(targetSelector);
    }

    async getAttribute (selector, attributeName) {
        return await selector.getAttribute(attributeName);
    }

    async expectToHaveUrlContaining (someUrl) {
        await expect(browser).toHaveUrlContaining(someUrl);
    }

    async waitForExist (selector, parameters) {
        await selector.waitForExist(parameters);
    }



}