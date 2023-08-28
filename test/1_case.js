/* 
1. Перейти на google.com;
2. ввести в поисковой строке Cat и нажать "Поиск";
3. вывести в консоль количество найденных результатов;
4. Проверить, что каждый ответ содержит слово "Cat".
*/

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cats");
        await ResultsPage.resultStats().then(console.log);
        await ResultsPage.nameOfLinks("Cats")
        await SearchPage.closeTheBrowser();

        // let driver = await new Builder().forBrowser("chrome").build();
        // await driver.findElement(By.xpath("//li[last()]")).getText().then(function (value) {
        //     return value;
        // });
    })
})