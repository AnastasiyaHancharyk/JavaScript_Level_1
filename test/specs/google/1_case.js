/* 
1. Перейти на google.com;
2. ввести в поисковой строке Cat и нажать "Поиск";
3. вывести в консоль количество найденных результатов;
4. Проверить, что каждый ответ содержит слово "Cat".
*/



const Search = require('../../pageobjects/google/searching')
const Results = require('../../pageobjects/google/results.page')

describe('Web Automation Level 1', () => {
    it('First Case', async () => {
        await Search.open();               // Открытие страницы
        await Search.newSearch('Cats');   // Ввод текста и поиск

        Results.resultStats().then(console.log);  // Вывод в консоль количества результатов поиска

        await Results.nameOfLinks(/cat/i);  // Проверка, что каждый результат содержит cat

        await browser.pause(2000);
    })
})