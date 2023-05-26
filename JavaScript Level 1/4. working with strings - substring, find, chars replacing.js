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


// Свойства строк:
  //  .length - возвращает количество символов в строке, например:
  let cat = "Simba";
  console.log(cat.length);  // вернется длина строки - 5



// Методы строк:
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


  // Поиск в строке:
  // find() - 

  // indexOf(searchValue, fromIndex) - поиск подстроки searchValue начиная с индекса fromIndex (указание индекс является необязательным)
  let c = "Cat, Dog, Fish, Mouse, Cat";
  console.log(c.indexOf("Cat", 0));   // Вернется индекс ноль [0]
  console.log(c.indexOf("Cat", 1));   // Вернется идекс [23]

  // lastIndexOf(searchValue, toIndex) - поиск последней указанной подстроки до указанного идекса (то есть поиск идет с конца строки)
  console.log(c.lastIndexOf("Cat", 10));   // Вернется индекс ноль [0]
  console.log(c.lastIndexOf("Cat", 23));   // Вернется идекс [23]

  // search() - возвращается индекс первого совпадения или -1, если ничего не найдено.

  // match() - возвращает массив всех совпадений.


  // Преобразование типов:
  // fromCharCode(num1, num2,...,numN) - создание строки из значений символом Юникода, например:
  let CAT = String.fromCharCode(67, 65, 84);
  console.log(CAT);   // Будет выведено CAT

  // toString() и valueOf() - возвращают элементарную строку вместо объекта String, например:
  let value = new String("Cats");
  console.log(typeof value);             // В консоль будет выведен тип object;
  console.log(typeof value.valueOf());   // В консоль будет выведен тип string;
  console.log(typeof value.toString());  // В консоль будет выведен тип string;


  // Замена значений в строке:
  // replace() позволяет заменять одно значение на другое:
  let w = "26-05-2023";
  console.log(w.replace("-", ":"));   // Будет изменено только первое совпадение, и результатом будет "26:05-2023"
  
  console.log(w.replace(/-/g, ":"));  // Будут изменены все совпадения, и результатом будет "26:05:2023"

  let e = "some text"
  console.log(e.replace(/(\w+)\s(\w+)/, "$2, $1"));  // Слова поменяются местами и результатом будет "text, some"

  