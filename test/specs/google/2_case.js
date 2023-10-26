/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Ввести в поисковой строке и найти другое значение;
4. Открыть ссылку Wikipedia.
*/

const Search = require('../../pageobjects/google/searching')
const Results = require('../../pageobjects/google/results.page')

describe('Web Automation Level 1', () => {
    it('Second Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.newResultsSearch('Manul');    // Ввод нового значение в поисковую строку и поиск

        await Results.openWikipediaLink();    // Открытие ссылки Wikipedia

        await browser.pause(2000);

    })
})