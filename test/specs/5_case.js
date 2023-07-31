/* 
- перейти на google
- ввести в поиск Cat
- Открыть поиск по картинке
- Перетащить какую-нибудь картинку в поле
- Проверить, что получены результаты с картинками
*/ 


const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Fifth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await browser.pause(1500);

        // await Results.paws();
               

        await Results.selectSearchByImage();

        await browser.pause(1500);

        await Results.dragAndDropImage();

        await browser.pause(5000);        

    })
})
