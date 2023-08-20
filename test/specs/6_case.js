/*
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Перейти в настройки;
4. Сменить язык на английский;
5. Вернуться к результатам;
6. Выбрать тип результатов Types;
7. Нажать на одну из отображаемых пород (пользователю показываются результаты поиска для выбранной породы);
8. Проверить, что порода, отображаемая в поисковой строке, соответствует породе, выбранной ранее.
- 

*/



const Search = require('../pageobjects/searching')
const Results = require('../pageobjects/results.page')

describe('Web Automation Level 1', () => {
    it('Fifth Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        await Results.changeLanguageToEnglish();   // Изменение языка на английский

        await Results.selectingTypeTypes();   // Переход на вкладку Types

        await Results.selectACatBreed();  // Выбор породы кошек

        await browser.pause(5000);        

    })
})