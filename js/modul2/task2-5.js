function checkForSpam(str) {
  "use strict";
  const Word =
    str.toLowerCase().includes("sale") || str.toLowerCase().includes("spam");
  return Word;
}

console.log(checkForSpam(" How to earn fast money?"));

/*Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре*/
