module.exports = class Page {
    
    open () {
        return browser.url(`https://google.com`)
    }

    async ExistsAndContainsText (locator, text) {
        await expect(locator).toBeExisting()
        await expect(locator).toHaveTextContaining(text);
    }

    async Searching (textLocator, buttonLocator, text) {
        await textLocator.setValue(text);
        await buttonLocator.click();
    }
}