const Page = require('./main.page');

class Results extends Page {
    get numberOfResults () {        // Количество найденных результатов
        return $('//div[@id="result-stats"]');
    }

    get result_links () {           // Отображаемые результаты (название)
        return $$('.//h3[@class="LC20lb MBeuO DKV0Md"]');
    }

    get one_result_link () {        // Отображаемые результаты (ссылки)
        return $$('a');
    }

    get text_area () {      // Поле для поиска
        return $('.//textarea');
    }
 
    get search_button () {    // Кнопка для поискаы
        return $('//button[@jsname="Tg7LZd"]');
    }


    get paw_button () {      // Кнопка-лапка
        return $('.//img[@jsname="fpF2df"]');
    }

    get paw_canvas () {      // Область для лапок
        return $('//canvas[@class="GQ0mne"]');
    }





    async paws () {        // Лапки на странице
        await this.paw_button.click();
        await this.paw_canvas.click({x: 0, y: 0});
        await this.paw_canvas.click({x: 0, y: -250});
        await this.paw_canvas.click({x: 0, y: 250});
        await this.paw_canvas.click({x: 250, y: 0});
        await this.paw_canvas.click({x: -250, y: 0});
        await this.paw_canvas.click({x: 250, y: 250});
        await this.paw_canvas.click({x: -250, y: -250});
        await browser.keys('Escape');

    }

    async open_the_link (attribute, value) {   // Открытие определенной ссылки

        //await expect(this.one_result_link).toHaveAttributeContaining(attribute, value);
        // console.log(await this.one_result_link.getValue());
        await this.one_result_link.click(value);
    }

    async new_search (value) {       // Новый поиск
        await this.text_area.setValue(value);
        await this.search_button.click();
    }

    async results_stats () {          // Количество отображаемых результатов
        const x = await this.numberOfResults.getText();
        return "Number of results: " + x;
    }

    async name_of_links (text) {    // Отображаемые результаты (название)
        await expect(this.result_links).toBeExisting()
        await expect(this.result_links).toHaveTextContaining(text); 
    }
    




    open () {
        return super.open();
    }
}

module.exports = new Results();