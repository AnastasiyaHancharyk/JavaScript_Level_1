// - Кошачьи лапки!


const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Sixth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.new_search('Cats');   // Ввод текста и поиск

        await browser.pause(2000);

        await Results.paws();

        await browser.pause(3000);
    })
})