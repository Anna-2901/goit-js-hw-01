function formatString(string, maxLength = 20) {
  return string.length >= maxLength ? string.slice(0, maxLength) + "…" : string;
}
console.log(formatString("Curabitur ligula sapien, tincidunt non."));

/*Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.*/
