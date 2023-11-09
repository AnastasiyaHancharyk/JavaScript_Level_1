import BasePage from "../BasePage.js"

const basePage = new BasePage();

const BURGER_MENU_ICON = '//*[@id="react-burger-menu-btn"]';
const LOGOUT_BUTTON = '//*[@id="logout_sidebar_link"]';
const PRODUCT_PRICE = '//*[@class="inventory_item_price"]';
const PRODUCT_NAME = '//*[@class="inventory_item_name "]';
const PRODUCT_SORT_DROPDOWN = '//*[@class="product_sort_container"]';
const SORT_BY_NAME_A_TO_Z = '//*[@value="az"]';
const SORT_BY_NAME_Z_TO_A = '//*[@value="za"]';
const SORT_BY_PRICE_LOW_TO_HIGH = '//*[@value="lohi"]';
const SORT_BY_PRICE_HUGH_TO_LOW = '//*[@value="hilo"]';
const ADD_REMOVE_BUTTON = '//*[contains(@class, "btn")]';
const SHOPPING_CART_ICON = '//*[@class="shopping_cart_badge"]';



// Function to create a new array
async function arrayFromValues(selector) {
    const numberOfItems = await basePage.getNumberofElements(selector);
    let elementNumber = 0;
    let newArray = [];
    while (elementNumber < numberOfItems) {
        let elementName = await basePage.getTexts(selector, elementNumber);
        newArray[elementNumber] = elementName;
        elementNumber++;
    };
    console.log(newArray);
    return newArray;
};

// Function to sort an array of numbers
async function sortingArrayOfNumbers(array, sortingType) {
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
async function sortingArrayOfStrings(array, sortingType) {
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
async function changeStringToNumber(array) {
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].replace('$', '');
    }
    let newArray = array.map(str => {
        return parseFloat(str);
    });
    return newArray;
};

export default class ProductsPage extends BasePage {

    async openHamburgerMenu() {
        await this.click(BURGER_MENU_ICON);
    };

    async clickLogOutButton() {
        await this.click(LOGOUT_BUTTON);
    };

    async clickProductButton() {
        await this.click(ADD_REMOVE_BUTTON);
    };

    async getProductButtonText() {
        let text = await this.getText(ADD_REMOVE_BUTTON);
        return text;
    };


    /**
     * Function to get products' names
     * @param {string} sortingType - 'reverse' (== .reverse() )  OR  'sort' (== .sort() )  OR  'original' (== no changes).
    */
    async getProductNames(sortingType) {
        let newArray = await arrayFromValues(PRODUCT_NAME);
        let x = await sortingArrayOfStrings(newArray, sortingType);
        return x;
    };

    /**
     * Function to get products' prices
     * @param {string} sortingType - 'reverse'  OR  'sort'  OR  'original' (== no changes).
    */
    async getProductPrices(sortingType) {
        const array = await arrayFromValues(PRODUCT_PRICE);
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i].replace('$', '');
        }
        let newArray = array.map(str => {
            return parseFloat(str);
        });
        console.log(newArray);
        let x = await sortingArrayOfNumbers(newArray, sortingType);
        return x;
    };

    /**
    * Function to get products' prices
    * @param {string} sortingType - 'A to Z'  OR  'Z to A'  OR  'Low to High'  OR  'High to Low'.
    */
    async selectSortingType(sortingType) {
        await this.click(PRODUCT_SORT_DROPDOWN);
        let selectedType = sortingType;
        if (selectedType === 'A to Z') {
            await this.click(SORT_BY_NAME_A_TO_Z);
        } else if (selectedType === 'Z to A') {
            await this.click(SORT_BY_NAME_Z_TO_A);
        } else if (selectedType === 'Low to High') {
            await this.click(SORT_BY_PRICE_LOW_TO_HIGH);
        } else if (selectedType === 'High to Low') {
            await this.click(SORT_BY_PRICE_HUGH_TO_LOW);
        };
    };

    async addProductsToCart(productNumbers) {
        let array = productNumbers;
        let i = 0;
        const productArray = [];
        const priceArray = [];
        
        // Create an array from added items
        while (i < array.length) {
            let elementNumber = array[i];
            await basePage.clickNumber(ADD_REMOVE_BUTTON, elementNumber);
            let elementName = await basePage.getTexts(PRODUCT_NAME, elementNumber);
            let elementPrice = await basePage.getTexts(PRODUCT_PRICE, elementNumber);
            priceArray[elementNumber] = elementPrice;
            productArray[elementNumber] = elementName;
            i++;
        };

        // Remove empty elements from an array 
        let filteredPrices = priceArray.filter((a) => a);
        let filteredProducts = productArray.filter((a) => a);

        // Change array items from string to numbers
        let filteredPricesNumbers = await changeStringToNumber(filteredPrices);

        // Get array's length
        let numberOfProducts = filteredProducts.length;

        return {filteredPricesNumbers, filteredProducts, numberOfProducts};
    };

    async clickCartIcon() {
        await basePage.click(SHOPPING_CART_ICON);
    };

    async cartNumberOfItems () {
        let numberOfItems = await basePage.getText(SHOPPING_CART_ICON);
        return numberOfItems;
    }

};