/* 
Проверить, что ответы сожержат Cat
- перейти на google
- ввести в поиск Cat
- вывести в консоль количество результатов
- проверить что каждый ответ содержит Cat */



const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('First Case', async () => {
        await Search.open();

        await Search.new_search('Cats');

        await browser.pause(2000);

        console.log("Log " + Results.results_page())

        await browser.pause(2000);
    })
})