/* 
- перейти на google
- ввести в поиск Cat
- Добавить текст в поиск
- перейти в картинки
- применить инструменты 
- проверить, что фильтры отображаются правильно (сам текст)
https://www.tutorialspoint.com/webdriverio/webdriverio_expect_statement_for_assertions.htm */ 


const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Fifth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.selectingTypeImages();

   

        await Results.selectYellowColor();



        await browser.pause(5000);        

    })
})
