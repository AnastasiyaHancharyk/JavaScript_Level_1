const Page = require('./main.page');

class Search extends Page {    // The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
    get inputSearch () {
        return $('textarea[id="APjFqb"]');
    }

    get btnSearch () {
        return $('input[type=submit]');
    }

    async new_search (value) {
        await this.inputSearch.setValue(value);
        await this.btnSearch.click();
    }

    open () {
        return super.open('');
    }
}

module.exports = new Search();