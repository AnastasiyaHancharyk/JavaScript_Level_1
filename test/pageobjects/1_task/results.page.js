const Page = require('./BasePage');

const NUMBER_OF_RESULTS = '//div[@id="result-stats"]';                              // Количество найденных результатов
const NAME_OF_LINK = '//h3[@class="LC20lb MBeuO DKV0Md"]';                          // Результат-ссылка (название)
const LINK_HREF = '//*[contains (@href, "wikipedia.org")]';                         // Ссылка на результат (wikipedia)
const SEARCH_FIELD = '//textarea';                                                  // Поле для поиска
const SEARCH_BUTTON = '//button[@jsname="Tg7LZd"]';                                 // Кнопка поиска
const IMAGE_NAME = '//div[@class="zbRPDe M2qv4b"]';                                 // Отображаемые картинки-результаты (название)
const RESULT_TYPE_IMAGES = '//*[contains(text(), "Відарысы")]';                     // Ссылка на результаты (картинки)
const ADD_PARAMETERS_TABBY = '//a[contains(@aria-label, "tabby")]';                 // Уточнение для картинок
const SEARCH_BY_IMAGE = '//div/*[@class="Gdd5U"]';                                  // Поиск по картинке
const FIELD_SEARCH_BY_IMAGE = '//input[@jsname="W7hAGe"]';                          // Поле для поиска по картинке
const BUTTON_SEARCH_BY_IMAGE = '//div[@jsname="ZtOxCb"]';                           // Кнопка для поиска по картинке
const IMAGES_LOCATION = '//div[13]/div[2]//div[2]/div/div[1]/div/div/div/div/div/div/div/div[2]/div/div'; // Расположение картинок
const INSTRUMENTS = '//div[@jscontroller="z2BPKb"]';                                // Интсрументы на вкладке "Картинки"
const INSTRUMENTS_COLOR = '//*[@id="yDmH0d"]//div[2]/*[@jsname="alDyS"]';           // Отображение по цвету (интсрументы)
const YELLOW_COLOR = '//div[@style="background-color:#FFEB3B"]';                    // Жёлтый цвет
const RESULT_TYPE_TYPES = '//*[@id="bqHHPb"]//a[4]';                                // Ссылка на результаты (Types)
const SETTINGS = '//*[@jscontroller="vTw9Fc"]';                                     // Настройки
const SETTINGS_LANGUAGE = '//div[@class="q0yked"]//div[@class="ZI7elf UCGAnb"]';    // Настройки -> Язык
const SELECT_LANGUAGE = '//*[@class="caUihf z1asCe Rxk5mb"]';                       // Выбор языка
const LANGUAGE_ENGLISH = '//*/g-menu-item[2]/div[contains(text(), "English")]';     // Настройки -> Язык -> Английский
const SETTINGS_SAVE_BUTTON = '//*[@id="lb"]/div/div[2]/span/div/div/div/span[2]';   // Select language -> Кнопка "Confirm"
const SETTINGS_BACK_BUTTON = '//a[@aria-label="Back"]';                             // Back button
const TYPE_BREEDS = '//span[@jsname="AznF2e"]//*[contains (text(), "Breeds")]';     // Types -> Раздел "Breeds"
const CAT_BREEDS = '//div[@class="JjtOHd"]';                                        // Список пород в разделе Breeds



class Results extends Page {

    // Количество найденных результатов
    get numberOfResults () {                 
        return $(NUMBER_OF_RESULTS);
    }

    // Результат-ссылка (название)
    get resultLinks () {                     
        return $$(NAME_OF_LINK);
    }

    // Ссылка на результат (wikipedia)
    get oneResultLink () {                   
        return $(LINK_HREF);   
    }

    // Поле для поиска
    get textArea () {                        
        return $(SEARCH_FIELD);
    }
 
    // Кнопка поиска
    get searchButton () {                    
        return $(SEARCH_BUTTON);
    }
   
    // Название ссылок на картинки
    get imageName () {                       
        return $$(IMAGE_NAME);
    }

    // Ссылка на картинки
    get typeOfResultImages () {              
        return $(RESULT_TYPE_IMAGES);
    }

    // Уточнение для картинок (tabby)
    get additionalParametersTabby () {       
        return $(ADD_PARAMETERS_TABBY);
    }

    // Поиск по картинке
    get searchingByImage () {                
        return $(SEARCH_BY_IMAGE);
    }

    // Поле для поиска по картинке
    get fieldForSearchingByImage () {        
        return $(FIELD_SEARCH_BY_IMAGE);
    }

    // Кнопка для поиска по картинке
    get buttonForSearchingByImage () {       
        return $(BUTTON_SEARCH_BY_IMAGE);
    }
 
    // Расположение картинок
    get imageLocation () {                   
        return $(IMAGES_LOCATION);
    }

    // Интсрументы на вкладке "Картинки"
    get instruments () {                  
        return $(INSTRUMENTS);
    }

    // Отображение по цвету (интсрументы)
    get instrumentsColor () {                  
        return $(INSTRUMENTS_COLOR);
    }

    // Жёлтый цвет
    get yellowColor () {                
        return $(YELLOW_COLOR);
    }

