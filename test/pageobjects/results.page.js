const Page = require('./BasePage');

const NUMBER_OF_RESULTS = '//div[@id="result-stats"]';              // Количество найденных результатов
const NAME_OF_LINK = '//h3[@class="LC20lb MBeuO DKV0Md"]';          // Результат-ссылка (название)
const LINK_HREF = '//h3[@class="LC20lb MBeuO DKV0Md"]';             // Ссылка на результат
const SEARCH_FIELD = '//textarea';                                 // Поле для поиска
const SEARCH_BUTTON = '//button[@jsname="Tg7LZd"]';                 // Кнопка поиска
const IMAGE_NAME = '//div[@class="zbRPDe M2qv4b"]';                // Отображаемые картинки-результаты (название)
const RESULT_TYPE_IMAGES = '//div[contains(text(), "Відарысы")]';  // Ссылка на результаты (картинки)
const ADD_PARAMETERS_TABBY = '//a[contains(@aria-label, "tabby")]';      // Уточнение для картинок


class Results extends Page {
    get numberOfResults () {           // Количество найденных результатов
        return $(NUMBER_OF_RESULTS);
    }

    get resultLinks () {               // Отображаемые результаты (название)
        return $$(NAME_OF_LINK);
    }

    get oneResultLink () {             // Отображаемые результаты (ссылки)
        return $$(LINK_HREF);
    }

    get textArea () {                  // Поле для поиска
        return $(SEARCH_FIELD);
    }
 
    get searchButton () {              // Кнопка поиска
        return $(SEARCH_BUTTON);
    }

    get imageName () {                 // Название ссылок на картинки
        return $$(IMAGE_NAME);
    }

    get typeOfResultImages () {        // Ссылка на картинки
        return $(RESULT_TYPE_IMAGES);
    }

    get additionalParametersTabby () {      // Уточнение для картинок (tabby)
        return $(ADD_PARAMETERS_TABBY);
    }





    async newResultsSearch (value) {       // Новый поиск
        await this.newSearch(this.TextArea, this.SearchButton, value);
    }


    async resultStats () {          // Количество отображаемых результатов
       return await this.resultStatistic(this.numberOfResults);
        
    }

    async nameOfLinks (text) {    // Отображаемые результаты (название)
        await this.existsAndContainsText(this.ResultLinks, text);
    }
    
    
    async imagesLabels (attribute, value) {    // Отображаемые результаты-картинки (label)
        await this.existsAndContainsAttribute(this.ImageName, attribute, value);
    }

    async selectingTypeImages() {   // Открытие вкладки с картинками
        await this.buttonClick(this.TypeOfResultImages);
    }

    async selecting_parameters() {   // Уточнение для вкладки с картинками
        await this.selectingParameters(this.additionalParametersTabby);
    }



    open () {
        return super.open();
    }
}

module.exports = new Results();