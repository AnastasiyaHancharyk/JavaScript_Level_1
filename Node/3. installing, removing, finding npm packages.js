// INSTALL
/* Для более удобного управления конфигурацией и пакетами приложения в npm применяется файл конфигурации package.json - в нём можно определитьвсе пакеты и затем одной командой их установить, например:
{
  "name": "modulesapp",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0"
  }
}

^ Добавляются пакеты Express и библиотека React. Для загрузки всех пакетом будет необходимо выполнить команду 
    npm install
(команда возьмет определение всех пакетов из секций dependencies и загрузит их в проект. Если пакет с нужной версией уже есть проекте, то по новой он не загружается). */




// REMOVE
/* Для удаления пакетов используется команда npm uninstall, например: 
    npm uninstall express

Если нам надо удалить не один пакет, а несколько, то мы можем удалить их определение из файла package.json и ввести команду npm install, и удаленные из package.js пакеты также будут удалены из папки node_modules, например:
{
  "name": "modulesapp",
  "version": "1.0.0",
  "dependencies": {
  }
}
(в данном случае удалятся все пакеты, которые были добавлены ранее).

Также можно одновременно некоторые пакеты добавлять в package.json, а некоторые, наоборот, удалять. И при выполнении команды npm install пакетный менеджер новые пакеты установит, а удаленные из package.json пакеты удалит. */




// FIND
/* 
   1. npm list позволяет отображать все локально установленные пакеты и их версии (npm list -g - глобально установленные пакеты), например, в случае с ранее установленными packages отобразится следующее:
      express@4.18.2
      react-dom@16.14.0
      react@16.14.0
   
    Для отображения определенного пакета необходимо добавить его имя после npm list, например:
      npm list express

   2. Для отображения пакетов, требующих обновление, используется npm outdated. Например, для вышеуказанных акетов результат будет следующий:
      Package    Current   Wanted  Latest  Location                Depended by
      react      16.14.0  16.14.0  18.2.0  node_modules/react      npm
      react-dom  16.14.0  16.14.0  18.2.0  node_modules/react-dom  npm


*/