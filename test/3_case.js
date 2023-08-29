/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Перейти в раздел с картинками;
4. Выбрать уточнение для результатов и применить;
5. Проверить, что названия отображаемых результатов содержат выбранное уточнение.
 */

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cats");
        await ResultsPage.selectingTypeImages();
        await ResultsPage.selectingImageParameters();
        await ResultsPage.imagesLabels("TABBY");
        await SearchPage.closeTheBrowser();

    })
})