// fs (FileSystem) - модуль, дающий средства для работы с файловой системой

// Create operations
   // 1. fs.open():
   let fs = require("fs");
   fs.open("C:\Users\YOGA\Desktop\Работа\JS\New File.txt", "w", function (err) {
      if (err) throw err;
      console.log("Done!");
    });

/* - fs.open/FileSystem.open используется для создания нового файла;
   - Первый аргумент ("New File.txt") - это имя файла;
   - Второй аргумент (флаг "w") указывает, что именно нужно сделать с файлом. В данном случае - открыть файл для записи (writing);
   - err передает ошибки, которые могут возникнуть при создании файла.

   Метод .open() может принимать различные флаги, например:
   - r: открыть файл для чтения
   - r+: открыть файл для чтения и записи
   - rs: открыть файл для чтения в синхронном режиме
   - w: открыть файл для записи
   - a: открыть файл для записи данных в конец файла 
   - a+: открыть файл для чтения и для записи данных в конец файла
*/


   // 2. fs.appendFile() - добавляет указанное значение в конец файла. Если же файл не существует, он будет создан:
   let fs = require("fs");
   fs.appendFile("New File.txt", "Red Cat :)", function(err) {
    if (err) throw err;
    console.log("Done!");
   });                     // В созданный ранее файл будет добавлена строчка "Red Cat :)"


   // 3. fs.writeFile() - заменяет значение в указанном файле, а также создает новый файл, если его не существует:
   let fs = require("fs");
   fs.writeFile("New File.txt", "Orange Kitten Simba", function(err) {
    if (err) throw err;
    console.log("Done!");
   });                     // В созданном ранее файле старое значение "Red Cat :)" будет изменено на указанное выше - "Orange Kitten Simba".






// Find - с помощью данного метода можно будет найти все файлы по указанному шаблону:

let glob = require('glob')

glob('NodeJS/**/*.txt', (err, files) => {
  if (err) {
    return console.error(err)
  }

  console.log(files)

    files.forEach(file => {
    console.log(file)
  })
})




// Delete file
   // fs.unlink() - удаляет выбранный файл:
   let fs = require("fs");
   fs.unlink("New File.txt", function(err) {
      if (err) throw err;
      console.log("Done!");
   });


// Save information into file - для изменения информации в файле используются следующие методы:
   // 1. fs.appendFile()
   // 2. fs.writeFile()