import BasePage from "../BasePage.js"

const basePage = new BasePage();

const BURGER_MENU_ICON = '//*[@id="react-burger-menu-btn"]';
const LOGOUT_BUTTON = '//*[@id="logout_sidebar_link"]';
const PRODUCT_PRICE = '//*[@class="inventory_item_price"]';
const PRODUCT_NAME = '//*[@class="inventory_item_name "]';

/**
    * Function to create a new array consisting of values 
 */
async function arrayFromValues(selector) {
    const numberOfProducts = await basePage.getNumberofElements(selector);
    let productNumber = 0;
    let newArray = [];
    while (productNumber < numberOfProducts) {
        let productName = await basePage.getTexts(selector, productNumber);
        newArray[productNumber] = productName;
        productNumber++;
    };
    console.log(newArray);
    return newArray;
};

async function sortingArraysOfNumbers(array, sortingType) {
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

async function sortingArraysOfStrings(array, sortingType) {
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
}

export default class ProductsPage extends BasePage {

    async openHamburgerMenu() {
        await this.click(BURGER_MENU_ICON);
    };

    async clickLogOutButton() {
        await this.click(LOGOUT_BUTTON);
    };


    /**
     * Function to get names of Products
     * @param {string} sortingType - 'reverse' (== .reverse() )  OR  'sort' (== .sort() )  OR  'original' (== no changes).
    */
    async getProductNames(sortingType) {
        let newArray = await arrayFromValues(PRODUCT_NAME);
        let x = await sortingArraysOfStrings(newArray, sortingType);
        return x;
    };

    async getProductPrices(sortingType) {
        const array = await arrayFromValues(PRODUCT_PRICE);
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].replace('$', '');
        }
        let newArray = array.map(str => {
            return parseFloat(str);
        });
        console.log(newArray);
        await sortingArraysOfNumbers(newArray, sortingType);
    };

}