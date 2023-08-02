const Page = require('./BasePage');

const NUMBER_OF_RESULTS = '//div[@id="result-stats"]';                    // Количество найденных результатов
const NAME_OF_LINK = '//h3[@class="LC20lb MBeuO DKV0Md"]';                // Результат-ссылка (название)
const LINK_HREF = '//*[contains (@href, "wikipedia.org")]';               // Ссылка на результат
const SEARCH_FIELD = '//textarea';                                        // Поле для поиска
const SEARCH_BUTTON = '//button[@jsname="Tg7LZd"]';                       // Кнопка поиска
const IMAGE_NAME = '//div[@class="zbRPDe M2qv4b"]';                       // Отображаемые картинки-результаты (название)
const RESULT_TYPE_IMAGES = '//*[contains(text(), "Відарысы")]';           // Ссылка на результаты (картинки)
const ADD_PARAMETERS_TABBY = '//a[contains(@aria-label, "tabby")]';       // Уточнение для картинок
const SEARCH_BY_IMAGE = '//div/*[@class="Gdd5U"]';                        // Поиск по картинке
const FIELD_SEARCH_BY_IMAGE = '//input[@jsname="W7hAGe"]';                // Поле для поиска по картинке
const BUTTON_SEARCH_BY_IMAGE = '//div[@jsname="ZtOxCb"]';                 // Кнопка для поиска по картинке
const IMAGES_LOCATION = '//div[13]/div[2]//div[2]/div/div[1]/div/div/div/div/div/div/div/div[2]/div/div';  // Расположение картинок
const INSTRUMENTS = '//div[@jscontroller="z2BPKb"]';                      // Интсрументы на вкладке "Картинки"
const INSTRUMENTS_COLOR = '//*[@id="yDmH0d"]//div[2]/*[@jsname="alDyS"]'; // Отображение по цвету (интсрументы)
const YELLOW_COLOR = '//div[@style="background-color:#FFEB3B"]';          // Жёлтый цвет


class Results extends Page {
    get numberOfResults () {                 // Количество найденных результатов
        return $(NUMBER_OF_RESULTS);
    }

    get resultLinks () {                     // Отображаемые результаты (название)
        return $$(NAME_OF_LINK);
    }

    get oneResultLink () {                   // Отображаемые результаты (ссылки)
        return $(LINK_HREF);   
    }

    get textArea () {                        // Поле для поиска
        return $(SEARCH_FIELD);
    }
 
    get searchButton () {                    // Кнопка поиска
        return $(SEARCH_BUTTON);
    }
   
    get imageName () {                       // Название ссылок на картинки
        return $$(IMAGE_NAME);
    }

    get typeOfResultImages () {              // Ссылка на картинки
        return $(RESULT_TYPE_IMAGES);
    }

    get additionalParametersTabby () {       // Уточнение для картинок (tabby)
        return $(ADD_PARAMETERS_TABBY);
    }

    get searchingByImage () {                // Поиск по картинке
        return $(SEARCH_BY_IMAGE);
    }

    get fieldForSearchingByImage () {        // Поле для поиска по картинке
        return $(FIELD_SEARCH_BY_IMAGE);
    }

    get buttonForSearchingByImage () {       // Кнопка для поиска по картинке
        return $(BUTTON_SEARCH_BY_IMAGE);
    }
 
    get imageLocation () {                   // Расположение картинок
        return $(IMAGES_LOCATION);
    }

    get instruments () {                   // Расположение картинок
        return $(INSTRUMENTS);
    }

    get instrumentsColor () {                   // Расположение картинок
        return $(INSTRUMENTS_COLOR);
    }

    get yellowColor () {                   // Расположение картинок
        return $(YELLOW_COLOR);
    }









    
    async openWikipediaLink () {    // Открыть ссылку с википедией
        await this.click (this.oneResultLink);
    }
    
    async newResultsSearch (value) {       // Новый поиск
        await this.waitForExist(this.textArea, {timeout: 5000});
        await this.newSearch(this.textArea, this.searchButton, value);
    }

    async resultStats () {          // Количество отображаемых результатов
        await this.waitForExist(this.numberOfResults, {timeout: 5000});
        return await this.getText("Number of results: ", this.numberOfResults);
        
    }

    async nameOfLinks (text) {    // Отображаемые результаты (название)
        await this.existsAndContainsText(this.resultLinks, text);
    }
        
    async imagesLabels (text) {    // Отображаемые результаты-картинки (label)
        await this.existsAndContainsText(this.imageName, text);
    }

    async selectingTypeImages() {   // Открытие вкладки с картинками
        await this.waitForExist(this.typeOfResultImages, {timeout: 5000});
        await this.click(this.typeOfResultImages);
    }

    async selectingImageParameters () {   // Уточнение для вкладки с картинками
        await this.selectingParameters(this.additionalParametersTabby);
    }


    async searchByImage () {        // Поиск по картинке/ссылке с картинкой
        await this.waitForExist(this.searchingByImage, {timeout: 5000});
        await this.click(this.searchingByImage);
        let x = await this.getAttribute(this.imageLocation, 'data-lpage');
        await this.searching (this.fieldForSearchingByImage, this.buttonForSearchingByImage, x);
        await this.expectToHaveUrlContaining('lens.google.com');
    }

    async selectYellowColor () {
        await this.click(this.instruments);
        await this.click(this.instrumentsColor);
        const selectBox = await $('//div[@class="OKAyuf"]')
        const y = await selectBox.selectByIndex(4);
        await y.click();
    }





    open () {
        return super.open();
    }
}

module.exports = new Results();