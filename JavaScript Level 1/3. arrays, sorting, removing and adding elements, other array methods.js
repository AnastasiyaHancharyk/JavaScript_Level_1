// Существует несколько вариантов создания массивов, например:
let exampleArray = new Array ();
exampleArray[0] = "Zero";
exampleArray[1] = "One";
exampleArray[2] = "Two";

// или

let exampleArray = ["Zero", "One", "Two"];




// READING
// Для чтения элементов массива можно присвоить переменной значение элемента массива, например:
let exampleArray = ["Zero", "One", "Two"];
let x = exampleArray[0];   // в данном случае x присвоено значение элемента с индексом [0], то есть при выводе в консоль отобразится значение "Zero".




// ADDING
// Чтобы добавить элемент в массив, можно использовать один из следующих способов:
exampleArray[3] = "Three";
exampleArray[5] = "Five";   // В данном случае добавляются элементы с индексом [3] и [5].

// Для добавления элементов в конец массива используется метод push():
exampleArray.push("Three"); // Добавляется элемент в конце массива, то есть в случае ранее указанного примера - [3].

// Также можно добавить сразу несколько элементов в конец массива с помощью push():
exampleArray.push("Three", 5, "7"); // В конец массива добавится три значения под индексами [3], [4], [5] соответственно. 

// Чтобы добавить элементы в начало массиво, используется метод unshift():
exampleArray.unshift("-1", "-2",);  // Добавленные элементы получают индексы [0] и [1] соответсвенно, а последующие смещаются.




// REMOVING
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




// SORTING
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




// OTHER ARRAY METHODS
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




// ПОИСК В МАССИВЕ
  // .indexOf(item, from) - ищет значение начиная с индекса from и затем возвращает номер индекса, которому соответствует найденный элемент. Например:
  let NewArray = ["Karate", "Aikido", "Boxing", "Muay Thai", "Kung Fu"];
    console.log(NewArray.indexOf("Aikido"));        // Если не указано индекс, то по умолчанию поиск идет с начала (с [0]);
    console.log(NewArray.indexOf("Karate", 2));     // В массиве "Karate" имеет индекс [0], а поиск ведется со второго, поэтому элемент найден не будет (в консоли вернется -1);
    console.log(NewArray.indexOf("Muay Thai", 1));  // Вернется индекс [3];
  
  // .includes(item, from) - ищет значение начиная с индекса from и возвращает true, если поиск успешен, например:
  let NewArray1 = ["Karate", "Aikido", "Boxing","Muay Thai", "Kung Fu"];
    console.log(NewArray1.includes("Aikido"));       // Вернется true;
    console.log(NewArray1.includes("Karate", 2));    // Вернется false;
    console.log(NewArray1.includes("Muay Thai", 1)); // Вернется true;

  // .lastIndexOf(item, from) - работает по принципу indexOf, но поиск идет с конца (справа налево), например:
  let NewArray2 = ["Karate", "Aikido", "Boxing","Muay Thai", "Kung Fu", "Karate"];
    console.log(NewArray2.indexOf("Karate"));      // Вернется индекс 0;
    console.log(NewArray2.lastIndexOf("Karate"));  // Вернется индекс 5;

  // .find - возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined. Например:
  function weather (element, index, array) {
    let preferred_weather = "sunny";
    return element === preferred_weather;
  }
  
  let today_weather = ["cool", "cloudy", "rainy", "stormy", "thundery"];
  let tomorrow_weather = ["cloudy", "warm", "windy", "sunny", "foggy"];
  
  console.log(today_weather.find(weather));     // Вернется "undefined"
  console.log(tomorrow_weather.find(weather));  // Вернется "sunny"

  // .findIndex - работает по тому же принципу, что и .find, но возвращает индекс первого найденного элемента, соответсвующего условию.
  // Например, для вышеуказанного примера вернется [-1] для today_weather и [3] для tomorrow_weather.

  // .findLastIndex - работает по тому же принципу, что и .findIndex и .find, но возвращает индекс последнего найденного элемента, соответсвующего условию.




  // .filter(fn) - позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет. Например:
  let numbers = [1, 234, 6, 7, 45, 3, 8, 18, 448];
  let new_numbers = numbers.filter(function (y) {
      let x = y % 2;
        return x !== 0;
    })
  console.log(new_numbers);  // В консоли отобразится новый массив, содержащий нечетные значения.
  // или
  let fruits = ["Apple", "Banana", "Peach", "Strawberry", "Watermelon", "Papaya"];
  let starts_with_p = fruits.filter(function(x) {
     return x.startsWith("P");
    })
  console.log(starts_with_p);   // Аернется массив ["Peach", "Papaya"];

  // .reverse - данный метод меняет порядок элементов в массиве на обратный, например:
  let exampleArray = ["Zero", "One", "Two"];
  exampleArray.reverse();    // Массив будет преобразован в ["Two", "One", "Zero"].


  // .split - разбивает строки в массив по указанному в первом параметре разделителю. Например:
  let some_text = "The cat's name is Simba";
  console.log(some_text.split(" "));   // В качестве разделителя будет использован пробел, и результатом будет ["The", "cat's", "name", "is", "Simbа].
  // Также же в качетсве второго необязательного параметра можно указать максимальное количество элементов в получившейся строке:
  console.log(some_text.split(" ", 3)); // Вернется ["The", "cat's", "name"].

  // join - объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива, но не является обязательным). Если он не задан - по умолчанию в качестве разделителя возьмется запятая.
  let date = ["05", "06", "2023"];
  console.log(date.join("-"));   // Вернется "05-06-2023".
  console.log(date.join(""));    // Вернется "05062023".
  console.log(date.join());      // Вернется "05,06,2023".

