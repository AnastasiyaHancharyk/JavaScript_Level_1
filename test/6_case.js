/*
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Перейти в настройки;
4. Сменить язык на английский;
5. Вернуться к результатам;
6. Выбрать тип результатов Types;
7. Нажать на одну из отображаемых пород (пользователю показываются результаты поиска для выбранной породы);
8. Проверить, что порода, отображаемая в поисковой строке, соответствует породе, выбранной ранее.
*/

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cat types");
        await ResultsPage.changeLanguageToEnglish(); 
        await ResultsPage.selectingTypeTypes();
        await ResultsPage.selectACatBreed();
        await SearchPage.closeTheBrowser();

    })
})