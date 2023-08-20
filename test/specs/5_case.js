/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Скопировать ссылку на одну из картинок на странице;
4. Открыть поиск по картинке;
5. Ввести скопированную ссылку с картинкой;
6. Проверить, что пользователь оказалась на странице lens.google.com.
*/ 


const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Fifth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Dogs');   // Ввод текста и поиск

        await Results.searchByImage();

        await browser.pause(5000);        

    })
})
