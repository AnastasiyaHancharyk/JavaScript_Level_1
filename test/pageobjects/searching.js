const Page = require('./BasePage');

const INPUT_FIELD = 'textarea[id="APjFqb"]';
const SEARCH_BUTTON = 'input[type=submit]';

class Search extends Page {    // The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    get InputSearch () {
        return $(INPUT_FIELD);
    }

    get BtnSearch () {
        return $(SEARCH_BUTTON);
    }


    async newSearch (value) {
        await this.searching(this.InputSearch, this.BtnSearch, value);
    }

    open () {
        return super.open('');
    }
}

module.exports = new Search();