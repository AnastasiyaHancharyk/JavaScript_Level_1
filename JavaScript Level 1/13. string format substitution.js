// String formatting - это процесс вставки переменных в строку. Обычно это делается с помощью фигурных скобок {}.
let cat = "Simba";
let age = 3;
console.log(cat + " is " + age + " years old.");
console.log(`${cat} is ${age} years old.`);
// Оба варианта выведут в консоль "Simba is 3 years old."


// Также форматировать строки можно с помощью пользовательских функций, например:
String.prototype.format = function () {
    let args = arguments;
    return this.replace(/{([0-9]+)}/g, function (match, index) {
      return typeof args[index] == "undefined" ? match : args[index];
    });
  };
  console.log("{0} is {1} years old.".format("Simba", 3));
  // Будет выведено в консоль то же, что и для первых двух вариантов - "Simba is 3 years old."