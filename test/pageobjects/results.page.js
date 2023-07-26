const Page = require('./main.page');

const NUMBER_OF_RESULTS = '//div[@id="result-stats"]';              // Количество найденных результатов
const NAME_OF_LINK = '//h3[@class="LC20lb MBeuO DKV0Md"]';          // Результат-ссылка (название)
const LINK_HREF = '//h3[@class="LC20lb MBeuO DKV0Md"]';             // Ссылка на результат
const SEARCH_FIELD = './/textarea';                                 // Поле для поиска
const SEARCH_BUTTON = '//button[@jsname="Tg7LZd"]';                 // Кнопка поиска
const IMAGE_NAME = './/div[@class="zbRPDe M2qv4b"]';                // Отображаемые картинки-результаты (название)
const RESULT_TYPE_IMAGES = './/div[contains(text(), "Відарысы")]';  // Ссылка на результаты (картинки)
const ADD_PARAMETERS = './/a[contains(@aria-label, "tabby")]';      // Уточнение для картинок


class Results extends Page {
    get NumberOfResults () {           // Количество найденных результатов
        return $(NUMBER_OF_RESULTS);
    }

    get ResultLinks () {               // Отображаемые результаты (название)
        return $$(NAME_OF_LINK);
    }

    get OneResultLink () {             // Отображаемые результаты (ссылки)
        return $$(LINK_HREF);
    }

    get TextArea () {                  // Поле для поиска
        return $(SEARCH_FIELD);
    }
 
    get SearchButton () {              // Кнопка поиска
        return $(SEARCH_BUTTON);
    }

    get ImageName () {                 // Название ссылок на картинки
        return $$(IMAGE_NAME);
    }

    get TypeOfResultImages () {        // Ссылка на картинки
        return $(RESULT_TYPE_IMAGES);
    }

    get AdditionalParameters () {      // Уточнение для картинок
        return $(ADD_PARAMETERS);
    }





    async open_the_link (attribute, value) {   // Открытие определенной ссылки

        await this.OneResultLink.selectByAttribute(attribute, value);
        await this.OneResultLink.click();
    }

    async new_search (value) {       // Новый поиск
        await this.TextArea.setValue(value);
        await this.SearchButton.click();
    }

    async results_stats () {          // Количество отображаемых результатов
        const x = await this.NumberOfResults.getText();
        return "Number of results: " + x;
    }

    async name_of_links (text) {    // Отображаемые результаты (название)
        await expect(this.ResultLinks).toBeExisting()
        await expect(this.ResultLinks).toHaveTextContaining(text); 
    }
    
    async searching_images (attribute, value) {    // Отображаемые результаты-картинки (label)
        // await expect(this.images).toBeExisting()
        await expect(this.ImageName).toHaveAttributeContaining(attribute, value); 
    }

    async selecting_type_images() {   // Открытие вкладки с картинками
        await this.TypeOfResultImages.click();
    }

    async selecting_parameters(text) {   // Открытие вкладки с картинками
        await this.AdditionalParameters.scrollIntoView({ block: "end" });
        await this.AdditionalParameters.click();
        await expect(this.ImageName).toHaveTextContaining(text); 
        
    }



    open () {
        return super.open();
    }
}

module.exports = new Results();