// switch является альтернативой нескольких if, то есть он позволяет выбирать один из многих вариантов в зависимости от условия. Например:

let a = 3;
switch (a) {
    case 1:
        console.log( 'One' );
        break;
    case 2:
        console.log( 'Two' );
        break;
    case 3:
        console.log ( 'Three' );   // Так как а = 3, то результатом будет отображение в консоли сообщения "Three".
        break;
    default:
        console.log ( 'Unknown' );
}

// default является необязательным блоком, который срабатывает тогда, когда ни один case не подошёл (т.е. в предыдущем случае отобразилось бы сообщение ""Unkwown").
// break прерывает выполнение кода после найденного соответствия. Если break не стоит, то выполнение продолжается дальше по следующим case (то есть в предыдущем примере в консоли отобразились бы сообщения и для case 3, и для default).


// Также несколько вариантов case можно группировать вместе, например:

let x = 3;
switch (x) {
    case 1:
        console.log( 'One' );
        break;
    case 2:
    case 3:
        console.log ( 'Two or three' );   // Результатом будет отображение в консоли сообщения "Two or three".
        break;
    default:
        console.log ( 'Unknown' );
}


// Еще одной особенностью switch является то, что проверка на равенство является строгим, то есть чтобы равенство выполнялось, значения должны быть одного типа. Например:
let y = "3";
switch (y) {
    case 1:
        console.log( 'One' );
        break;
    case 2:
    case 3:
        console.log ( 'Two or three' );   // Данный case не будет выполняться, так 'y' является строкой "3", а в case указано число 3.
        break;
    default:
        console.log ( 'Unknown' );
}