    // Ссылка на результаты (Types)
    get typeOfResultTypes () {                
        return $(RESULT_TYPE_TYPES);
    }

    // Настройки
    get settings () {        
        return $(SETTINGS);
    }

    // Настройки -> Язык
    get settingsLanguage () {           
        return $(SETTINGS_LANGUAGE);
    }

    // Настройки -> Язык -> Английский
    get languageEnglish () {         
        return $(LANGUAGE_ENGLISH);
    }

    //  Настройки -> Кнопка "Save"
    get settingsSaveButton () {                  
        return $(SETTINGS_SAVE_BUTTON);
    }

    // Types -> Раздел "Breeds"
    get catBreeds () {                   
        return $(CAT_BREEDS);
    }
    
    // Список пород в разделе Breeds
    get typeBreed () {                   
        return $(TYPE_BREEDS);
    }

    // Выбор языка
    get selectLanguage () {                   
        return $(SELECT_LANGUAGE);
    }

    // Back button
    get settingBackButton () {                   
        return $(SETTINGS_BACK_BUTTON);
    }    





    // Открыть ссылку с википедией
    async openWikipediaLink () {     
        await this.click(this.oneResultLink);
    }
    
    // Новый поиск
    async newResultsSearch (value) {       
        await this.waitForExistAndEnabled(this.textArea, {timeout: 5000});
        await this.setValueAndClick(this.textArea, this.searchButton, value);
    }

    // Получение количества отображаемых результатов
    async resultStats () {          
        await this.waitForExistAndEnabled(this.numberOfResults, {timeout: 5000});
        return await this.getText("Number of results: ", this.numberOfResults);
        
    }

    // Проверка, что названия ссылок содержат определённый текст
    async nameOfLinks (text) {    
        await this.expectToHaveTextContaining(this.resultLinks, text);
    }
        

    // Проверка, что отображаемые результаты-картинки содержат определённый текст
    async imagesLabels (text) {    
        await this.expectToHaveTextContaining(this.imageName, text);
    }

    // Открытие вкладки с картинками
    async selectingTypeImages() {   
        await this.waitForExistAndEnabled(this.typeOfResultImages, {timeout: 5000});
        await this.click(this.typeOfResultImages);
    }

    // Использование уточнения (дополнительного параметра поиска) для вкладки с картинками
    async selectingImageParameters () {   
        await this.scrollIntoViewAndClick(this.additionalParametersTabby);
    }

    // Поиск по картинке/ссылке с картинкой и проверка, что по итогу отображается именно lens.google.com
    async searchByImage () {        
        await this.waitForExistAndEnabled(this.searchingByImage, {timeout: 5000});
        await this.click(this.searchingByImage);
        let x = await this.getAttribute(this.imageLocation, 'data-lpage');
        await this.setValueAndClick(this.fieldForSearchingByImage, this.buttonForSearchingByImage, x);
        await this.expectToHaveUrlContaining('lens.google.com');
    }

    // Ввод дополнительного параметра в поле для поиска
    async addValueToSearch (value) {
        await this.addValue(this.textArea, value);
        await this.click(this.searchButton);

    }

    // Выбор жёлтого цвета в инструментах
    async selectYellowColor (attribute, value) {
        await this.click(this.instruments);
        await this.click(this.instrumentsColor);
        await this.click(this.yellowColor);
        await this.expectToHaveAttributeContaining(this.instrumentsColor, attribute, value);
    }

    // Открытие вкладки с картинками
    async selectingTypeTypes() {   
        await this.waitForExistAndEnabled(this.typeOfResultTypes, {timeout: 5000});
        await this.click(this.typeOfResultTypes);
    }

    // Изменить язык вкладки на английский
    async changeLanguageToEnglish () {
        await this.waitForExistAndEnabled(this.settings, {timeout: 5000});
        await this.click(this.settings);
        await this.waitForExistAndEnabled(this.settingsLanguage, {timeout: 5000});
        await this.click(this.settingsLanguage);
        await this.waitForExistAndEnabled(this.selectLanguage, {timeout: 5000});
        await this.click(this.selectLanguage);
        await this.waitForExistAndEnabled(this.languageEnglish, {timeout: 5000});
        await this.click(this.languageEnglish);
        await this.click(this.settingsSaveButton);
        await this.click(this.settingBackButton);
    }

    // Выбор определённой породы и проверка, что выбранная порода соотвутствует указанной в поисковой строке
    async selectACatBreed () {
        // await this.waitForExistAndEnabled(this.typeBreed, {timeout: 5000});
        // await this.click(this.typeBreed);
        await this.waitForExistAndEnabled(this.catBreeds, {timeout: 5000});
        let x = await this.getText(this.catBreeds);
        await this.click(this.catBreeds);
        await this.waitForExistAndEnabled(this.textArea, {timeout: 5000});
        let y = await this.getText(this.textArea);
        if (x === y) {
            console.log ("Everything is correct! The selected breed matches the found one!");
        } else {
            console.log ("Something is wrong... The selected breed does not match the found one :(");
        }

    }





    open () {
        return super.open();
    }
}

module.exports = new Results();