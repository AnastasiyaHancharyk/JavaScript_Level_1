// Promises - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. То есть это может быть resolve, если функция прошла успешно или reject, если функция вернула ошибку.
/* У промиса есть три состояния:
    - Промис в состоянии ожидания (pending).
    - Промис решен (resolved).
    - Промис отклонен (rejected).*/
// Синтаксис промисов выглядит следующим образом: new Promise(function (resolve, reject) { … } );

let is_the_weather_wonderful = true;
let answer_the_question = new Promise(  // Создание промиса
  function (resolve, reject) {
    if(is_the_weather_wonderful) {
      resolve("Yes, but I always carry an umbrella.")
    } else {
      reject("For the season, it's been unusually rainy.")
    }
  }
);

let ask_the_question = function () {  // Вызов промиса
  answer_the_question
  .then(function (fulfilled) {
    console.log(fulfilled);
  })
  .catch(function (error){
    console.log(error);
  });
};

ask_the_question();  // Если is_the_weather_wonderful = true, то в консоль будет выведено "Yes, but I always carry an umbrella.", если false, то - "For the season, it's been unusually rainy.".


// then — запускает колбек, который вы передали, когда промис завершен.
// catch — запускает колбек, который вы передали, когда что-то идет не так, что вызывает reject вместо resolve.