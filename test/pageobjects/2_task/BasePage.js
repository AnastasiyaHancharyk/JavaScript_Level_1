export default class BasePage {

    openUrl(url) {
        return browser.url(url)
    };

    async setValue(selector, value) {
        await $(selector).waitForExist({ timeout: 5000 });
        await $(selector).clearValue();
        await $(selector).setValue(value);
    };

    async click(selector) {
        await $(selector).waitForClickable({ timeout: 5000 });
        await $(selector).click();
    };

    async clickItemNumber(selector, numberOfElement) {
        await $$(selector)[numberOfElement].click();
    };


    // Function for selecting an element corresponding to the desired value
    async clickByText(selector, value) {
        let numberOfElements = await this.getNumberOfElements(selector);
        for (let numberOfElement = 0; numberOfElement <= numberOfElements; numberOfElement++) {
            let text = await this.getTexts(selector, numberOfElement);
            if (text === value) {
                await $$(selector)[numberOfElement].waitForClickable({ timeout: 5000 });
                await $$(selector)[numberOfElement].click();
                break;
            };
        };
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

    async selectByVisibleText(selector, text) {
        await $(selector).selectByVisibleText(text);
    }

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

    // Function to remove a value that is present in all elements
    async removeCommonValueFromAllArrayElements(array, valueToRemove) {
        let newArray = array;
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].replace(valueToRemove, '');
        }
        return newArray;
    };

    // Function to change an array from string to number
    async changeArrayStringToNumber(array) {
        let newArray = array.map(str => {
            return parseFloat(str);
        });
        return newArray;
    };

}