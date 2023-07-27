/* 
- перейти на google
- ввести в поиск Cat
- ввести другое значение в поиск
- вывести результат
- открыть ссылку */

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Second Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await browser.pause(2000);
        await Results.NewResultsSearch('Manul');

        // await Results.open_the_link('href', 'https://en.wikipedia.org/wiki/Cat');

        await browser.pause(2000);

    })
})