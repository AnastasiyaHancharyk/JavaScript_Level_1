const Page = require('./BasePage');

const INPUT_FIELD = 'textarea[id="APjFqb"]';   // Поле ввода
const SEARCH_BUTTON = 'input[type=submit]';    // Кнопка поиска

class Search extends Page {    // The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
 
    // Поле ввода
    get InputSearch () {
        return $(INPUT_FIELD);
    }

    // Кнопка поиска
    get BtnSearch () {
        return $(SEARCH_BUTTON);
    }



    // Ввод значения в поле и нажатие кнопки поиска
    async newSearch (value) {
        await this.waitForExistAndEnabled(this.InputSearch, {timeout: 5000});
        await this.waitForExistAndEnabled(this.BtnSearch, {timeout: 5000});
        await this.setValueAndClick(this.InputSearch, this.BtnSearch, value);
    }

    open () {
        return super.open('');
    }
}

module.exports = new Search();