const Page = require('./main.page');

class Results extends Page {
    get numberOfResults () {
        return $('//div[@id="result-stats"]');
    }

    get result_links () {
        return $$('.//h3[@class="LC20lb MBeuO DKV0Md"]');
    }

    get one_result_link () {
        return $('.//a[@href]');
    }

    get text_area () {
        return $('.//textarea');
    }

    get search_button () {
        return $('//button[@jsname="Tg7LZd"]');
    }


    async open_the_link (text) {
        await expect(this.one_result_link).toBeExisting()
        await expect(this.one_result_link).toHaveUrlContaining(text);
        await this.one_result_link.click()
    }

    async new_search (value) {
        await this.text_area.setValue(value);
        await this.search_button.click();
    }

    async results_stats () {
        const x = await this.numberOfResults.getText();
        return "Number of results: " + x;
    }

    async name_of_links (text) {
        await expect(this.result_links).toBeExisting()
        await expect(this.result_links).toHaveTextContaining(text); 
    }
    




    open () {
        return super.open();
    }
}

module.exports = new Results();