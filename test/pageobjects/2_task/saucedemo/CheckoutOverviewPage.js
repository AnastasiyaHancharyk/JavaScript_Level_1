import BasePage from "../BasePage.js"

const PRICE_WITHOUT_TAX = '//*[@class="summary_subtotal_label"]';
const TAX = '//*[@class="summary_tax_label"]';
const PRICE_WITH_TAX = '//*[contains (@class, "summary_total_label")]';
const FINISH_BUTTON = '//*[@id="finish"]';


export default class CheckoutOverviewPage extends BasePage {


    async getPriceWithoutTax () {
        let priceWithText = await this.getText(PRICE_WITHOUT_TAX);
        let priceString = priceWithText.replace("Item total: $", "");
        let priceInt = Number(priceString);
        return priceInt;
    };

    async getTax () {
        let priceWithText = await this.getText(TAX);
        let priceString = priceWithText.replace("Tax: $", "");
        let priceInt = Number(priceString);
        return priceInt;
    };
    
    async getPriceWithTax () {
        let priceWithText = await this.getText(PRICE_WITH_TAX);
        let priceString = priceWithText.replace("Total: $", "");
        let priceInt = Number(priceString);
        return priceInt;
    };

    async clickFinishButton () {
        await this.click(FINISH_BUTTON);
    };

};