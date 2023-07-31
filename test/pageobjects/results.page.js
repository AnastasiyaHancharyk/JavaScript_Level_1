const Page = require('./BasePage');

const NUMBER_OF_RESULTS = '//div[@id="result-stats"]';              // Количество найденных результатов
const NAME_OF_LINK = '//h3[@class="LC20lb MBeuO DKV0Md"]';          // Результат-ссылка (название)
const LINK_HREF = '//*[contains (@href, "wikipedia.org")]';             // Ссылка на результат
const SEARCH_FIELD = '//textarea';                                 // Поле для поиска
const SEARCH_BUTTON = '//button[@jsname="Tg7LZd"]';                 // Кнопка поиска
const IMAGE_NAME = '//div[@class="zbRPDe M2qv4b"]';                // Отображаемые картинки-результаты (название)
const RESULT_TYPE_IMAGES = '//*[contains(text(), "Відарысы")]';  // Ссылка на результаты (картинки)
const ADD_PARAMETERS_TABBY = '//a[contains(@aria-label, "tabby")]';      // Уточнение для картинок
const SEARCH_BY_IMAGE = '//div/*[@class="Gdd5U"]';  // Поиск по картинке
const FIELD_SEARCH_BY_IMAGE = '//div[@class="BH9rn"]';   // Поле для поиска по картинке
const IMAGES_LOCATION = '//img[@jsname="fpF2df"]';  // Расположение картинок



class Results extends Page {
    get numberOfResults () {           // Количество найденных результатов
        return $(NUMBER_OF_RESULTS);
    }

    get resultLinks () {               // Отображаемые результаты (название)
        return $$(NAME_OF_LINK);
    }

    get oneResultLink () {             // Отображаемые результаты (ссылки)
        return $(LINK_HREF);
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

    get searchingByImage () {     // Поиск по картинке
        return $(SEARCH_BY_IMAGE);
    }

    get fieldForSearchingByImage () {              // Поле для поиска по картинке
        return $(FIELD_SEARCH_BY_IMAGE);
    }
 
    get imageLocation () {                  // Расположение картинок
        return $(IMAGES_LOCATION);
    }





    async openWikipediaLink () {
        await this.openTheLink (this.oneResultLink);
    }
    
    async newResultsSearch (value) {       // Новый поиск
        await this.newSearch(this.textArea, this.searchButton, value);
    }

    async resultStats () {          // Количество отображаемых результатов
       return await this.resultStatistic(this.numberOfResults);
        
    }

    async nameOfLinks (text) {    // Отображаемые результаты (название)
        await this.existsAndContainsText(this.resultLinks, text);
    }
        
    async imagesLabels (text) {    // Отображаемые результаты-картинки (label)
        await this.existsAndContainsText(this.imageName, text);
    }

    async selectingTypeImages() {   // Открытие вкладки с картинками
        await this.buttonClick(this.typeOfResultImages);
    }

    async selectingImageParameters () {   // Уточнение для вкладки с картинками
        await this.selectingParameters(this.additionalParametersTabby);
    }

    async selectSearchByImage () {
       await this.buttonClick(this.searchingByImage);
       //await this.buttonClick(this.imageLocation)
    }

    async dragAndDropImage () {
        await this.imageLocation.dragAndDrop(await this.fieldForSearchingByImage);

    }

    // async paws () {
    //     await $('//div[@class="LazJZc onPqbe"]').click();  
    //     await $('//canvas').click({ x:-360, y:-300 });  
    // }




    open () {
        return super.open();
    }
}

module.exports = new Results();