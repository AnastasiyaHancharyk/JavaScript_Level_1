// Существует несколько вариантов создания массивов, например:
let exampleArray = new Array ();
exampleArray[0] = "Zero";
exampleArray[1] = "One";
exampleArray[2] = "Two";
// или
let exampleArray = ["Zero", "One", "Two"] 



// Reading 
// Для чтения элементов массива можно присвоить переменной значение элемента массива, например:
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
let exampleArray = ["Zero", "One", "Two"]
delete exampleArray[2];      // Элемент под индексом [2] ("Two") будет удален из массива, а значение этого элемента будет изменено на undefined.

// Также можно с помощью свойства lenght уменьшить длину массива, что повлечет за собой удаления тех элементов, которые не входят в length. Например:
let exampleArray = ["Zero", "One", "Two"]
exampleArray.length = 2;     // Останутся только первые два элемента, последний будет удалён.

// Удалить элемент в конце массива можно с помощью метода pop():
let exampleArray = ["Zero", "One", "Two"]
exampleArray.pop();          // Останутся только первые два элемента, последний будет удалён.

// Удалить элемент в начале массива можно с помосщью метода shift():
let exampleArray = ["Zero", "One", "Two"]
exampleArray.shift();        // Первый элемен ("Zero") будет удален, а "One" приобретет идекс [0].



// Sorting





// Other array methods


