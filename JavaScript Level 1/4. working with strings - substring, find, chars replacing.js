// Strings (строки) - это любые текстовые данные. Внутренний формат для строк - всегда UTF-16, вне зависимости от кодировки страницы.
// При создании строк можно использовать одинарные и двойные кавычки, а также обратные, в которые можно вставлять произвольные выражения в ${...}, например:
function sum(x, y) {
    return x + y;
}
console.log(`x + y = ${sum(15, 20)}`);
// Также при использовании обратных кавычек можно писать больше одной строки:
let pet = `
  - Cat,
  - Dog,
  - Fish,
  `;
  console.log(pet);


// СВОЙСТВА СТРОК:

  //  .length - возвращает количество символов в строке, например:
  let cat = "Simba";
  console.log(cat.length);  // вернется длина строки - 5



// МЕТОДЫ СТРОК:

  // Для доступа к символу в строке можно использовать методы .charAt() и обращение к строке как к массиву.
  let Cat = "Simba";
  console.log(Cat.charAt(4));   // будет выведен символ с индексом 4 - "a"

  let Cat_2 = "Simba";
  console.log(Cat_2[4]);        // будет выведен символ с индексом 4 - "a"


  // concat() - для слияния строк:
  let x = "Cat's ";
  let y = "name ";
  let z = "is ";
  let i = "Simba :)";
  console.log(x.concat(y,z,i));  // В результате будет выведено "Cat's name is Simba :)"

  
  // split() - разбиение строки на массив значений по разделителю:
  let a = "Cat's name is Simba :)";
  console.log(a.split(" "));    // будет отображен массив ["Cat's", "name", "is", "Simba", ":)"];
  // При split строка разбивается по указанному разделителю (в примере - по пробелу).
  // Также в split можно указывать максимальное количество элементов в финальном массиве, например:
  let b = "Simba is a cat";
  console.log(b.split(" ", 1));   // Вернется только первый элемент "Simba".


  // substring(indexA, indexB) - возвращает часть строки начиная с позиции indexA, но не включая indexB:
  let q = "Simba is a cat";
  console.log(q.substring(0, 5));  // Будет выведен текст с 0 по 4 индексы - "Simba";


  // slice - аналогичен substring, но иначе работает с отрицательными и выходящими за границу строки аргументами:
  let text = "Some text";
  console.log(text.substring(-2));  // [-2] преобразуется в [0] и будет выведено 'Some text'
  console.log(text.slice(-2));      // Отсчет пойдет от второй позиции с конца и будет выведено 'xt'



  // ПОИСК В СТРОКЕ:

  // indexOf(searchValue, fromIndex) - поиск подстроки searchValue начиная с индекса fromIndex (указание индекс является необязательным)
  let c = "Cat, Dog, Fish, Mouse, Cat";
  console.log(c.indexOf("Cat", 0));   // Вернется индекс ноль [0]
  console.log(c.indexOf("Cat", 1));   // Вернется идекс [23]


  // lastIndexOf(searchValue, toIndex) - поиск последней указанной подстроки до указанного идекса (то есть поиск идет с конца строки)
  console.log(c.lastIndexOf("Cat", 10));   // Вернется индекс ноль [0]
  console.log(c.lastIndexOf("Cat", 23));   // Вернется идекс [23]


  // search() - возвращается индекс первого совпадения или -1, если ничего не найдено.
  let pass_phrase = "Wonderful weather this morning, isn't it?";
  console.log(pass_phrase.search("is"));      // Вернется индекс [20] - первое совпадение в this;
  console.log(pass_phrase.search("these"));   // Вернется [-1] - нет совпадений;

  // match() - возвращает массив всех совпадений, например:
  let some_text = "Some 1 text 2 is 3 written 4 here 5";
  console.log(some_text.match(/\D+/g));   // Будет выведено ["Some ", " text ", " is ", " written", "here"].
  console.log(some_text.match(/\d+/g));   // Будет выведено ["1", "2", "3", "4", "5"].
  // Также его можно использовать, чтобы вернуть все значения кроме указанного в условии, например:
  let phrase = "Random words in front of other random words create a random sentence.";
  let remove_word = /\b(?:(?!random)\w)+\b/gmi;
  console.log(phrase.match(remove_word));        // Вернется ["words", "in", "front", "of", "other", "words", "create", "a", "sentence"]



  // ПРЕОБРАЗОВАНИЕ ТИПОВ:

  // fromCharCode(num1, num2,...,numN) - создание строки из значений символом Юникода, например:
  let CAT = String.fromCharCode(67, 65, 84);
  console.log(CAT);   // Будет выведено CAT


  // toString() и valueOf() - возвращают элементарную строку вместо объекта String, например:
  let value = new String("Cats");
  console.log(typeof value);             // В консоль будет выведен тип object;
  console.log(typeof value.valueOf());   // В консоль будет выведен тип string;
  console.log(typeof value.toString());  // В консоль будет выведен тип string;



  // ЗАМЕНА ЗНАЧЕНИЕЙ В СТРОКЕ:
  
  // replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель:
  let w = "26-05-2023";
  console.log(w.replace("-", ":"));   // Будет изменено только первое совпадение, и результатом будет "26:05-2023"
  
  console.log(w.replace(/-/g, ":"));  // Будут изменены все совпадения, и результатом будет "26:05:2023"

  let e = "some text and"
  console.log(e.replace(/(\w+)\s(\w+)\s(\w+)/, "$3, $1, $2"));  // Слова поменяются местами, и результатом будет "and, some, text"

  // g - глобальное сопоставление
  // i - игнорировать регистр
  let r = "Some text";
  console.log(r.replace(/some/gi, "Another")); // Результатом будет вывод в консоль "Another text"
