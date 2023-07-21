const Page = require('./main.page');

class Results extends Page {
    get numberOfResults () {
        return $('//div[@id="result-stats"]');
    }

    get result_links () {
        return $$('.//h3[@class="LC20lb MBeuO DKV0Md"]');
    }

    async results_stats () {
        const x = await this.numberOfResults.getText();
        return "Number of results: " + x;
    }

    async name_of_links (text) {
        await expect(this.result_links).toBeExisting()
        const y = await expect(this.result_links).toHaveTextContaining(text); 
    }
    

    open () {
        return super.open();
    }
}

module.exports = new Results();