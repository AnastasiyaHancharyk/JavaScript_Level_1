const Page = require('./main.page');

const INPUT_FIELD = 'textarea[id="APjFqb"]';
const SEARCH_BUTTON = 'input[type=submit]';

class Search extends Page {    // The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    get InputSearch () {
        return $(INPUT_FIELD);
    }

    get BtnSearch () {
        return $(SEARCH_BUTTON);
    }

    async new_search (value) {
        await this.InputSearch.setValue(value);
        await this.BtnSearch.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new Search();