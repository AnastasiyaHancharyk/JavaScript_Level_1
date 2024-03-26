/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Перейти в раздел с картинками;
4. Выбрать уточнение для результатов и применить;
5. Проверить, что названия отображаемых результатов содержат выбранное уточнение.
 */

const Search = require('../../pageobjects/google/searching')
const Results = require('../../pageobjects/google/results.page')

describe('Web Automation Level 1', () => {
    it('Third Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.selectingTypeImages();   // Открытие вкладки с картинками

        await Results.selectingImageParameters(/tabby/i);   // Выбор параметра, содержащего текст tabby

        await Results.imagesLabels(/tabby/i)    // Проверка, что результаты сожержат tabby в названии


        await browser.pause(5000);

    })
})
