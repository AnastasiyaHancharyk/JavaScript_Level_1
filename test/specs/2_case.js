/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Ввести в поисковой строке и найти другое значение;
4. Открыть ссылку Wikipedia.
*/

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Second Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.newResultsSearch('Manul');

        await Results.openWikipediaLink();

        await browser.pause(2000);

    })
})