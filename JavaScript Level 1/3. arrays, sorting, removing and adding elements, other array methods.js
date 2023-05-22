// Существует несколько вариантов создания массивов, например:
let exampleArray = new Array ();
exampleArray[0] = "Zero";
exampleArray[1] = "One";
exampleArray[2] = "Two";
// или
let exampleArray = ["Zero", "One", "Two"];




// Reading 
// Для чтения элементов массива можно присвоить переменной значение элемента массива, например:
let exampleArray = ["Zero", "One", "Two"];
let x = exampleArray[0];   // в данном случае x присвоено значение элемента с индексом [0], то есть при выводе в консоль отобразится значение "Zero".




// Adding
// Чтобы добавить элемент в массив, можно использовать один из следующих способов:
exampleArray[3] = "Three";
exampleArray[5] = "Five";   // В данном случае добавляются элементы с индексом [3] и [5].

// Для добавления элементов в конец массива используется метод push():
exampleArray.push("Three"); // Добавляется элемент в конце массива, то есть в случае ранее указанного примера - [3].

// Также можно добавить сразу несколько элементов в конец массива с помощью push():
exampleArray.push("Three", 5, "7"); // В конец массива добавится три значения под индексами [3], [4], [5] соответственно. 

// Чтобы добавить элементы в начало массиво, используется метод unshift():
xampleArray.unshift("-1", "-2",);  // Добавленные элементы получают индексы [0] и [1] соответсвенно, а последующие смещаются.




// Removing
// Удалить конкретный элемент массива можно с помощью метода delete, например:
let exampleArray = ["Zero", "One", "Two"];
delete exampleArray[2];      // Элемент под индексом [2] ("Two") будет удален из массива, а значение этого элемента будет изменено на undefined.

// Также можно с помощью свойства lenght уменьшить длину массива, что повлечет за собой удаления тех элементов, которые не входят в length. Например:
let exampleArray = ["Zero", "One", "Two"];
exampleArray.length = 2;     // Останутся только первые два элемента, последний будет удалён.

// Удалить элемент в конце массива можно с помощью метода pop():
let exampleArray = ["Zero", "One", "Two"];
exampleArray.pop();          // Останутся только первые два элемента, последний будет удалён.

// Удалить элемент в начале массива можно с помосщью метода shift():
let exampleArray = ["Zero", "One", "Two"];
exampleArray.shift();        // Первый элемен ("Zero") будет удален, а "One" приобретет идекс [0].




// Sorting
// Метод sort() сортирует элементы в исходном массиве и возвращает массив, отсортированный в алфавитном порядке. При этом элементы сортируются как строки, например:
let exampleArray = [66, 23, 15, 5];
exampleArray.sort();       // После сортировки массив будет выглядеть как [15, 23, 5, 66], так как по умолчанию элементы сортируются как строки.
// или
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.sort();       // После сортировки массив будет выглядеть как ["Apple", "Lemon", "Watermelon"] (в алфавитном порядке).

// Для более точной сортировки строк лучше использовать метод localeCompare(). Например:
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.sort((a, b) => a.localeCompare(b));

// Для того, чтобы элементы с типом number сортировались в корректном порядке, можно использовать функции:
let exampleArray = [ 61, 12, 25, 22, 188, 635 ];
exampleArray.sort(function(a, b) { return a - b; });
// или
exampleArray.sort( (a, b) => a - b );
// В результате вернется массив, отсортированный в порядке возрастания: [12, 22, 25, 61, 188, 635].

// Для сортировки чисел в порядке убывания используется следующие функции:
exampleArray.sort(function(a, b) { return b - a; });
// или 
exampleArray.sort( (a, b) => b - a );




// Other array methods
// splice - позволяет добавлять, удалять и заменять элементы и имеет следующий вид:
exampleArray.splice(start, deleteCount, element1, ... elementN);
    // Начиная с индекса start удаляется deleteCount элементов и затем добавляются элементы element1, ... elementN на их место. Например:
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.splice(0, 1, "Orange", "Melon");  // Начиная с нулевого [0] элемента удалится один элемент (Watermelon), и на его место добавятся два новых.
    // Данный метод также позволяет удалять элементы без добаления новых:
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.splice(0, 1); // Будет удалён нулевой элемент.
    // И также добавлять элементы без удаления, например:
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.splice(1, 0, "Orange", "Melon"); // Перед первым элементом добавятся два новых.


// slice - возвращает новый массив, в который скопированы элементы в пределах указанных индексов, например:
let exampleArray = ["Watermelon", "Lemon", "Apple", "Orange", "Melon"];
exampleArray.slice(1, 3); // Новый массив будет включать в себя значения с индексами 1 и 2 (не включая 3-й).
    // Если вызвать .slice() без аргументов, то вернется копия оригинального массива.


// concat - позволяет создать новый массив,в который копируются данные из старого масива + новые дополнительные значения/массивы:
let exampleArray = ["Zero", "One", "Two"];
console.log(exampleArray.concat(["Three", "Four"], 5, 6, "7"));


// forEach - позволяет запускать функцию для каждого элемента массива, например:
let exampleArray = ["Watermelon", "Lemon", "Apple"];
exampleArray.forEach(alert);  // Во всплывающем окне будет выведен каждый элемент массива по отдельности.

["Watermelon", "Lemon", "Apple"].forEach((item, index, array) => {
    console.log(item);   // В консоли будет выведено значение каждого элемента;
    console.log(index);  // ... индекс каждого элемента;
    console.log(array);  // ... сам массив;
  });


// Поиск в массиве
  // .indexOf(item, from) - ищет значение начиная с индекса from и затем возвращает номер индекса, которому соответствует найденный элемент. Например:
  let NewArray = ["Karate", "Aikido", "Boxing","Muay Thai", "Kung Fu"];
    console.log(NewArray.indexOf("Aikido"));        // Если не указано индекс, то по умолчанию поиск идет с начала (с [0]);
    console.log(NewArray.indexOf("Karate", 2));     // В массиве "Karate" имеет индекс [0], а поиск ведется со второго, поэтому элемент найден не будет (в консоливернется -1);
    console.log(NewArray.indexOf("Muay Thai", 1));  // Вернется индекс [3];
  
  // .includes(item, from) - ищет значение начиная с индекса from и возвращает true, если поиск успешен, например:
  let NewArray = ["Karate", "Aikido", "Boxing","Muay Thai", "Kung Fu"];
    console.log(NewArray.includes("Aikido"));       // Вернется true;
    console.log(NewArray.includes("Karate", 2));    // Вернется false;
    console.log(NewArray.includes("Muay Thai", 1)); // Вернется true;

  // .lastIndexOf(item, from) - работает по принципу indexOf, но поиск идет с конца (справа налево), например:
  let NewArray = ["Karate", "Aikido", "Boxing","Muay Thai", "Kung Fu", "Karate"];
    console.log(NewArray.indexOf("Karate"));      // Вернется индекс 0;
    console.log(NewArray.lastIndexOf("Karate"));  // Вернется индекс 5;

  // .find(function(item, index, array) {}

  // .findIndex 

  // .findLastIndex 

  // .filter(fn)


    // reverse - данный метод меняет порядок элементов в массиве на обратный, например:
let exampleArray = ["Zero", "One", "Two"];
exampleArray.reverse();    // Массив будет преобразован в ["Two", "One", "Zero"].


// split and join
