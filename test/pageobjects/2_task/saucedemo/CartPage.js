import BasePage from "../BasePage.js"

const PRODUCT_NAME = '//*[@class="inventory_item_name"]';
const CHECKOUT_BUTTON = '//*[@id="checkout"]';


export default class CartPage extends BasePage {


    /**
    * Function to get products' name
    * @param {string} sortingType - 'reverse' (== .reverse() )  OR  'sort' (== .sort() )  OR  'original' (== no changes).
    */
    async getAddedProductNames(sortingType) {
        let newArray = await this.createArrayFromValues(PRODUCT_NAME);
        let x = await this.sortingArrayOfStrings(newArray, sortingType);
        return x;
    };

    async clickCheckoutButton() {
        await this.click(CHECKOUT_BUTTON);
    };

}