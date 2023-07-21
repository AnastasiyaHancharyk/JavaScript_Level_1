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
        await Search.open();               // Открытие страницы
        await Search.new_search('Cats');   // Ввод текста и поиск

        await browser.pause(2000);
        Results.results_stats().then(console.log);  // Вывод в консоль количества результатов поиска

        await Results.name_of_links(/cat/i);  // Проверка, что каждый результат содержит cat

        await browser.pause(2000);
    })
})