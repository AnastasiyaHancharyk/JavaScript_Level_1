module.exports = class Page {
    
    open () {
        return browser.url(`https://google.com`)
    }



    //  Ввод текста и нажатие  кнопки
    async setValueAndClick (fieldSelector, buttonSelector, text) {    
        await fieldSelector.setValue(text);
        await buttonSelector.click();
    }

    async getText (selector) {           
        return await selector.getText();
    }

    async expectToHaveAttributeContaining (selector, attribute, value) {           
        await expect(selector).toHaveAttributeContaining(attribute, value);
    }

    async click (selector) {
        await selector.click();
    }

    // Прокрутить страницу до элемента и нажать на него
    async scrollIntoViewAndClick (selector) {   
        await selector.scrollIntoView({ block: "end" });
        await selector.click();     
    }

    async getAttribute (selector, attributeName) {
        return await selector.getAttribute(attributeName);
    }

    async expectToHaveUrlContaining (someUrl) {
        await expect(browser).toHaveUrlContaining(someUrl);
    }
 
    async waitForExistAndEnabled (selector, parameters) {
        await selector.waitForExist(parameters);
        await selector.waitForEnabled(parameters);
    }

    async addValue (selector, value) {
        await selector.addValue(value);
    }

    async valueIsEqual (selector, element) {
        await selector.isEqual(element);
    }

    async expectToHaveTextContaining (selector, text) {          
        await expect(selector).toBeExisting()
        await expect(selector).toHaveTextContaining(text);
    }


}