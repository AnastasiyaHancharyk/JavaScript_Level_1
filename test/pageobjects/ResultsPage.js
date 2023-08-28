const { By, Key } = require("selenium-webdriver");
const should = require("chai").should();
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

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

class Results extends Page {

    // Количество найденных результатов
    get numberOfResults () {                 
        return By.xpath(NUMBER_OF_RESULTS);
    }

    // Результат-ссылка (название)
    get resultLinks () {                     
        return By.xpath(NAME_OF_LINK);  //!!
    }

    // Ссылка на результат (wikipedia)
    get oneResultLink () {                   
        return By.xpath(LINK_HREF);   
    }

    // Поле для поиска
    get textArea () {                        
        return By.xpath(SEARCH_FIELD);
    }
 
    // Кнопка поиска
    get searchButton () {                    
        return By.xpath(SEARCH_BUTTON);
    }
   
    // Название ссылок на картинки
    get imageName () {                       
        return By.xpath(IMAGE_NAME); //!!
    }

    // Ссылка на картинки
    get typeOfResultImages () {              
        return By.xpath(RESULT_TYPE_IMAGES);
    }

    // Уточнение для картинок (tabby)
    get additionalParametersTabby () {       
        return By.xpath(ADD_PARAMETERS_TABBY);
    }

    // Поиск по картинке
    get searchingByImage () {                
        return By.xpath(SEARCH_BY_IMAGE);
    }

    // Поле для поиска по картинке
    get fieldForSearchingByImage () {        
        return By.xpath(FIELD_SEARCH_BY_IMAGE);
    }

    // Кнопка для поиска по картинке
    get buttonForSearchingByImage () {       
        return By.xpath(BUTTON_SEARCH_BY_IMAGE);
    }
 
    // Расположение картинок
    get imageLocation () {                   
        return By.xpath(IMAGES_LOCATION);
    }

    // Интсрументы на вкладке "Картинки"
    get instruments () {                  
        return By.xpath(INSTRUMENTS);
    }

    // Отображение по цвету (интсрументы)
    get instrumentsColor () {                  
        return By.xpath(INSTRUMENTS_COLOR);
    }

    // Жёлтый цвет
    get yellowColor () {                
        return By.xpath(YELLOW_COLOR);
    }

    // Ссылка на результаты (Types)
    get typeOfResultTypes () {                
        return By.xpath(RESULT_TYPE_TYPES);
    }

    // Настройки
    get settings () {        
        return By.xpath(SETTINGS);
    }

    // Настройки -> Язык
    get settingsLanguage () {           
        return By.xpath(SETTINGS_LANGUAGE);
    }

    // Настройки -> Язык -> Английский
    get languageEnglish () {         
        return By.xpath(LANGUAGE_ENGLISH);
    }

    //  Настройки -> Кнопка "Save"
    get settingsSaveButton () {                  
        return By.xpath(SETTINGS_SAVE_BUTTON);
    }

    // Types -> Раздел "Breeds"
    get catBreeds () {                   
        return By.xpath(CAT_BREEDS);
    }
    
    // Список пород в разделе Breeds
    get typeBreed () {                   
        return By.xpath(TYPE_BREEDS);
    }

    // Выбор языка
    get selectLanguage () {                   
        return By.xpath(SELECT_LANGUAGE);
    }

    // Back button
    get settingBackButton () {                   
        return By.xpath(SETTINGS_BACK_BUTTON);
    }    

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

    // Получение количества отображаемых результатов
    async resultStats () {          
        await this.waitUntilElementIsVisible(this.numberOfResults, 3000)
        return await this.getText(this.numberOfResults);
    };

    async nameOfLinks (text) {
        await this.expectToHaveTextContaining(this.resultLinks, text);
    };







};

module.exports = new Results();