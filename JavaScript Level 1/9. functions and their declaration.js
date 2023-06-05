// Функции - это блоки кода, которые предназначены для выполнения определенной задачи, и выполняются только тогда, когда её вызывают. 


// Function Declaration - функция объявляется отдельной конструкцией function:
function example () {           // Объявление функции (function declaration) без параметра
    console.log("Butterfly");   // Тело функции - код, который должен быть выполнен
}
example();                      // Вызов функции

function example_2 (x) {        // Объявление функции (function declaration) с параметром x
    console.log(x);
}
example_2("Another Butterfly")


// Function Expression - функция создаётся внутри другого выражение (например, присваивания):
let example = function () {     // Function expression без параметра
    console.log("Butterfly");
};
example();

let example_2 = function (x) {    // Function expression с параметром x
    console.log(x);
};
example_2("Another Butterfly");


// Одно из отличий между Function Declaration и Function Expression - Function Declaration может быть вызвана до того, как будет определена. Например:
cat("Simba");
function cat (x) {
    console.log(x);        // В консоли будет выведено Simba
}

cat ("Simba");
let cat = function(x) {
    console.log(x);        // Вернётся ошибка
};