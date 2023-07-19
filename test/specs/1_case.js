/* 
Проверить, что ответы сожержат Cat
- перейти на google
- ввести в поиск Cat
- вывести в консоль количество результатов
- проверить что каждый ответ содержит Cat */



const Search = require('../pageobjects/searching')

describe('Web Automation Level 1', () => {
    it('First Case', async () => {
        await Search.open();

        await Search.new_search('Cats');

        await browser.pause(5000);
    })
})