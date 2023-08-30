/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Скопировать ссылку на одну из картинок на странице;
4. Открыть поиск по картинке;
5. Ввести скопированную ссылку с картинкой;
6. Проверить, что пользователь оказалась на странице lens.google.com.
*/ 

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Dogs");
        await ResultsPage.searchByImage();
        await SearchPage.closeTheBrowser();

    })
})