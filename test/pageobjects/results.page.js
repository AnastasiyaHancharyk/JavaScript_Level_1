const Page = require('./main.page');

class Results extends Page {
    get numberOfResults (){
        return $('.//*[@id="result-stats"]/text()');
    }

    async results_page () {
        await this.numberOfResults.getText();
    }
    

    open () {
        return super.open();
    }
}

module.exports = new Results();