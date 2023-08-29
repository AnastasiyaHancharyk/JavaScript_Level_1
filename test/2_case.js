/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Ввести в поисковой строке и найти другое значение;
4. Открыть ссылку Wikipedia.
*/

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cats");
        await ResultsPage.newResultsSearch("Manul");
        await ResultsPage.openWikipediaLink();
        await SearchPage.closeTheBrowser();

    })
})