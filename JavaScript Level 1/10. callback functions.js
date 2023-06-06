// Callback - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия. 
// Например:
function example (x, y_callback){
    console.log(x);
    y_callback();
}
function callback () {
    console.log("Callback Function");
}
example("Some text", callback);

// Callback функции позволяют "откладывать" длительные операции и вместо ожидания их завершения выполнять другой код.

function studying (start, end) {
    console.log(start);
    setTimeout(end, 5000);
}
function process () {
    console.log("The class is in progress");
}

function stop () {
    console.log("The class has ended");
}

studying("The class has begun", stop);
process();

// Сообщения "The class has begun" и "The class is in progress" отобразятся в консоли одновременно, а "The class has ended" - спустя указанное время.