/* 
1. Перейти на google.com;
2. ввести в поисковой строке Cat и нажать "Поиск";
3. вывести в консоль количество найденных результатов;
4. Проверить, что каждый ответ содержит слово "Cat".
*/

const SearchPage = require('./pageobjects/SearchPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cats");
        await SearchPage.closeTheBrowser();
    })
})