/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Добавить текст в поисковую строку;
4. Перейти в раздел с картинками;
5. Применить инструменты -> Жёлтый цвет;
6. Проверить, что выбранный фильтр правильно отображает выбранную опцию.
*/ 


const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Fifth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.addValueToSearch(' Tuxedo')    // Добавление в поиск слова Tuxedo

        await Results.selectingTypeImages();      // Открытие вкладки с картинками

        await Results.selectYellowColor('aria-label', 'Yellow');    // Выбор жёлтого цвета в интсрументах для дополнительной настройки отображаемых результатов

        await browser.pause(5000);        

    })
})
