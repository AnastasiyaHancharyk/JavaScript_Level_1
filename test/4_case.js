/* 
1. Перейти на google.com;
2. Ввести в поисковой строке Cat и нажать "Поиск";
3. Добавить текст в поисковую строку;
4. Перейти в раздел с картинками;
5. Применить инструменты -> Жёлтый цвет;
6. Проверить, что выбранный фильтр правильно отображает выбранную опцию.
*/ 

const SearchPage = require('./pageobjects/SearchPage');
const ResultsPage = require('./pageobjects/ResultsPage');


describe ("WebDriverIO -> Selenium", () => {
    it ("First Case", async () => {

        
        await SearchPage.openSite(`https://google.com`);
        await SearchPage.newSearch("Cats");
        await ResultsPage.addValueToSearch(" Tuxedo");
        await ResultsPage.selectingTypeImages();
        await ResultsPage.selectYellowColor('Yellow');
        await SearchPage.closeTheBrowser();

    })
})