/* 
- перейти на google
- ввести в поиск Cat
- ввести другое значение в поиск
- вывести результат
- открыть первую ссылку */

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Second Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.new_search('Cats');   // Ввод текста и поиск

        await browser.pause(2000);
        // await Results.new_search('Manul');

        await Results.open_the_link('wikipedia.org');

        await browser.pause(2000);

    })
})