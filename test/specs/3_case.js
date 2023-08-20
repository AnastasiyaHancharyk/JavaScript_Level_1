/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Перейти в раздел с картинками;
4. Выбрать уточнение для результатов и применить;
5. Проверить, что названия отображаемых результатов содержат выбранное уточнение.
 */

const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Third Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.selectingTypeImages();

        await Results.selectingImageParameters(/tabby/i);

        await Results.imagesLabels(/tabby/i)


        await browser.pause(5000);

    })
})
