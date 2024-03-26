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

    async clickWithoutWaiting(selector) {
        await $(selector).click();
    };

    async clickItemByNumber(selector, numberOfElement) {
        await $$(selector)[numberOfElement].click();
    };


    // Function to select an element corresponding to a desired value
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
        await browser.pause(2000);
        let url = await browser.getUrl();
        return url;
    };

    async getNumberOfElements(selector) {
        const numberOfElements = await $$(selector).length;
        return numberOfElements;
    };

    // Function to get a text if there are several element corresponding to one selector
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

    // Function to select a specific day from today
    async selectDayFromToday(numberOfDaysFromToday, daySelector, monthSelector, nextMonthSelector) {
        let date = new Date();
        // getDate() returns the day of the month for this date according to local time
        // setDate() changes the day of the month for this date according to local time
        date.setDate(date.getDate() + numberOfDaysFromToday);  // Поменяли значение date на "Сегодняшняя дата + количество дней"
        let dayInt = date.getDate(); // Day as int
        let dayString = dayInt.toString(); // Day as string
        let monthString = date.toLocaleString('eng', { month: 'long' }); // Month's full name
        let fullYear = date.getFullYear();  // Full year
        let currentMonthName = await this.getText(monthSelector); // Get current month shown in the calendar
        let monthAndYear = monthString + " " + fullYear;

        let dateToBeDisplayed = monthString + ' ' + dayInt; // Дата, которая должна по итогу отображаться

        if (currentMonthName != monthAndYear) {
            await this.click(nextMonthSelector);
            await this.selectDayFromToday(numberOfDaysFromToday, daySelector, monthSelector, nextMonthSelector);
        } else {
            await this.clickByText(daySelector, dayString);
        };

        return dateToBeDisplayed;
    };

    //Function to get a random number from range
    async randomNumberFromRange(maximumNumber) {
        return Math.floor(Math.random() * maximumNumber);
    };

    // Function to return a random phone number
    async randomPhoneNumber() {
        let numbers = ['2', '3', '4', '5', '6', '7', '8', '9'];
        let phoneNumber = '';
        for (let step = 0; step <= 9; step++) {
            let randomNumber = Math.floor(Math.random() * numbers.length);
            phoneNumber += numbers[randomNumber];
        };
        return phoneNumber;
    };

    // Function to create an email address
    async emailAddress() {
        let date = new Date();
        let emailAddress = "test" + date.getDate()
            + (date.getMonth() + 1)
            + date.getFullYear()
            + date.getHours()
            + date.getMinutes()
            + date.getSeconds()
            + "@gg-test.com"
        return emailAddress;
    };

};
