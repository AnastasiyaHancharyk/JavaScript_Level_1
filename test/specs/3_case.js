/* 
- перейти на google
- ввести в поиск Cat
- перейти в картинки
- выбрать уточнение для результатов и применить
- проверить, что название содержит выбранное уточнение */

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Third Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.new_search('Cats');   // Ввод текста и поиск

        await browser.pause(1500);

        await Results.selecting_type_images();

        await Results.selecting_parameters(/tabby/i);


        await browser.pause(5000);

    })
})
