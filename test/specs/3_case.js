/* 
- перейти на google
- ввести в поиск Cat
- перейти в картинки
- выбрать уточнение для результатов и применить
- проверить, что названия содержат выбранное уточнение */

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Third Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await browser.pause(1500);

        await Results.selectingTypeImages();

        await Results.selectingImageParameters(/tabby/i);

        await Results.imagesLabels(/tabby/i)


        await browser.pause(5000);

    })
})
