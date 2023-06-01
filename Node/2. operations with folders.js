// CREATE:
   // mkdir - в первом аргументе передается название папки и/или путь, а во втором - функция, которая возвращает оошибку. Например:
   let fs = require("fs");
   fs.mkdir("Disk:\\...some path...\\Test Folder", function(err) {
       if(err) throw err;
       console.log("Created!");
   });

   //  Если необходимо создать последовательность вложенных папок, то можно вторым параметром передать значение "recursive" равное "true", например:
   let fs = require("fs");
   fs.mkdir("Disk:\\...some path...\\Test Folder 2\\Test", { recursive: true }, function(err) {
       if(err) throw err;
       console.log("Created!");
   });



// DELETE
   // rmdir:
   let fs = require("fs");
   fs.rmdir("Disk:\\...some...\\...path...\\Test Folder", function(err) {
    if(err) throw err;
    console.log("Deleted!");
});
// Если удаляемая папка не является пустой, то метод вызовет ошибку. Чтобы удалить папку со вложенными файлами, можно использовать { recursive: true } в качестве второго аргумента.
   

// READ
   // readdir: первый параметр - путь к папке содержимое которой нужно прочитать; второй параметр - функция для обработки ошибки и получения иен файлов. Например:
   let fs = require("fs");
   fs.readdir("Disk:\\...some...\\...path...", function (err, files) {
    if (err) throw err;
    console.log("The folder contains the following files: " + files);
   });