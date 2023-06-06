// Цикл for повторяет действия, пока соблюдается указанное условие, после чего он будет завершен. Имеет следующий вид:
//        for ([начальное значение]; [конечное значение/условие]; [шаг]) { ... }. Например:
for (let x = 1; x < 3; x++) {
    console.log(x);            // в консоли будет выведено значение x с 1 до 2
}


// for of позволяет перебирать элементы массива (не индекс текущего элемента, а именно его значение). Например:
let pet = ["Cat", "Dog", "Mouse"];
for (let x of pet) {
  console.log(x);           // будут выведены значения массива Cat, Dog, Mouse.
}
// Данный пример можно записать и используя цикл for:
let pets = ["Cat", "Dog", "Mouse"];
for (let y = 0; y < pets.length; y++) {
    console.log(pets[y]);   // будут выведены значения массива Cat, Dog, Mouse.
}


// for in используется для перебора свойств объекта(пройдёт по каждому отдельному элементу), например:
let list = {
  cat: "Simba",
  dog: "Maya",
  snail: "Ulitka"
};
for (let a in list) {
  console.log("The " + a + "'s name is " + list[a] + ".");
}
/* Будет выведено: 
The cat's name is Simba.
The dog's name is Maya.
The snail's name is Ulitka.
*/


// for Each - позволяет применить колбэк-функцию ко всем элементам массива. Можно использовать вместо классического цикла for (в отличие от него, forEach() выглядит более читабельным и понятным). Например:
let pets_name = ["Simba", "Maya", "Ulitka"];
pets_name.forEach(function (a) {
  console.log("Pet's name is " + a + ".");
});
/* Будет выведено:
Pet's name is Simba.
Pet's name is Maya.
Pet's name is Ulitka.
*/
