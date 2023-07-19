const Page = require('./main.page');

class Search extends Page {
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
        return super.open();
    }
}

module.exports = new Search();