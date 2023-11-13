export default class BasePage {

    openUrl(url) {
        return browser.url(url)
    };

    async setValue(selector, value) {
        await $(selector).clearValue();
        await $(selector).setValue(value);
    };

    async click(selector) {
        await $(selector).click();
    };

    async clickNumber(selector, numberOfElement) {
        await $$(selector)[numberOfElement].click();
    };

    async getAttribute(selector, attributeName) {
        await $(selector).getAttribute(attributeName);
    };

    async getCSSProperty(selector, cssProperty) {
        await $(selector).getCSSProperty(cssProperty);
    };

    async getProperty(selector, property) {
        await $(selector).getProperty(property);
    };

    async getText(selector) {
        let text = await $(selector).getText();
        return text;
    };

    async getValue(selector) {
        await $(selector).getValue();
    };

    async getCurrentPageUrl() {
        let url = await browser.getUrl();
        return url;
    };

    async getNumberOfElements(selector) {
        const numberOfElements = await $$(selector).length;
        return numberOfElements;
    };

    async getTexts(selector, numberOfElement) {
        let texts = await $$(selector)[numberOfElement].getText();
        return texts;
    };

    // Function to create a new array
    async createArrayFromValues(selector) {
        const numberOfItems = await this.getNumberOfElements(selector);
        let elementNumber = 0;
        let newArray = [];
        while (elementNumber < numberOfItems) {
            let elementName = await this.getTexts(selector, elementNumber);
            newArray[elementNumber] = elementName;
            elementNumber++;
        };
        console.log(newArray);
        return newArray;
    };

    // Function to sort an array of numbers
    async sortingArrayOfNumbers(array, sortingType) {
        let newArray = array;
        if (sortingType === 'reverse') {
            newArray.sort(function (a, b) {
                return b - a;
            });
        } else if (sortingType === 'sort') {
            newArray.sort(function (a, b) {
                return a - b;
            });
        } else if (sortingType === 'original') {
            newArray;
        };
        console.log(newArray);
        return newArray;
    };

    // Function to sort an array of strings
    async sortingArrayOfStrings(array, sortingType) {
        let newArray = array;
        if (sortingType === 'reverse') {
            newArray.reverse();
        } else if (sortingType === 'sort') {
            newArray.sort();
        } else if (sortingType === 'original') {
            newArray;
        };
        console.log(newArray);
        return newArray;
    };

    // Function to change a price from string to number
    async changeArrayStringToNumber(array, replacedValue) {
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].replace(replacedValue, '');
        }
        let newArray = array.map(str => {
            return parseFloat(str);
        });
        return newArray;
    };

}